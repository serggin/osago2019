import React from 'react'
//import PropTypes from 'prop-types'
import ConnectedOwnerRG from './calcform/containers/ConnectedOwnerRG.jsx'
import ConnectedRegistrationRG from './calcform/containers/ConnectedRegistrationRG.jsx'
import ConnectedTypeTC from './calcform/containers/ConnectedTypeTC.jsx'
import {context} from '../App.jsx'

export default class CalcForm extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
    }

    render(){
        return(
            <div className="well">
                <div><ConnectedOwnerRG context={context} /></div>
                <div><ConnectedRegistrationRG context={context} /></div>
                <div><ConnectedTypeTC context={context} /></div>
            </div>
         )
    }

}