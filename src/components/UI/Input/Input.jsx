import React from 'react';
import styles from "../../Card/Card.module.scss";

const Input = ({value, setSearchTerm}) => {
    return (
        <div className={styles.wrapper}>
            <h1>Все кроссовки</h1>
            <input value={value} className={styles.input} type="text" placeholder='Поиск...'
                   onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
    );
};

export default Input;