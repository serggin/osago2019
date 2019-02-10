import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CalcForm from '../components/calc/CalcForm.jsx'
//import { setErrorMessage, clearErrorMessage } from '../actions'

const mapStateToProps = (state, props) => {
    return {
        /*mainBuilding: state.mainBuilding,
        sauna: state.sauna,
        dop1: state.dop1,
        dop2: state.dop2,
        im: state.im,
        go: state.go,
*/


    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({  }, dispatch)


const ConnectedCalcForm = connect(mapStateToProps,mapDispatchToProps)(CalcForm)
export default ConnectedCalcForm