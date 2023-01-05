import React from 'react';
import styles from './Header.module.css'

type HeaderPropsType = {
    rates: any
}

export const Header = ({rates}: HeaderPropsType) => {

    const result = rates.slice(0, 2);

    return (
        <header>
            <div className={styles.logo__wrapper}>
                <a href='/'>
                    <svg className={styles.log__icon}>
                        <use href={'sprite' + "#icon-piggy-bank-svgrepo-com"}/>
                    </svg>
                </a>
                <p className={styles.logo__description}>Currency Exchange</p>
            </div>
            <ul className={styles.rates__list}>
                {result.map(({txt, rate, cc}: any) => <li className={styles.rates__item} key={txt}>
                    <div className={styles.wrapper}>
                        <p><b>{txt}</b></p>
                        <p>1 UAN = {rate} {cc}</p>
                    </div>
                    {cc === "USD" ? <svg className={styles.icon}>
                        <use href={'sprite' + "#icon-united-states-flag-icon"}/>
                    </svg> : <svg className={styles.icon}>
                        <use href={'sprite' + "#icon-europe-flag-icon"}/>
                    </svg>}
                </li>)}
            </ul>
        </header>
    );
};

