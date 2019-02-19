import React from 'react'
import Table from '../html/Table.jsx'
import {calculator} from '../App.jsx'
export default class CalcTable extends React.Component{
    constructor(props){
        super(props)
        console.warn('constructor props=', props)
        this.colHeaders = ["Наименование", "Коэффициент"];
        this.state = {data: []};
    }

   /* componentDidMount() {
        this.setFactors([]);
    }*/

   /* setFactors(factors) {
        var data = [];
        var factorData = this.factorData();
        for (var key in factorData) {
            var value = factors[key] ? factors[key] : 'не используется';
            data.push([factorData[key], value]);
        }
        this.setState({data: data});
    }*/
   //вызвать салькулятор, кот все рассчитает

    factorData() {
        return {
            powerTC: 'По мощности',
            term: 'По сроку страхования',
            period: 'По периоду использования',
            kbm: 'По КБМ',
            trailer: 'По наличию прицепа',
            territory: 'По территории использования',
            limit: 'По ограничению лиц, допущенных к управлению ТС',
            crime: 'По наличию грубых нарушений условий страхования',
            driving_experience: 'Минимальный возраст и водительский стаж лиц, допущенных к управлению ТС',

            typeTC: 'Базовый тариф',
        }
    }

    render(){
        return(
            <div>
                <Table id="coeff_table" colHeaders={this.colHeaders} data={this.state.data} enabled='false'/>

            </div>
        )
    }

}
