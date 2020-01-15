import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Age from '../components/Age.jsx'
import { setAge } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        age: state.age,
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setAge }, dispatch)

const ConnectedAge= connect(mapStateToProps,mapDispatchToProps)(Age)
export default ConnectedAge
