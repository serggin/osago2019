import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Term from '../components/Term.jsx'
import { setTerm } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        registration: state.registration,
        term: state.term,
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setTerm }, dispatch)

const ConnectedTerm = connect(mapStateToProps,mapDispatchToProps)(Term)
export default ConnectedTerm
