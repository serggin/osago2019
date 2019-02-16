import React from 'react'
import {calcView} from '../../../App.jsx'
import FormCheckbox1 from "../../../form/FormCheckbox1.jsx";

export default class Trailer extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            trailer: {selected: false,enabled:false, }
        }
    }
    assignedHandler(key, value) {
        this.props.view.assign(key, value);
    }

    render() {

        return (

            <FormCheckbox1 name="trailer" formlabel="ТС с прицепом"
                           id="trailer"
                           labelProps={{className: "col-lg-12 label label-info"}} label="Да, есть прицеп"
                           selected={this.state.trailer.selected}
                           enabled={this.state.trailer.enabled}

                           assigned={(v)=>this.assignedHandler('trailer', v)}/>


        )
    }
}


