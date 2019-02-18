import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PowerTC from '../components/PowerTC.jsx'
import { setPowerTC } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        powerTC: state.powerTC,

    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setPowerTC }, dispatch)

const ConnectedPowerTC = connect(mapStateToProps,mapDispatchToProps)(PowerTC)
export default ConnectedPowerTC
