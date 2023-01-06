import React from 'react';
import styles from './Header.module.css'

interface Currency {
    dollar: number;
    euro: number;
};

export const Header = ({dollar, euro}: Currency) => {


    return <div className={styles.container}>
        <div className={styles.currency_holder}>
            <div className={styles.ua}>
                1 (USD) = {dollar} (UAH)
            </div>
            <div className={styles.ua}>
                1 (EUR) = {euro} (UAH)
            </div>
        </div>
    </div>
};

