import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Main} from "./components/main/Main";
import {Footer} from './components/footer/Footer';
import {Header} from "./components/header/Header";

function App() {

    const [rates, setRates] = useState<any>([])

    useEffect(() => {
        axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(res => {
            res.data.filter((item: any) => item.cc === "USD" || item.cc === "EUR")
            const result = [...res.data.filter((item: any) => item.cc === "USD" || item.cc === "EUR"), {
                txt: 'Гривня',
                rate: 1,
                cc: 'UAN'
            }]
            setRates(result)
        })
    }, [])

    return (
        <div className="App">
            <Header rates={rates}/>
            <Main rates={rates}/>
            <Footer/>
        </div>
    );
}

export default App;
