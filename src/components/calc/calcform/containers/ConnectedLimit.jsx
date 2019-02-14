import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Limit from '../components/Limit.jsx'
import { setLimit} from '../../../../actions'


const mapStateToProps = (state, props) => {
    return {
        limit:state.limit,
        owner: state.owner,
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setLimit }, dispatch)


const ConnectedLimit = connect(mapStateToProps,mapDispatchToProps)(Limit)
export default ConnectedLimit