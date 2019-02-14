import React from 'react'
import {calcView} from '../../../App.jsx'
import FormCheckbox1 from "../../../form/FormCheckbox1.jsx";

export default class Limit extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            limit: {selected: false,enabled:false, }
        }
    }
    assignedHandler(key, value) {
        this.props.view.assign(key, value);
    }
    render() {
        const options = calcView.getInitialStates.crime;
        return (

            <FormCheckbox1 name="limit" formlabel="Количество водителей ограничено"
                           id="limit"
                           labelProps={{className: "col-lg-12 label label-info"}}
                           label="Нет, не ограничено"
                           selected={this.state.limit.selected}
                           enabled={this.state.limit.enabled}
                           assigned={(v)=>this.assignedHandler('limit', v)}/>


        )
    }
}


