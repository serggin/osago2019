import watch from 'redux-watch'
import {
    setFixedTerm as setFixedTermAction,
    setTerm as setTermAction,
    setFixedPeriod as setFixedPeriodAction,
    setPeriod as setPeriodAction,
    setDrivingstage as setDrivingstageAction,
    setCrime as setCrimeAction,
    setLimit as setLimitAction,
    setPeriodKbm as setPeriodKbmAction,
    setTrailer as setTrailerAction

} from '../../actions'

export default class CalcView{
    constructor(model){
        this.model = model;
//        this.stateChanged = this.stateChanged.bind(this)
/*        this.cnt = 0;
        this.isBusy = false;
        this.hasMoreChanges = false;
        this.statesToUpdate = {}; */
    }

    init(store) {
        this.store = store
//        store.subscribe(this.stateChanged)
        this.subscribe()
    }

    subscribe() {
        let registrationWatch = watch(this.store.getState, 'registration')
        this.store.subscribe(registrationWatch((newVal, oldVal, objectPath) => {
            this.handleRegistrationDependencies(newVal, oldVal)
        }))

        let ownerWatch = watch(this.store.getState, 'owner')
        this.store.subscribe(ownerWatch((newVal, oldVal, objectPath) => {
            this.handleOwnerDependencies(newVal, oldVal)
        }))

        let typeTCWatch = watch(this.store.getState, 'typeTC')
        this.store.subscribe(typeTCWatch((newVal, oldVal, objectPath) => {
            this.handleTypeTCDependencies(newVal, oldVal)
        }))
    }
    handleTypeTCDependencies(newVal, oldVal) {
        this.setTrailerDependency()
    }

    handleOwnerDependencies(newVal, oldVal) {
        //this.params.yurPeriod = false;
        switch (newVal) {
            case "yur":
                this.updateStates({
                    limit: true,
//                    trailer: {value: false, disabled:false}
                    /*   age: null,
                       drivingstage: null,*/
                })
                break;

            case "fiz":
                this.updateStates({
                    limit: false,
//                    trailer: {value: false, disabled:false}

                /*   age: null,
                   drivingstage: null,*/
                })
                break;
        }
        this.setTrailerDependency()
    }

    handleRegistrationDependencies(newVal, oldVal) {
        var term;  // = undefined
        var fixedPeriod;
        var period;
        var crime;

        switch (newVal) {
            case "regRu":
//                fixedTerm = 't12';  // 1 год
//                term = 't12';
                term = {fixed: false};
                crime= {disabled:false};
                break;
            case "regNo":
                term = {term: 't20', fixed: 't20'};  // до 20 дней
                fixedPeriod = 't8';
                period = 't8';
                crime={disabled:false};
                break;
            case "regFo":
                term = {fixed: false};
                crime= {value: false, disabled:true}
                break;
            default:
                //Только при переходе на "regFo" с "regRu" или с "regRu" нужно сбросить:
                if (['t12', 't20'].indexOf(this.store.getState().term) >= 0)
                    term = {value: null};
        }
        this.updateStates({
            term: term,
            fixedPeriod: fixedPeriod,
            period: period,
            crime: crime,
        })
    }

    setTrailerDependency() {
        const {owner, typeTC} = this.store.getState()
        let disabled = false
        if (owner == "fiz" && ['tc22', 'tc23'].indexOf(typeTC) >= 0) {
            disabled = true
        }
        this.updateStates({trailer: {value:false, disabled:disabled}})
    }

