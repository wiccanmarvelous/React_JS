import React, { useState } from 'react';
import classes from './App.css';
import Header from './componenets/Header/Header';
import SideBar from './componenets/SideBar/SideBar';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <Header setMenuOpen={setMenuOpen} />
            <main className={classes['main-content']}>
                <SideBar menuOpen={menuOpen} />
            </main>
        </>
    );
};

export default App;