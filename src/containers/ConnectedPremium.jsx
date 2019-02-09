import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Premium from '../components/Premium.jsx'
import { setErrorMessage, clearErrorMessage } from '../actions'

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
    bindActionCreators({ setErrorMessage, clearErrorMessage }, dispatch)


const ConnectedPremium = connect(mapStateToProps,mapDispatchToProps)(Premium)
export default ConnectedPremium