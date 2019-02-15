import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcView} from '../../../App.jsx'
import {setKbm} from "../../../../actions";

export default class Kbm extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            kbm: {selected: "kbm1"}
        }
    }
    render() {

                    const options = calcView.getOptions("kbm")
                   console.log('options=', options)
                    return (
                        <FormSelect name="kbm" formlabel="КБМ"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите свой коэффициент КБМ"
                                    assigned={(v) => this.props.setKbm(v)}
                                    selected={this.state.kbm.selected}
                        />
                    )
    }
}
