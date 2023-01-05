import React, {useEffect, useState} from 'react';
import {Input} from "../input/Input";

type MainPropsType = {
    rates: any
}

export const Main = ({rates}: MainPropsType) => {

    const [amount1, setAmount1] = useState<any>(1);
    const [amount2, setAmount2] = useState<any>(1);
    const [currency1, setCurrency1] = useState<any>("USD");
    const [currency2, setCurrency2] = useState<any>("UAN");

    useEffect(() => {
        if (!!rates) {
            handleAmount1Change(1);
        }
    }, [rates])

    const handleAmount1Change = (amount1: any) => {
        const value1 = (rates.filter((item: any) => item.cc === currency2))
        const value2 = (rates.filter((item: any) => item.cc === currency1))
        setAmount2(amount1 * value2[0]?.rate / value1[0]?.rate)
        setAmount1(amount1)
    }

    const handleCurrency1Change = (currency1: any) => {
        const value1 = (rates.filter((item: any) => item.cc === currency2))
        const value2 = (rates.filter((item: any) => item.cc === currency1))
        setAmount2(amount1 * value2[0]?.rate / value1[0]?.rate)
        setCurrency1(currency1)
    }

    const handleAmount2Change = (amount2: any) => {
        const value1 = (rates.filter((item: any) => item.cc === currency2))
        const value2 = (rates.filter((item: any) => item.cc === currency1))
        setAmount1((amount2 * value1[0]?.rate / value2[0]?.rate).toFixed(4))
        setAmount2(amount2)
    }

    const handleCurrency2Change = (currency2: any) => {
        const value1 = (rates.filter((item: any) => item.cc === currency2))
        const value2 = (rates.filter((item: any) => item.cc === currency1))
        setAmount1((amount2 * value1[0]?.rate / value2[0]?.rate).toFixed(4))
        setCurrency2(currency2)
    }


    return (
        <main>
            <Input
                amount={amount1}
                carrencies={rates.map((item: any) => item.cc)}
                currency={currency1}
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change} />
            <Input
                amount={amount2}
                carrencies={rates.map((item: any) => item.cc)}
                currency={currency2}
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change} />
        </main>
    );
};
