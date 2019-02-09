export default class Calculator{
    constructor(calcModel){
        this.calcModel = calcModel;

    }

    calculate(state){
        console.log('calculate  state=', state)
        this.state = state;
        const premium = this.calcPremium()

        return premium
    }

    calcPremium(){
        let premium = 0;
      /*  premium+=this.calcMainBuildingPremium();
        premium+=this.calcSaunaPremium();
        premium+=this.calcDop1Premium();
        premium+=this.calcDop2Premium();
        premium+=this.calcImPremium();
        premium+=this.calcGoPremium();*/
        return premium
    }
}