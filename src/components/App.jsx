import React from 'react'
import { Provider } from 'react-redux'

import CalcModel from "./calc/CalcModel";
import CalcView from "./calc/CalcView";
import Calculator from "./calc/Calculator";
import ConnectedPremium from '../containers/ConnectedPremium.jsx'
import CalcTable from "./calc/CalcTable.jsx";
import CalcForm from "./calc/CalcForm.jsx";


const context = React.createContext();

const calcModel = new CalcModel()
const calcView = new CalcView(calcModel)


const calculator = new Calculator(calcModel)


const calcContext = React.createContext();

const App = ({ store }) =>{
    /*calculator.setSubscribe(store)*/
    console.log('APP store=', store)
    calcView.init(store)
    return(
    <calcContext.Provider value={{calcView}}>
        <Provider context={context} store={store}>
            <div>
                <div><ConnectedPremium context={context} /></div>
                <div><CalcTable/></div>
                <div><CalcForm/></div>
            </div>
        </Provider>
    </calcContext.Provider>
    )
}


export default App
export {calcContext, calculator, context}


