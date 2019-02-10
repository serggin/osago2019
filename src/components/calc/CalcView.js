/*import {showSauna as showSaunaAction} from '../../actions'
import {showDop1 as showDop1Action} from '../../actions'*/

import {
    setFixedTerm as setFixedTermAction,
    setTerm as setTermAction} from '../../actions'

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
        this.handleDependences()
       // this.setSaunaVisibility()
       // this.setDop1Visibility()
    }

    handleDependences() {
        this.handleRegistrationDependencies();
        //this.handleOwnerDepencies();
        //this.handleTypeTCDepencies();
    }
    handleRegistrationDependencies() {
        var fixedTerm;  // = undefined
        var term;
        var fixedPeriod;
        var period;
        var crime;

        switch (this.store.getState().registration) {
            case "regRu":
                fixedTerm = 't12';  // 1 год
                term = 't12';
                break;
            case "regNo":
                fixedTerm = 't20';  // до 20 дней
                term = 't20';
                fixedPeriod = 't8';
                period = 't8';
                crime = false;
                break;
            case "regFo":
                break;
            default:
                //Только при переходе на "regFo" с "regRu" или с "regRu" нужно сбросить:
                if (['t12', 't20'].indexOf(this.store.getState().term) >= 0)
                    term = null;
        }
        this.updateStates({
            fixedTerm: fixedTerm,
            term: term,
//            fixedPeriod: fixedPeriod,
//            period: period,
//            crime: crime
        })
    }

    updateStates(states) {
        console.error('updateState() states=', states)
        for (let [key, value] of Object.entries(states)) {
            if (value !== undefined) {
                this.updateState(key, value)
            }
        }
    }

    updateState(key, value) {
        const oldValue = this.store.getState()[key]
        if (oldValue !== value) {
            switch (key) {
                case 'fixedTerm' :
                    this.store.dispatch(setFixedTermAction(value))
                    break;
                case 'term' :
                    this.store.dispatch(setTermAction(value))
                    break;
            }
        }
    }

    getOptions(name, parameter = null) {
        var options = [];
        console.log('CalcView.getOptions() name='+name)
        switch (name) {
            case "typeTC":
                var obj = this.model.getTypeTC();
                console.log('typeTC obj=', obj)
                var owner = this.store.getState().owner;
                console.log('owner='+owner);
                /* console.log("CalcView. getOptions() typeTC OBJ =");
                 console.dir(obj);*/
                for (var key in obj) {
                    if (owner==='yur'){
                        if(key==='tc22');
                        else{
                            options.push({value: key, label: obj[key].label, selected: false});
                        }

                    }else{
                        if(key==='tc21');
                        else{
                            options.push({value: key, label: obj[key].label, selected: false});
                        }
                    }
                }
                break;
            case "powerTC":
                var obj = this.model.getPowerTC();
                for (var key in obj) {
                    options.push({value: key, label: obj[key].label, selected: false});
                }
                break;

            case "term":
                /*  console.log("OsagoView.getOptions term this.params.fixedTerm=" + this.params.fixedTerm);*/
                var obj = this.model.getTerm();
                if (this.store.getState().fixedTerm) {  //это key или null
                    //для фиксированного key формируем единствееную опцию
                    var key = this.store.getState().fixedTerm;
                    if (obj.hasOwnProperty(key)) {
                        options.push({value: key, label: obj[key].label, selected: true});
                    }
                } else {
                    for (var key in obj) {
                        if (obj[key].hasOwnProperty('disabled') && obj[key].disabled);
                        else {
                            options.push({value: key, label: obj[key].label, selected: false});
                        }
                    }
                    //console.log("OsagoView. getOptions()");
                    //console.dir(options);
                }
                break;
        }
        return options;
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