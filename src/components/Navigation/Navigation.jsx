import React from 'react';
import styles from "../Header/Header.module.scss";
import {Nav} from "react-bootstrap";

const Navigation = ({handleShow}) => {
    return (
        <Nav className={styles.nav}>
            <figure>
                <img src="/logo.png" alt="logo"/>
            </figure>
            <div className={styles.title}>
                <h2>REACT SHOP</h2>
                <p>Магазин кроссовок</p>
            </div>
            <ul className={styles.list}>
                <li>
                    <figure>
                        <img onClick={() => handleShow()} src="/cart.svg" alt="cart"/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/heart.svg" alt="heart"/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/profile.svg" alt="profile"/>
                    </figure>
                </li>
            </ul>
        </Nav>
    );
};

export default Navigation;