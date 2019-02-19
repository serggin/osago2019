import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import City from '../components/City.jsx'
import { setCity } from '../../../../actions'

const mapStateToProps = (state, props) => {
    return {
        regions: state.regions,
        city: state.city
        /* registration: state.registration,
        fixedTerm: state.fixedTerm,*/
    }
}
const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setCity }, dispatch)

const ConnectedCity = connect(mapStateToProps,mapDispatchToProps)(City)
export default ConnectedCity
