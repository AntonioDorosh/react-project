import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Navigation from "../Navigation/Navigation.jsx";
import SideBar from "../UI/Modal/SideBar.jsx";
import {handleClose, handleShow} from "../../utils/modalAppear.js";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <header>
            <Container>
                <Navigation handleShow={() => handleShow(setShow)}/>
                <SideBar show={show} handleClose={() => handleClose(setShow)} handleShow={() => handleShow(setShow)}/>
            </Container>
        </header>
    );
};

export default Header;