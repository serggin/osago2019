import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Trailer from '../components/Trailer.jsx'
import { setTrailer } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        trailer:state.trailer,
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setTrailer }, dispatch)

const ConnectedTrailer = connect(mapStateToProps,mapDispatchToProps)(Trailer)
export default ConnectedTrailer
