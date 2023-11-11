import React, { useState } from 'react';
import classes from './AddItem.module.css';
import NewNote from '../Notes/NewNote/NewNote';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

const AddItem = (props) => {

    const [addNote, setAddNote] = useState(false);

    return (
        <>
            <div className={classes.addItem}>
                <button onClick={() => setAddNote(true)} className={classes.addItemBtn}>
                    <NoteAddOutlinedIcon />
                </button>
                {addNote && <NewNote addNotes={props.addNotes} setAddNote={setAddNote} />}
            </div>
        </>
    )
}

export default AddItem
