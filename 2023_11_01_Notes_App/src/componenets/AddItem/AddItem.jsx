import React, { useState } from 'react';
import classes from './AddItem.module.css';
import NewNote from '../Notes/NewNote/NewNote';
import AddIcon from '@mui/icons-material/Add';

const AddItem = (props) => {

    const [addNote, setAddNote] = useState(false);

    return (
        <>
            <div className={classes.addItem}>
                <button onClick={() => setAddNote(true)} className={classes.addItemBtn}>
                    <AddIcon sx={{color: 'black'}} />
                </button>
                {addNote && <NewNote />}
            </div>
        </>
    )
}

export default AddItem
