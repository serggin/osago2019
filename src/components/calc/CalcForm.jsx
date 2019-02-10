import React from 'react'
//import PropTypes from 'prop-types'
import ConnectedOwnerRG from './calcform/containers/ConnectedOwnerRG.jsx'
import {context} from '../App.jsx'

export default class CalcForm extends React.Component {
    constructor(props) {
        super(props)
        console.warn('constructor props=', props)
    }

    render(){
        return(
            <div><ConnectedOwnerRG context={context} /></div>

         )
    }

}