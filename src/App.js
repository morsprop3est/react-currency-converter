import React, {useState} from "react";
import './styles/App.css';
import {Block} from "./components/Block";




function App() {
    const [fromCurrency, setFromCurrency] = React.useState('UAH')
    const [toCurrency, setToCurrency] = React.useState('USD')
    const [fromPrice, setFromPrice] = React.useState(0)
    const [toPrice, setToPrice] = React.useState(1)

    const [rates, setRates] = React.useState({})


    React.useEffect(() => {
        const newRates = {
            "UAH": 37,
            "EUR": 0.92,
            "USD": 1,
            "GBD": 0.79,
        }

        setRates(newRates);
    })

    const onChangeFromPrice = (value) => {
        const price = value / rates[fromCurrency];
        const result = price * rates[toCurrency];
        setToPrice(result);
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const result = (rates[fromCurrency] / rates[toCurrency]) * value;
        setFromPrice(result)

        setToPrice(value)
    }

    React.useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency])



    React.useEffect(() => {
        onChangeToPrice(toPrice);
    }, [toCurrency])

    return (
        <div className="App">
            <Block value = {fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
            <Block value = {toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
        </div>
    );
}

export default App;
