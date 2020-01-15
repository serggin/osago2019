import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'

export default class PeriodKbm extends React.Component {
    constructor(props) {
        super(props)
//        console.warn('PeriodKbm constructor props=', props)
    }

    render() {
        const options = calcView.getOptions("periodKbm", this.props.kbm);
        // console.log('options=', options)
        return (
            <FormSelect name="periodKbm" formlabel="Количество страховых возмещений за период КБМ"
                        labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                        options={options}
                        placeholder="Выберите количество страховых возмещений за период КБМ"
                        assigned={(v) => this.props.setPeriodKbm(v)}
                        selected={options[0].label}
            />
        )
    }
}
