const baseCoeff = require ('./baseCoeff.js')

export default class CalcModel {
    constructor() {
        this.load();
    }
    load() {
        this.typeTC = baseCoeff.typeTC;
        this.powerTC = baseCoeff.powerTC;
        this.term = baseCoeff.term;
        this.period = baseCoeff.period;
        this.regions = baseCoeff.regions;
        this.city = baseCoeff.regions; //???
        this.age = baseCoeff.age; //???
        this.drivingstage = baseCoeff.age; //???

        /*this.mainBuildingPremium = baseCoeff.mainBuildingPremium;
        this.saunaPremium = baseCoeff.saunaPremium;
        this.dop1Premium = baseCoeff.dop1Premium;
        this.dop2Premium = baseCoeff.dop2Premium;
        this.imPremium = baseCoeff.imPremium;
        this.goPremium = baseCoeff.goPremium;*/

    }

    getTypeTC(key=null){
        if(key)
            return this.typeTC[key];
        return this.typeTC;
    }

    getPowerTC(key=null){
        if(key)
            return this.powerTC[key];
        return this.powerTC;
    }

    getTerm(key=null){
        if(key)
            return this.term[key];
        return this.term;
    }

    getPeriod(key=null){
        if(key)
            return this.period[key];
        return this.period;
    }

    getRegions(key=null){
        if(key)
            return this.regions[key];
        return this.regions;
    }

    getCity(regionKey, key=null){
        var region = this.getRegions(regionKey);
        if(key)
            return region.city[key];
        return region.city;
    }

    getAge(key=null){
        if(key)
            return this.age[key];
        return this.age;
    }
    getDrivingstage(ageKey, key=null){
        console.log('>>>>>>getDrivingstage  ageKey'+ageKey)
        console.log('>>>>>>getDrivingstage  key'+key)
        var age = this.getAge(ageKey);
        if(key)
            return age.drivingstage[key];
        return age.drivingstage;
    }

}


















