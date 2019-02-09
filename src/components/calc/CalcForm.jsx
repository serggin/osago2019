import React from 'react'
//import PropTypes from 'prop-types'
import FormRadioGroup from '../form/FormRadioGroup.jsx'

export default class CalcForm extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
        this.state = {
            owner: {buttonChecked: "fiz"}
        }
    }
    getButtons(name) {
        var buttons;
        switch (name) {
            case 'ownerButtons':
                buttons = [
                    {value: "fiz", label: "Физическое лицо", checked: false},
                    {value: "yur", label: "Юридическое лицо", checked: false},
                ];
                break;
            case 'registrationButtons':
                buttons = [
                    {value: "regRu", label: "ТС зарегистрировано в России", checked: true},
                    {value: "regFo", label: "ТС зарегистрировано в иностранном государстве", checked: false},
                    {value: "regNo", label: "ТС следует к месту регистрации", checked: false},
                ];
                break;
            default:
                buttons = [];
        }
        return buttons;
    }

    render(){
        return(
            <div className="well">
                <FormRadioGroup name="owner" formlabel="Владелец"
                                buttons={this.getButtons("ownerButtons")}
                                checked={this.state.owner.buttonChecked}
                                labelProps={{className: "col-lg-12 label label-info"}}
                                orientation="vertical"
                                assigned={(v)=>this.assignedHandler('owner', v)}/>

            </div>
        )
    }

}