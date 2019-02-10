import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TypeTC from '../components/TypeTC.jsx'
import { setTypeTC } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        owner: state.owner,
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setTypeTC }, dispatch)

const ConnectedTypeTC = connect(mapStateToProps,mapDispatchToProps)(TypeTC)
export default ConnectedTypeTC
