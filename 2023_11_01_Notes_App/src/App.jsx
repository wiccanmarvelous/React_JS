import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './componenets/Header/Header';
import MainBox from './componenets/MainBox/MainBox';
import AddItem from './componenets/AddItem/AddItem';

const App = () => {
    const NotesList = [
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, debitis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, corporis.",
            backgroundColor: ''
        },
        {
            id: Math.random(),
            title: "Notes in Hurry",
            note: "",
            backgroundColor: ''
        }
    ]
    const [menuOpen, setMenuOpen] = useState(false);
    const [notesList, setNotesList] = useState(NotesList);
    const addNotes = (item) => {
        setNotesList(oldList => [item, ...oldList])
    }
    
    return (
        <>
            <Header setMenuOpen={setMenuOpen} />
            <MainBox NotesList={notesList} menuOpen={menuOpen} />
            <AddItem addNotes={addNotes} />
        </>
    );
};

export default App;