import React from 'react';
import styles from './Shoes.module.scss'
import {filteredShoesByTitle} from "../../utils/FilterShoes.js";

const ShoesRender = ({shoes, value}) => {
    const filteredShoes = filteredShoesByTitle(shoes, value)

    return (
        <div className={styles.shoesList}>
            {filteredShoes.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
                .map(({imgSrc, title, price}) => (
                    <ul>
                        <li>
                            <figure>
                                <img src={imgSrc} alt="shoes photo"
                                     width={133}/>
                            </figure>
                            <p style={{
                                maxWidth: '150px',
                                textAlign: 'center'
                            }}>{title}</p>
                            <span>Цена: {price}$</span>
                        </li>
                    </ul>
                ))}
        </div>
    );
};

export default ShoesRender;