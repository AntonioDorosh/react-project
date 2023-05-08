import React from 'react';
import styles from './Shoes.module.scss'
import {filteredShoesByTitle} from "../../utils/FilterShoes.js";
import {AiOutlinePlusCircle} from "react-icons/all.js";

const ShoesRender = ({shoes, value}) => {
    const filteredShoes = filteredShoesByTitle(shoes, value)

    return (
        <div className={styles.shoesList}>
            {filteredShoes.map(({imgSrc, title, price}) => (
                    <ul>
                        <li className={styles.shoesItems}>
                            <figure>
                                <img src={imgSrc} alt="shoes photo"
                                     width={133}/>
                            </figure>
                            <p>{title}</p>
                        </li>
                        <div className={styles.shoesBlock}>
                            <span>Цена: {price}$</span>
                            <AiOutlinePlusCircle className={styles.plus}/>
                        </div>
                    </ul>
                ))}
        </div>
    );
};

export default ShoesRender;