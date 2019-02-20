import React from 'react'
import {calculator} from "./App.jsx";

export default class Premium extends React.Component{
    constructor(props){
        super(props)
        console.warn('constructor props=', props)
    }

    render(){
//        const {owner,registration, typeTC, trailer, powerTC, period, term, regions, city, crime, limit, kbm, age, drivingstage, periodKbm } = this.props

//        let premium = calculator.calculate({owner, registration, typeTC, trailer,powerTC, regions, city, crime, limit, kbm, age, drivingstage,periodKbm})
        let premium = 0;
        return(
            <div className='premium-block'>
                страховая премия: <br/> <span>{premium}</span>
            </div>
        )
    }

}
