/*import {showSauna as showSaunaAction} from '../../actions'
import {showDop1 as showDop1Action} from '../../actions'*/

import {
    setFixedTerm as setFixedTermAction,
    setTerm as setTermAction,
    setFixedPeriod as setFixedPeriodAction,
    setPeriod as setPeriodAction,
    setDrivingstage as setDrivingstageAction,
    setCrime as setCrimeAction,
    setLimit as setLimitAction,
    setPeriodKbm as setPeriodKbmAction

} from '../../actions'

export default class CalcView{
    constructor(model){
        this.model = model;
        this.stateChanged = this.stateChanged.bind(this)
        this.cnt = 0;
        this.isBusy = false;
        this.hasMoreChanges = false;
        this.statesToUpdate = {};
    }

    init(store) {
        this.store = store
        store.subscribe(this.stateChanged)
    }

  /*  getInitialStates() {
        return {
            owner: {buttonChecked: "fiz"},
            typeTC:{selected: "tc22", enabled:true },
            registration: {buttonChecked: "regRu"},
            trailer: {selected: false, enabled:false},
            powerTC:{selected: 'p70'},
            period: {selected:"t8"},
            regions:{enabled: true},
            city:{regions:"r90", enabled: false},
            term:{enabled:'false'},
            limit: {selected: false},
            driving_experience:{enabled:true},
            region: {region: null},
            crime: {selected: false, enabled:false},
            age:{enabled: true},
            drivingstage:{age:"de0", enabled: false},
            
            kbm:{enabled: true},
            periodKbm:{kbm:"kbm1", enabled: false},
        }
    }*/


    stateChanged() {
        if (++this.cnt > 100) {
            alert("зациклилось!")
            return
        }
        if (!this.isBusy) {
            this.isBusy = true;
//            console.warn('stateChanged()')
            this.cycle = 0;
            this.handleCycle()
        }
    }

    handleCycle() {
        if (++this.cycle > 5) {
            alert("Циклы зациклились!")
            return
        }
        this.state = this.store.getState()
        this.handleDependences()
        this.updateStates()
        if (this.hasMoreChanges) {
            this.handleCycle()
        }
    }

    handleDependences() {
        this.hasMoreChanges = false;
        this.statesToUpdate = {};
        this.handleOwnerDepencies();//owner
        this.handleRegistrationDependencies();
        //this.handleTypeTCDepencies(); стр 7
    }
    handleOwnerDepencies() {
        //this.params.yurPeriod = false;
        switch (this.store.getState().owner) {
            case "yur":
                    this.addUpdateStates({
                    limit: true,
                 /*   age: null,
                    drivingstage: null,*/

                })


                break;

            case "fiz":
                break;
        }
    }
    handleRegistrationDependencies() {
        var term;  // = undefined
//        var fixedTerm;
        var fixedPeriod;
        var period;
        var crime;

        switch (this.store.getState().registration) {
            case "regRu":
//                fixedTerm = 't12';  // 1 год
                term = {fixed: false};
//                term = 't12';
                crime: true;
                break;
            case "regNo":
                term = {term: 't20', fixed: 't20'};  // до 20 дней
                fixedPeriod = 't8';
                period = 't8';
                crime=true;
                break;
            case "regFo":
                term = {fixed: false};
                break;
            default:
                //Только при переходе на "regFo" с "regRu" или с "regRu" нужно сбросить:
                if (['t12', 't20'].indexOf(this.store.getState().term) >= 0)
                    term = {value:null};
        }
        this.addUpdateStates({
            term: term,
            fixedPeriod: fixedPeriod,
            period: period,
            crime: crime,
        })
    }

    addUpdateStates (states) {
        this.statesToUpdate = {...this.statesToUpdate, ...states};
    }

    updateStates() {
        console.warn('updateStates(): ', this.statesToUpdate)
        for (let [key, value] of Object.entries(this.statesToUpdate)) {
            if (value !== undefined) {
                this.updateState(key, value)
            }
        }
    }

    updateState(key, value) {
        const oldValue = this.store.getState()[key]
        var moreChanges = false;
        if (this.hasStateChanged(oldValue, value)) {
            moreChanges = true
            switch (key) {
                case 'fixedTerm' :
                    this.store.dispatch(setFixedTermAction(value))
                    break;
                case 'term' :
                    this.store.dispatch(setTermAction(value))
                    break;
                case 'fixedPeriod' :
                    this.store.dispatch(setFixedPeriodAction(value))
                    break;
                case 'period' :
                    this.store.dispatch(setPeriodAction(value))
                    break;
                case 'crime' :
                    this.store.dispatch(setCrimeAction(value))
                    break;
                case 'limit' :
                    this.store.dispatch(setLimitAction(value))
                    break;
                case 'drivingstage':
                    this.store.dispatch(setDrivingstageAction(value))
                    break;
                case 'periodKbm':
                    this.store.dispatch(setPeriodKbmAction(value))
                    break;
                default:
                    moreChanges = false;
            }
        }
        this.hasMoreChanges = this.hasMoreChanges || moreChanges
    }

    hasStateChanged(oldState, newState) {
        if (typeof newState === 'object') {
            for (let [key, value] of Object.entries(newState)) {
                if (newState[key] !== oldState[key]) {
                    return true
                }
            }
            return false
        } else {
            return oldState !== newState
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

            case "period":
               const  registration = this.store.getState().registration;
               if(registration==="regRu") {
                   const obj = this.model.getPeriod();
                   //  console.log('period obj=', obj);
                   for (var key in obj) {
                       options.push({value: key, label: obj[key].label, selected: false});
                   }
               }
                break;
            case "regions":
                var obj = this.model.getRegions();
                //  console.log('period obj=', obj);
                for (var key in obj) {
                    options.push({value: key, label: obj[key].label, selected: false});
                }
                break;
            case "city":
                var obj = this.model.getCity(parameter);
                console.log('view getOptions city parameter='+parameter)
                /* console.log('OsagoView.getOptions name=city, parameter=' + parameter);
                 console.log(obj);*/
                for (var key in obj) {
                    options.push({value: key, label: key, selected: false});
                }
                break;
            case "age":
                var obj = this.model.getAge();
                //  console.log('period obj=', obj);
                for (var key in obj) {
                    options.push({value: key, label: obj[key].label, selected: false});
                }
                break;

            case "drivingstage":
                var obj = this.model.getDrivingstage(parameter);
                console.log('++++++view getOptions drivingstage parameter='+parameter)
                for (var key in obj) {
                    options.push({value: key, label: key, selected: true});
                }
                break;
            case "kbm":
                var obj = this.model.getKbm();
                //  console.log('period obj=', obj);
                for (var key in obj) {
                    options.push({value: key, label: obj[key].label, selected: false});
                }
                break;

            case "periodKbm":
                var obj = this.model.getPeriodKbm(parameter);

                for (var key in obj) {
                    options.push({value: key, label: key, selected: true});
                }
                break;
        }
        return options;
    }
}