import React, {useState} from 'react';
import styles from './Main.module.css'

interface Currency {
    dollar: number;
    euro: number;
};
export const Main = ({dollar, euro}: Currency) => {
    const [first, setFirst] = useState<number>()
    const [second, setSecond] = useState<number>()
    const [option1, setOption1] = useState<string>("USD")
    const [option2, setOption2] = useState<string>("UAH")
    const r: any = [
        {currency: "UAH", value: 1},
        {currency: "USD", value: (dollar)},
        {currency: "EUR", value: (euro)},
    ]

    const calculate1 = (event: any) => {
        if (option1 === option2) {
            setSecond(event.target.value)
            return
        }
        const koef1 = r.filter((el: any) => el.currency === option1)[0]
        const koef2 = r.filter((el: any) => el.currency === option2)[0]
        setSecond(event.target.value * koef1.value / koef2.value)
    }

    const calculate2 = (event: any) => {
        if (option1 === option2) {
            setFirst(event.target.value)
            return
        }
        const koef1 = r.filter((el: any) => el.currency === option1)[0]
        const koef2 = r.filter((el: any) => el.currency === option2)[0]
        setFirst(event.target.value * koef2.value / koef1.value)
    }

    const onChangeHandler = (e: any) => {
        setSecond(e.target.value)
        calculate2(e)
    }

    const onChangeInputHandler = (e: any) => {
        setFirst(e.target.value)
        calculate1(e)
    }

    return <div className={styles.container}>
        <div className={styles.selector_holder}>
            <input type="number"
                   name='first'
                   className={styles.input}
                   value={first}
                   placeholder="input currency"
                   defaultValue={first}
                   onChange={onChangeInputHandler}
            />
            <select onChange={(e) => {
                setOption1(e.target.value)
                setSecond(0)
                calculate1(e)
            }}>
                <option>UAH</option>
                <option selected>USD</option>
                <option>EUR</option>
            </select>
        </div>
        <div className={styles.selector_holder}>
            <input type="number"
                   name="second"
                   value={second}
                   defaultValue={second}
                   className={styles.input}
                   placeholder="input currency"
                   onChange={onChangeHandler}
            />
            <select onChange={(e) => {
                setOption2(e.target.value)
                setFirst(0)
                calculate2(e)
            }}>
                <option selected>UAH</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
        </div>
    </div>
};
