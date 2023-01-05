import React from 'react';
import styles from './Input.module.css'

type InputTypes = {
    amount: any,
    currency: any,
    carrencies: any,
    onAmountChange: (amount1: any) => void
    onCurrencyChange: (amount1: any) => void
}

export const Input = (props: InputTypes) => {


    return (
        <div className={styles.group}>
            {props.currency === "EUR" && <svg className={styles.icon}>
                <use href={'sprite' + "#icon-europe-flag-icon"}/>
            </svg>}
            {props.currency === "UAN" && <svg className={styles.icon}>
                <use href={'sprite' + "#icon-ukraine-flag-icon"}/>
            </svg>}
            {props.currency === "USD" && <svg className={styles.icon}>
                <use href={'sprite' + "#icon-united-states-flag-icon"}/>
            </svg>}
            <input
                maxLength={5}
                type="text"
                value={props.amount.toString()}
                onChange={e => props.onAmountChange(e.target.value)}/>
            <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
                {props.carrencies.map((currency: any) => <option
                    value={currency.toString()} key={currency}>
                    {currency}
                </option>)}
            </select>
        </div>
    );
};

