import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CalcTable from '../components/calc/CalcTable.jsx'
import {setPremium} from '../actions'
//import { setErrorMessage, clearErrorMessage } from '../actions'

const mapStateToProps = (state, props) => {
    return {
        owner:state.owner,
        registration:state.registration,
        typeTC:state.typeTC,
        trailer:state.trailer,
        powerTC:state.powerTC,
        period:state.period,
        term:state.term,
        regions:state.regions,
        city:state.city,
        crime:state.crime,
        limit:state.limit,
        kbm:state.kbm,
        age:state.age,
        drivingstage:state.drivingstage,
        periodKbm:state.periodKbm,



    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({setPremium  }, dispatch)


const ConnectedCalcTable = connect(mapStateToProps,mapDispatchToProps)(CalcTable)
export default ConnectedCalcTable