    /*
     * Обновить состояния из this.statesToUpdate в Redux store
     */
    updateStates(states) {
        console.warn('updateStates(): ', states)
        for (let [key, value] of Object.entries(states)) {
            if (value !== undefined) {  //Если value === undefined, то обновлять не чего
                this.updateState(key, value)
            }
        }
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

    /*
     * Обработчик изменения состояния в Redux store
     */
/*
    stateChanged() {
        if (++this.cnt > 100) {
            alert("зациклилось!")
            return
        }
        if (!this.isBusy) { //обработчик еще не запущен
            this.isBusy = true; // теперь запущен
//            console.warn('stateChanged()')
            this.cycle = 0;
            this.handleCycle()  // выполняем цикл обработки
        }
    }
*/

    /*
     * Выполнение цикла обработки - обработка всех зависимостей
     */
/*
    handleCycle() {
        if (++this.cycle > 5) {
            alert("Циклы зациклились!")
            return
        }
        this.state = this.store.getState()
        this.handleDependences()    // Обработка зависимостей
        this.updateStates()     // Оновление состояний в Redux store
        if (this.hasMoreChanges) { // было изменение хотя одного состояния
            this.handleCycle()      // нужно выполнить очередной цикл обработки зависимостей
        }
    }
*/

    /*
     * Обработка зависимостей состояний Redux store
     */
/*
    handleDependences() {
        this.hasMoreChanges = false;    // изменений пока нет
        this.statesToUpdate = {};   //и объект с новыми состояниями пока пуст
        this.handleOwnerDepencies();    //owner
        this.handleRegistrationDependencies0();
        //this.handleTypeTCDepencies(); стр 7
    }
*/



/*
    handleOwnerDepencies0() {
        //this.params.yurPeriod = false;
        switch (this.store.getState().owner) {
            case "yur":
                    this.addUpdateStates({
                            limit: true,
                         /!*   age: null,
                            drivingstage: null,*!/
                        })
                break;

            case "fiz":
                break;
        }
    }
*/

/*
    handleRegistrationDependencies0() {
        var term;  // = undefined
        var fixedPeriod;
        var period;
        var crime;

        switch (this.store.getState().registration) {
            case "regRu":
//                fixedTerm = 't12';  // 1 год
//                term = 't12';
                term = {fixed: false};
                crime= {disabled:false};
                break;
            case "regNo":
                term = {term: 't20', fixed: 't20'};  // до 20 дней
                fixedPeriod = 't8';
                period = 't8';
                crime={disabled:false};
                break;
            case "regFo":
                term = {fixed: false};
                crime= {value: false, disabled:true}
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
*/

    /*
     * Запомнить состояния, которые предстоит обновить
     * (дописать/заменить в объект this.statesToUpdate)
     */
/*
    addUpdateStates (states) {
        console.log("addUpdateStates() states=", states);
        this.statesToUpdate = {...this.statesToUpdate, ...states};
        console.log("statesToUpdate=", this.statesToUpdate);
    }
*/

    /*
     * Обновить состояния из this.statesToUpdate в Redux store
     */
/*
    updateStates0() {
        console.warn('updateStates(): ', this.statesToUpdate)
        for (let [key, value] of Object.entries(this.statesToUpdate)) {
            if (value !== undefined) {  //Если value === undefined, то обновлять не чего
                this.updateState(key, value)
            }
        }
    }
*/

    /*
     * Обновить состояния в Redux store
     * key - имя параметра состояния (см. reducers/index.js)
     * value - новое значение состояния
     */
    updateState(key, value) {
        const oldValue = this.store.getState()[key] // старое значение
//        var moreChanges = false;    // пока ничего не изменили
        if (this.hasStateChanged(oldValue, value)) {    // проверка, отличается ли новое состояние от старого
//            moreChanges = true // будем изменять
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
                case 'trailer' :
                    this.store.dispatch(setTrailerAction(value))
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
//                    moreChanges = false;    // так ничего и не изменили
            }
        }
//        this.hasMoreChanges = this.hasMoreChanges || moreChanges    // если изменили, то this.hasMoreChanges = true
        // иначе оставим прежнее значение this.hasMoreChanges
    }

    /*
     * Проверка, отличается ли новое состояние от старого
     * oldState - старое состояния, берется из Redux store
     * newState - новое состояние, если объект, то м.б. часть параметров объекта состояния
     */
    hasStateChanged(oldState, newState) {
        if (typeof newState === 'object') { // тип состояния - объект?
            for (let [key, value] of Object.entries(newState)) { //цикл по параметрам объекта нового состояния
                // (новое состояние может иметь меньше параметров, чем старое полное из Redux store)
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