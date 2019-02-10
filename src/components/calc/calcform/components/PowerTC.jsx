import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcContext} from '../../../App.jsx'
import {setPowerTC} from "../../../../actions";

export default class PowerTC extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            powerTC: {selected: "p0"}
        }
    }
    render() {
        return (
            <calcContext.Consumer>
                {(contextValue) => {
//                    console.log('contextValue=', contextValue)
                    const options = contextValue.calcView.getOptions("powerTC")
//                    console.log('options=', options)
                    return (
                        <FormSelect name="powerTC" formlabel= "Мощность ТС"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите мощность двигателя ТС"
                                    assigned={(v) => this.props.setPowerTC(v)}
                                    selected={this.state.powerTC.selected}
                        />
                    )
                }}
            </calcContext.Consumer>
        )
    }
}
