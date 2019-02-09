import React from 'react'
import {calculator} from "./App.jsx";

export default class Premium extends React.Component{
    constructor(props){
        super(props)
        console.warn('constructor props=', props)
    }

    render(){
        // let premium = calculator.calculate(this.props)
        //const {mainBuilding,sauna,dop1,dop2, im, go} = this.props
        //let premium = calculator.calculate({mainBuilding,sauna,dop1,dop2, im, go})
        let premium = calculator.calculate({})
        return(
            <div className='premium-block'>
                страховая премия: <br/> <span>{premium}</span>
            </div>
        )
    }

}
