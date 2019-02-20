export default class Calculator{
    constructor(calcModel){
        this.model = calcModel;

    }

    calculate(formParameters, factorKeys){
        console.log('**********calculate  formParameters=', formParameters)
        this.params = formParameters;
        this.factors = this.getDefaultFactors(factorKeys);

        this.loadFromModel();
        this.calculateFactors();
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
        console.warn('this.factors', this.factors)
        return this.factors;
    }

    loadFromModel() {
        this.typeTC = this.model.getTypeTC(this.params.typeTC, this.params.owner);//value
        this.regions = this.model.getRegions(this.params.regions);
        this.powerTC = this.model.getPowerTC(this.params.powerTC);//value
        if (this.params.term)
            this.term = this.model.getTerm(this.params.term);//value
        if (this.params.period)
            this.period = this.model.getPeriod(this.params.period);

        this.kbm = this.model.getKbm(this.params.kbm);  // value ??
        console.log('loadFromModel() this.params=', this.params)
//        this.driving_experience = this.model.getDriving_experience(this.params.driving_experience); // value ??
    }

    /**
     * Рассчитать коэффициенты
     */
    calculateFactors() {
        this.factors.term = this.getTerm();
/*
        this.factors.period = this.getPeriod();
        this.factors.trailer = this.getTrailer();
        this.factors.typeTC = this.getTypeTC();
        this.factors.powerTC = this.getPowerTC();
        this.factors.kbm = this.getKbm();
        this.factors.limit = this.getLimit();
        this.factors.crime = this.getCrime();
        this.factors.territory = this.getTerritory();
        this.factors.driving_experience = this.getDriving_experience();
*/
    }

    getTerm() {
        console.log('getTerm() this.term=', this.term)
        return this.params.term ? this.term.coeff : null;//вернет null если физ лицо, Россия, на 1 год, ТС кат В
    }

    calcPremium(){
        let premium = 0;
        premium+=this.calcTypeTCPremium();
        premium+=this.calcPowerTCPremium();
        premium+=this.calcPeriodPremium();
        premium+=this.calcTermPremium();
        premium+=this.calcKbmPremium();
        premium+=this.calcTrailerPremium();
        premium+=this.calcRegionsPremium();
        premium+=this.calcLimitPremium();
        premium+=this.calcCrimePremium();
        premium+=this.calcAgeStagePremium();

        return premium
    }

    calcTypeTCPremium(){
         const {typeTC} = this.state
        console.log('this.state>>>typeTC'+typeTC)
         /* const {st_group} = regions
       const baseTariff = typeTC[st_group]
        console.log('st_group'+st_group)

        const ssObj = this.calcModel.getTypeTcPremium(mainBuildingSS)
        if(ssObj && buildingType){
            return buildingType==='wood'? ssObj.wood : ssObj.stone;
        }
       */ return 10;
    }
    calcPowerTCPremium(){
        return 0
    }
    calcPeriodPremium(){
        return 0
    }
    calcTermPremium(){
        return 0
    }
    calcKbmPremium(){
        return 0
    }
    calcTrailerPremium(){
        return 0
    }
    calcRegionsPremium(){
        return 0
    }
    calcLimitPremium(){
        return 0
    }
    calcCrimePremium(){
        return 0
    }
    calcAgeStagePremium(){
        return 0
    }


}