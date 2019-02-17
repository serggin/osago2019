import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'
import {setDrivingstage} from "../../../../actions";

export default class Drivingstage extends React.Component {
    constructor(props) {
        super(props)
        console.warn('drivingstage constructor props=', props)
        //const {drivingstage} = calcView.getInitialStates();
        //this.state = { drivingstage: drivingstage }
    }

    render() {

                    const options = calcView.getOptions("drivingstage", this.props.age);

                   console.log('options=', options)
                    return (
                        <FormSelect name="drivingstage" formlabel="Стаж водителя, выбранного выше по возрасту"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите место регистрации ТС"
                                    assigned={(v) => this.props.setDrivingstage(v)}
                                    selected={options[0].label}
                        />
                    )

    }
}
