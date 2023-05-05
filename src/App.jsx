import React from 'react';
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Card from "./components/Card/Card.jsx";

const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
            <Card/>
        </div>
    );
};

export default App;