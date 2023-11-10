import React from 'react'
import classes from './AllNotes.module.css';
import Card from '../../UI/Card/Card';

const AllNotes = (props) => {
   
    return (
        <>
            <div className={classes["all-notes"]}>
                {props.NotesList.map(item => (
                    <Card key={item.id} title={item.title} note={item.note} />
                ))}
            </div>
        </>
    )
}

export default AllNotes
