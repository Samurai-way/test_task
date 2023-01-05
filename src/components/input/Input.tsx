import React from 'react';
import PropTypes from "prop-types";
import styles from './Input.module.css'

type InputTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    carrencies: PropTypes.array,
    onAmountChange: () => void
    onCurrencyChange: () => void
}

export const Input = (props: InputTypes) => {
    return (
        <div className={styles.group}>
            {currency === "EUR" && <svg className={styles.icon}>
                <use href={sprite + "#icon-europe-flag-icon"} />
            </svg>}
            {currency === "UAN" && <svg className={styles.icon}>
                <use href={sprite + "#icon-ukraine-flag-icon"} />
            </svg>}
            {currency === "USD" && <svg className={styles.icon}>
                <use href={sprite + "#icon-united-states-flag-icon"} />
            </svg>}
            <input maxLength='5' type="text" value={amount.toString()} onChange={e => onAmountChange(e.target.value)} />
            <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
                {carrencies.map((currency) => <option
                    value={currency.toString()} key={currency}>
                    {currency}
                </option>)}
            </select>
        </div>
    );
};

