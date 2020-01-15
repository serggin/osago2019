import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OwnerRG from '../components/OwnerRG.jsx'
import { setOwner } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setOwner }, dispatch)

const ConnectedOwnerRG = connect(mapStateToProps,mapDispatchToProps)(OwnerRG)
export default ConnectedOwnerRG
