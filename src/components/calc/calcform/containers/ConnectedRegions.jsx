import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Regions from '../components/Regions.jsx'
import { setRegions } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        regions: state.regions,
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setRegions }, dispatch)

const ConnectedRegions = connect(mapStateToProps,mapDispatchToProps)(Regions)
export default ConnectedRegions
