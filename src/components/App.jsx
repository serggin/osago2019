import React from 'react'
import { Provider } from 'react-redux'

import CalcModel from "./calc/CalcModel";
import CalcView from "./calc/CalcView";
import Calculator from "./calc/Calculator";
import ConnectedPremium from '../containers/ConnectedPremium.jsx'
import CalcTable from "./calc/CalcTable.jsx";
import ConnectedCalcForm from "../containers/ConnectedCalcForm.jsx";


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
                <div id="calc-content" className="col-lg-7"><ConnectedCalcForm context={context}/></div>
                <div className="col-lg-5">
                    <div id="premium-content"><ConnectedPremium context={context} /></div>
                    <div id="table-content"><CalcTable/></div>
                </div>
            </div>
        </Provider>
    </calcContext.Provider>
    )
}


export default App
export {calcContext, calculator, context}


