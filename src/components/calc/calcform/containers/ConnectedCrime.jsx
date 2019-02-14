import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Crime from '../components/Crime.jsx'
import { setCrime } from '../../../../actions'


const mapStateToProps = (state, props) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setCrime }, dispatch)


const ConnectedCrime = connect(mapStateToProps,mapDispatchToProps)(Crime)
export default ConnectedCrime