import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Regions from '../components/Regions.jsx'
import { setRegions } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        /* registration: state.registration,
        fixedTerm: state.fixedTerm,*/
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setRegions }, dispatch)

const ConnectedRegions = connect(mapStateToProps,mapDispatchToProps)(Regions)
export default ConnectedRegions
