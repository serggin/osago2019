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
        this.city = baseCoeff.regions;
        this.age = baseCoeff.age;
        this.drivingstage = baseCoeff.age;
        this.kbm = baseCoeff.kbm;
        this.periodKbm = baseCoeff.kbm;
    }

    getTypeTC(key=null){
        if(key)
            return this.typeTC[key];
        return this.typeTC;
    }
    getBaseTariff(tc_key, regions_key){
        if(this.regions[regions_key]) {
            var stGroup = this.regions[regions_key].st_group;
            return this.typeTC[tc_key][stGroup]
        }else{
            return null;
        }
    }

    getPowerTC(key=null){
        if(key)
            return this.powerTC[key];
        return this.powerTC;
    }
    getCityCoeff(regionKey, cityName, typeTCKey){
        if(this.regions[regionKey]){
             var str = this.regions[regionKey].city[cityName]
             if(str!=undefined) {
                var arr = str.split(', ')
                if (typeTCKey != 'tc7') {
                    return arr[0]
                 } else {
                    return arr[1]
                }
        }}
        return null;
    }
    getDrivingstageCoeff(ageKey, drivingstageName){
//        console.log('this.age[ageKey] ',this.age[ageKey])
        if(this.age[ageKey]){
            var str = this.age[ageKey].drivingstage[drivingstageName]
            if(str!=undefined) {
                return str
            }}
        return null;
    }

    getKbmCoeff(kbmKey, periodKbmKey=null){  //periodKbmKey - не используется
//        console.warn("-----------getKbmCoeff() kbmKey="+kbmKey);
        if(this.kbm[kbmKey]){
           // return this.kbm[kbmKey].periodKbm[periodKbmKey]
            return this.kbm[kbmKey].coeff;
        }else{
            return null
        }
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
    getDrivingstage(ageKey='de0', key=null){
        var age = this.getAge(ageKey);
        if(key)
            return age.drivingstage[key];
        return age.drivingstage;
    }

    getKbm(key=null){
        if(key)
            return this.kbm[key];
        return this.kbm;
    }

    getTypeTCString(typeTC_index){
        return this.typeTC[typeTC_index].label;
    }
    getPowerTCString(powerTC_index){
        return this.powerTC[powerTC_index].label;
    }
    getTermString(term_index){
        return this.term[term_index].label;
    }
    getPeriodString(period_index){
        return this.period[period_index].label;
    }
    getKbmString(kbm_index){
        return this.kbm[kbm_index].label;
    }
    getDriving_experienceString(age_index,drivingstage_index){
        var age_str = this.getAge(age_index).label
        var str = age_str + '  ' + drivingstage_index;
        return str;
    }

   /* getPeriodKbm(kbmKey, key=null){
        console.log('>>>>>>getPeriodKbm  kbmKey'+kbmKey)
        console.log('>>>>>>getPeriodKbm  key'+key)
        var kbm = this.getKbm(kbmKey);
        if(key)
            return kbm.periodKbm[key];
        return kbm.periodKbm;
    }*/
}


















