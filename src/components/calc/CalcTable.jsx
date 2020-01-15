import React from 'react'
import Table from '../html/Table.jsx'
import {calculator} from '../App.jsx'
export default class CalcTable extends React.Component{
    constructor(props){
        super(props)
//        console.warn('constructor props=', props)
        this.colHeaders = ["Наименование", "Коэффициент"];
        this.state = {data: []};
    }

    componentDidMount() {
//        this.setFactors([]);
        this.calculate()
        this.calcPremium();

    }

    setFactors(factors) {
        var data = [];
        var factorData = this.factorData();
        for (var key in factorData) {
            var value = factors[key] ? factors[key] : 'не используется';
            data.push([factorData[key], value]);
        }
        this.setState({data: data});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
//            console.warn('CalcTable.componentDidUpdate() props=', this.props)
            this.calculate()
            this.calcPremium();

        }
    }

    calculate() {
        calculator.calculate(this.props, this.getFactorKeys())
        const {typeTC,powerTC,term, period,city,crime,kbm, limit,trailer,drivingstage,} = calculator.getFactors();

        this.setFactors({
            powerTC:powerTC,
            term: term,
            period:period,
            trailer:trailer,
            kbm:kbm,


            city:city,
            drivingstage: drivingstage,
            limit:limit,
            crime:crime,


           // driving_experience: driving_experience,
            typeTC:typeTC,
        })

        //этот метод для заявок, его нельзя удалять, только комментировать для отладки. Для боевой - расскомментировать обязательно!
/*        if(global.getTariffValues){
            var tc_key=this.props.typeTC;
            var regions_key = this.props.regions;
            console.log('getTariffValues tc_key=', tc_key)
            console.log('getTariffValues regions_key=', regions_key)
            var baseTariff = calculator.getBaseTariff(tc_key, regions_key);
            var reg = regions_key==="r90"? 'МОСКВА':'';
            var country = this.props.city.value;

            var owner_customer = this.props.owner== 'fiz'? ' физ.лицо; ' : ' юр.лицо; '
            var registration = this.props.registration=='regRu'? "ТС зарегистрировано в России":this.props.registration=='regFo' ? 'ТС зарегистрировано в иностранном государстве':'ТС следует к месту регистрации';
            var typeTC_customer = calculator.getTypeTCString(this.props.typeTC);
            var trailer_customer = this.props.trailer.value;
            var powerTC_customer = calculator.getPowerTCString(this.props.powerTC);
            var term_customer = calculator.getTermString(this.props.term);
            var period_customer = calculator.getPeriodString(this.props.period);
            var kbm_customer = calculator.getKbmString(this.props.kbm);
            var limit_customer = this.props.limit?'Да, ограничено': 'Нет, не ограничено';
            var driving_experience_customer = calculator.getDriving_experienceString(this.props.age,this.props.drivingstage);


            var str ='<table>' +
                '<tbody>' +
                '<tr>' +
                '<th>Владелец:</th>' +
                '<th>Регистрация ТС:</th>' +
                '<th>Тип ТС:</th>' +
                '<th>Прицеп:</th>' +
                '<th>Мощность ТС:</th>' +
                '<th>Срок договора:</th>' +
                '<th>Период использования ТС:</th>' +
                '<th>КБМ:</th>' +
                '<th>Кол-во водителей ограничено:</th>' +
                '<th>Минимальный возраст/стаж:</th>' +
                '</tr>' +
                '<tr>' +
                '<td>'+owner_customer+'</td>' +
                '<td>'+registration+'</td>' +
                '<td>'+typeTC_customer+'</td>' +
                '<td>'+trailer_customer+'</td>' +
                '<td>'+powerTC_customer+'</td>' +
                '<td>'+term_customer+'</td>' +
                '<td>'+period_customer+'</td>' +
                '<td>'+kbm_customer+'</td>' +
                '<td>'+limit_customer+'</td>' +
                '<td>'+driving_experience_customer+'</td>' +
                '</tr>' +

                '</tbody>' +
                '</table>';

            global.getTariffValues({values:str, premium:calculator.calcPremium(), baseTariff:baseTariff, region:reg, city:country})
        } else
            console.log("getTariffValues undefined")*/
    }

    factorData() {
        return {
            powerTC: 'По мощности',
            term: 'По сроку страхования',
            period: 'По периоду использования',
            kbm: 'По КБМ',
            trailer: 'По наличию прицепа',
            city: 'По территории использования',
            limit: 'По ограничению лиц, допущенных к управлению ТС',
            crime: 'По наличию грубых нарушений условий страхования',
            drivingstage: 'По минимальному возрасту и стажу лица, допущенного к управлению ТС',

            typeTC: 'Базовый тариф',
        }
    }

    /**
     * Выдать массив ключей коэффициентов (для контроллера)
     * @returns {Array}
     */
    getFactorKeys() {
        return Object.keys(this.factorData());
    }


    calcPremium(){
        this.props.setPremium(calculator.calcPremium())

    }

    render(){
        return(
            <div>
                <Table id="coeff_table" colHeaders={this.colHeaders} data={this.state.data} enabled='false'/>

            </div>
        )
    }

}
