import React from 'react';
import classes from './App.css';
import Header from './componenets/Header/Header';
import SideBar from './componenets/SideBar/SideBar';

const App = () => {
    return (
        <>
            <Header />
            <main className={classes['main-content']}>
                <SideBar />

            </main>
        </>
    );
};

export default App;