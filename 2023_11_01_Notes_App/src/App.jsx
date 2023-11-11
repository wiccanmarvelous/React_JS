import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './componenets/Header/Header';
import MainBox from './componenets/MainBox/MainBox';
import AddItem from './componenets/AddItem/AddItem';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [notesList, setNotesList] = useState([]);
    const addNotes = (item) => {
        setNotesList(oldList => [item, ...oldList])
    }

    return (
        <>
            <div className={classes.app}>
                <Header setMenuOpen={setMenuOpen} />
                <MainBox NotesList={notesList} menuOpen={menuOpen} />
                <AddItem addNotes={addNotes} />
            </div>
        </>
    );
};

export default App;