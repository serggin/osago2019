/*import {showSauna as showSaunaAction} from '../../actions'
import {showDop1 as showDop1Action} from '../../actions'*/

export default class CalcView{
    constructor(model){
        this.model = model;
        this.stateChanged = this.stateChanged.bind(this)
    }

    init(store) {
        this.store = store
        store.subscribe(this.stateChanged)
    }

    stateChanged() {
        console.warn('stateChanged()')
        this.state = this.store.getState()
       // this.setSaunaVisibility()
       // this.setDop1Visibility()
    }

/*    setSaunaVisibility() {
        const {mainBuilding, showSauna} = this.state
        if (mainBuilding.buildingType && mainBuilding.mainBuildingSS) {
            if (!showSauna.sauna) {
                this.store.dispatch(showSaunaAction())
            }
        }
    }

    setDop1Visibility(){
        const {mainBuilding, showDop1} = this.state
        if (mainBuilding.buildingType && mainBuilding.mainBuildingSS) {
            if (!showDop1.dop1) {
                this.store.dispatch(showDop1Action())
            }
        }
    }

    getOptions(name, parameter = null) {
        var options = [];
        switch (name) {
            case "mainBuildingPremium":
                var arr = this.model.getMainBuildingPremium();
                options = arr.map((item)=>{
                    return {value:item.ss, label:item.ss, selected: false}
                })
                break;

            case "saunaPremium":
                var arr = this.model.getSaunaPremium();
                options = arr.map((item)=>{
                    return {value:item.ss, label:item.ss, selected: false}
                })
                break;

            case "dop1Premium":
                var arr = this.model.getDop1Premium();
                options = arr.map((item)=>{
                    return {value:item.ss, label:item.ss, selected: false}
                })
                break;

            case "dop2Premium":
                var arr = this.model.getDop2Premium();
                options = arr.map((item)=>{
                    return {value:item.ss, label:item.ss, selected: false}
                })
                break;

            case "imPremium":
                var arr = this.model.getImPremium();
                options = arr.map((item)=>{
                    return {value:item.ss, label:item.ss, selected: false}
                })
                break;

            case "goPremium":
                var arr = this.model.getGoPremium();
                options = arr.map((item)=>{
                    return {value:item.ss, label:item.ss, selected: false}
                })
                break;
        }
        return options;
    }*/
}