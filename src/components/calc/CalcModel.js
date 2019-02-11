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

  /*  getMainBuildingPremium(key=null){
        if(key || key==0)
            return this.mainBuildingPremium.find((item)=>item.ss==key);
        return this.mainBuildingPremium;

    }

    getSaunaPremium(key=null){
        if(key || key==0)
            return this.saunaPremium.find((item)=>item.ss==key);
        return this.saunaPremium;
    }

    getDop1Premium(key=null){
        if(key || key==0)
            return this.dop1Premium.find((item)=>item.ss==key);
        return this.dop1Premium;
    }

    getDop2Premium(key=null){
        if(key || key==0)
            return this.dop2Premium.find((item)=>item.ss==key);
        return this.dop2Premium;
    }

    getImPremium(key=null){
        if(key || key==0)
            return this.imPremium.find((item)=>item.ss==key);
        return this.imPremium;
    }

    getGoPremium(key=null){
        if(key || key==0)
            return this.goPremium.find((item)=>item.ss==key);
        return this.goPremium;
    }*/

}


















