import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CalcForm from '../components/calc/CalcForm.jsx'
//import { setErrorMessage, clearErrorMessage } from '../actions'

const mapStateToProps = (state, props) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({  }, dispatch)

const ConnectedCalcForm = connect(mapStateToProps,mapDispatchToProps)(CalcForm)
export default ConnectedCalcForm
