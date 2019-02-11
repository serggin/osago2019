import React from 'react'
import FormSelect from "../../../form/FormSelect.jsx";
import {calcContext, calcView} from '../../../App.jsx'
import {setCity} from "../../../../actions";

export default class City extends React.Component {
    constructor(props) {
        super(props)
        console.warn('city constructor props=', props)
        const {city} = calcView.getInitialStates();
        this.state = { city: city }
    }

    render() {
        return (
            <calcContext.Consumer>
                {(contextValue) => {
//                    console.log('City state=', this.state)
                    const options = contextValue.calcView.getOptions("city", this.props.regions);
//                    const options = contextValue.calcView.getOptions("city", this.state.regions)
//                    console.log('options=', options)
                    return (
                        <FormSelect name="regions" formlabel="Место регистрации ТС"
                                    labelProps={{className: "col-lg-12 label label-info mandatory-parameter"}}
                                    options={options}
                                    placeholder="Выберите место регистрации ТС"
                                    assigned={(v) => this.props.setCity(v)}
                                    selected={this.state.city.selected}
                        />
                    )
                }}
            </calcContext.Consumer>
        )
    }
}
