import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'

export default class Period extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                selected: props.period.value,
                disabled: props.period.disabled,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.disabled != this.props.period.disabled){
            this.setState({
                selected: this.props.period.value,
                disabled: this.props.period.disabled
            })
        }
    }

    render() {
        const options = this.state.disabled ? [] :calcView.getOptions("period")
//                    console.log('options=', options)
        return (
            <FormSelect name="period" formlabel="Период использования ТС"
                        labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                        options={options}
                        placeholder="Выберите период использования ТС"
                        assigned={(v) => this.props.setPeriod({value:v})}
                        selected={this.state.selected}
                        enabled={!this.state.disabled}
            />
        )
    }
}
