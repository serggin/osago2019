import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'
import {setAge} from "../../../../actions";

export default class Age extends React.Component {
    constructor(props) {
        super(props)
//        console.warn('constructor props=', props)
        this.state = {
            age: {selected: "de0"}
        }
    }
    render() {

                    const options = calcView.getOptions("age")
                    console.log('options=', options)
                    return (
                        <FormSelect name="age" formlabel="Возраст водителя (если водителей несколько, выбирать следует минимальный)"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите минимальный возраст водителя"
                                    assigned={(v) => this.props.setAge(v)}
                                    selected={this.state.age.selected}
                        />
                    )
    }
}
