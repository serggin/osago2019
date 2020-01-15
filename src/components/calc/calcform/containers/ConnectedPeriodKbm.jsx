import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PeriodKbm from '../components/PeriodKbm.jsx'
import { setPeriodKbm } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        kbm: state.kbm.value,
        periodKbm: state.periodKbm,
     }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setPeriodKbm }, dispatch)

const ConnectedPeriodKbm = connect(mapStateToProps,mapDispatchToProps)(PeriodKbm)
export default ConnectedPeriodKbm
