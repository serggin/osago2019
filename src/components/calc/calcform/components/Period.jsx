import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'
import {setPeriod} from "../../../../actions";

export default class Period extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            period: {selected: "t0"}
        }
    }
    render() {

                    const options = calcView.getOptions("period")
//                    console.log('options=', options)
                    return (
                        <FormSelect name="period" formlabel="Период использования ТС"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите период использования ТС"
                                    assigned={(v) => this.props.setPeriod(v)}
                                    selected={this.state.period.selected}
                        />
                    )
    }
}
