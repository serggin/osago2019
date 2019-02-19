export default class Calculator{
    constructor(calcModel){
        this.calcModel = calcModel;

    }

    calculate(state){
        console.log('**********calculate  state=', state)
        this.state = state;
        const premium = this.calcPremium(this.state)

        return premium
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