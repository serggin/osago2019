import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcContext} from '../../../App.jsx'
import {setTerm} from "../../../../actions";

export default class Term extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            term: {selected: "t0"}
        }
    }
    render() {
        return (
            <calcContext.Consumer>
                {(contextValue) => {
//                    console.log('contextValue=', contextValue)
                    const options = contextValue.calcView.getOptions("term")
//                    console.log('options=', options)
                    return (
                        <FormSelect name="term" formlabel="Срок договора"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите срок договора"
                                    assigned={(v) => this.props.setTerm(v)}
                                    selected={this.state.term.selected}
                        />
                    )
                }}
            </calcContext.Consumer>
        )
    }
}
