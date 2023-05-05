import React, {useEffect, useState} from 'react';
import styles from './Card.module.scss'
import Input from "../UI/Input/Input.jsx";
import ShoesRender from "../ShoesRender/ShoesRender.jsx";
import getData from "../../api/getData.js";

const Card = () => {
    const [shoes, setShoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        getData().then(shoesData => setShoes(shoesData))
    }, []);

    return (
        <section className={styles.sectionCard}>
            <Input value={searchTerm} shoes={shoes}
                   setSearchTerm={setSearchTerm}/>
            <ShoesRender value={searchTerm} shoes={shoes}/>
        </section>
    );
};

export default Card;