import React, { useState } from 'react'
import classes from './AllNotes.module.css';
import Card from '../../UI/Card/Card';
import EmptyPageImmg from '../../../assets/empty.jpg';

const AllNotes = (props) => {
    const notesCount = props.NotesList.length;

    return (
        <>
            <div className={classes["all-notes"]}>
                {notesCount !== 0 &&
                    <div>
                        {props.NotesList.map(item => (
                            <Card key={Math.random()} title={item.title} note={item.note} bgColor={item.bgColor} />
                        ))}
                    </div>
                }
                {notesCount === 0 &&
                    <div className={classes.emptyPage}>
                        <img src={EmptyPageImmg} />
                        <p>Add Notes...</p>
                    </div>
                }
            </div>
        </>
    )
}

export default AllNotes
