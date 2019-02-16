import React from 'react'
import {calcView} from '../../../App.jsx'
import FormCheckbox1 from "../../../form/FormCheckbox1.jsx";

export default class Crime extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            crime: {selected: false,enabled:false, }
        }
    }
    assignedHandler(key, value) {
        this.props.view.assign(key, value);
    }
    render() {

        return (

            <FormCheckbox1 name="crime" formlabel="Имеются грубые нарушения условий страхования"
        id="crime"
        labelProps={{className: "col-lg-12 label label-info"}}
        label="Да, имеются грубые нарушения условий страхования"
        selected={this.state.crime.selected}
        enabled={this.state.crime.enabled}
        assigned={(v)=>this.assignedHandler('crime', v)}
    />


        )
    }
}


