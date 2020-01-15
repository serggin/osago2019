export default class Calculator{
    constructor(calcModel){
        this.model = calcModel;

    }

    calculate(formParameters, factorKeys){
//        console.log('**********calculate  formParameters=', formParameters)
        this.params = formParameters;
        this.factors = this.getDefaultFactors(factorKeys);

        this.loadFromModel();
        this.calculateFactors();
        //return this.calcPremium();
    }

    /**
     * Начальные значения коэффициентов калькулятора
     */
    getDefaultFactors(factorKeys) {
        var factors = {};
        var keys = factorKeys;
        for (var i in keys) {
            factors[keys[i]] = null; //no value
        }
        return factors;
    }

    getFactors() {
//        console.warn('this.factors', this.factors)
        return this.factors;
    }

    loadFromModel() {
        this.typeTC = this.model.getTypeTC(this.params.typeTC, this.params.owner);//value
        this.regions = this.model.getRegions(this.params.regions);
        /*if(this.params.city)
            this.city = this.model.getCity(this.params.city);*/
        this.powerTC = this.model.getPowerTC(this.params.powerTC);//value
        if (this.params.term)
            this.term = this.model.getTerm(this.params.term);//value
        if (this.params.period)
            this.period = this.model.getPeriod(this.params.period);

        this.kbm = this.model.getKbm(this.params.kbm);  // value ??

//        console.log('loadFromModel() this.params=', this.params)
    }

    /**
     * Рассчитать коэффициенты
     */
    calculateFactors() {
        this.factors.typeTC = this.getTypeTC();
        this.factors.powerTC = this.getPowerTC();
        this.factors.term = this.getTerm();
        this.factors.period = this.getPeriod();
        this.factors.city = this.getCity();
        this.factors.drivingstage = this.getDrivingstage();
      //  this.factors.crime = this.getCrime();
        this.factors.trailer = this.getTrailer();
        this.factors.limit = this.getLimit();
        this.factors.kbm = this.getKbm().toFixed(2);
    }

    getLimit(){
        if(this.params.owner=='yur'){
            return 1.8
        }
        if(this.params.limit.value){
            return 1.87
        }
        return 1;
    }
    getTypeTC() {
        var tTC=this.params.typeTC;
        var reg=this.params.regions;
        if(reg==null){
            reg = 'r99'
        }
        var tb =  this.model.getBaseTariff(tTC,reg)

        return this.typeTC ? tb :null //this.model.getBaseTariff(this.params.typeTC,this.params.regions) : null;//вернет null если физ лицо, Россия, на 1 год, ТС кат В
    }
    getPowerTC() {
//        console.log('getPowerTC() this.params.powerTC=', this.params.powerTC)
        return this.powerTC ? this.powerTC.coeff : null;//вернет null если физ лицо, Россия, на 1 год, ТС кат В
    }
    getBaseTariff(tc_key, regions_key){
       return this.model.getBaseTariff(tc_key, regions_key)
    }
   /* getCrime() {
        console.log('getCrime() this.params.crime=', this.params.crime)
        return (this.params.crime.value==true)? 1.5 : null;//стр. 19 п.9 коэфф КН = 1.5
    }*/
    getTerm() {
//        console.log('getTerm() this.params.term=', this.params.term)
        return this.term ? this.term.coeff : null;//вернет null если физ лицо, Россия, на 1 год, ТС кат В
    }
    getCity() {
        if(this.params.registration==='regFo'){
            return 1.7
        }
        var cityKoeff = this.model.getCityCoeff(this.params.regions, this.params.city.value, this.params.typeTC);
        return cityKoeff ? cityKoeff : null;  //вернет null если физ лицо, Россия, на 1 год, ТС кат В

    }
    getDrivingstage(){
        var drivingstageKoeff = this.model.getDrivingstageCoeff(this.params.age, this.params.drivingstage);
        return drivingstageKoeff ? drivingstageKoeff : null;  //вернет null если физ лицо, Россия, на 1 год, ТС кат В
    }

    getTrailer(){
//        console.log('getTrailer() this.params.owner=', this.params.owner)
//        console.log('getTrailer() this.params.typeTC=', this.params.typeTC)
//        console.log('getTrailer() this.params.trailer=', this.params.trailer)
        if(this.params.trailer.value) {
            if (this.params.owner == 'yur' && (this.params.typeTC == 'tc21' || this.params.typeTC == 'tc23')) {
                return 1.16;// стр.18 п.6
            }
            if (this.params.typeTC == 'tc31') {
                return 1.40
            }
            if (this.params.typeTC == 'tc32') {
                return 1.25
            }
            if (this.params.typeTC == 'tc7') {
                return 1.24
            }
        }
        return 1;
    }
    getPeriod() {
       // console.log('getPeriod() this.params.period=', this.params.period)
        return this.period ? this.period.coeff : null;
    }

    getKbm(){
       // return   this.model.getKbmCoeff(this.params.kbm, this.params.periodKbm);
        return   this.model.getKbmCoeff(this.params.kbm);
    }
    /*getCrime() {
        console.log('getCrime() this.params.crime=', this.params.crime)
        return this.crime ? this.crime.coeff : null;
    }*/
    calcPremium(){
        let premium=1
        for (let [key, value] of Object.entries(this.factors)) {
            if (value) {
                premium*=value
            }
        }
        var maxPremium = 3*this.factors.typeTC* this.factors.regions;

        if(premium>maxPremium)
            premium = maxPremium

        return Math.round(premium*100)/100
    }

    getTypeTCString(typeTC_index){
        return  this.model.getTypeTCString(typeTC_index);
    }
    getPowerTCString(powerTC_index){
        return  this.model.getPowerTCString(powerTC_index);
    }
    getTermString(term_index){
        return  this.model.getTermString(term_index);
    }
    getPeriodString(period_index){
        return  this.model.getPeriodString(period_index);
    }
    getKbmString(kbm_index){
        return  this.model.getKbmString(kbm_index);
    }
    getDriving_experienceString(age_index,drivingstage_index){
        return  this.model.getDriving_experienceString(age_index,drivingstage_index);
    }
}
