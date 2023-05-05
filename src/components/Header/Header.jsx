import React from 'react';
import {Container, Nav} from "react-bootstrap";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <Container>
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
                                <img src="/cart.svg" alt="cart"/>
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
            </Container>
        </header>
    );
};

export default Header;