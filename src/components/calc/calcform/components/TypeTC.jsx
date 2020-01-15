import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'

export default class TypeTC extends React.Component {
    constructor(props) {
        super(props)
//        console.warn('constructor props=', props)
        this.state = {
            selected: props.typeTC
        }
    }
    render() {
        const options = calcView.getOptions("typeTC")
        //                    console.log('options=', options)
        return (
            <FormSelect name="typeTC" formlabel="Тип ТС"
                        labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                        options={options}
                        placeholder="Выберите тип ТС"
                        assigned={(v) => this.props.setTypeTC(v)}
                        selected={this.state.selected}
            />
        )
    }
}
