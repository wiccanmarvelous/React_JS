import React from 'react';
import classes from './MainBox.module.css';
import SideBar from '../SideBar/SideBar';
import AllNotes from '../Notes/AllNotes/AllNotes';

const MainBox = (props) => {

    return (
        <>
            <div className={classes['main-box']}>
                <SideBar menuOpen={props.menuOpen} />
                <AllNotes NotesList={props.NotesList} />
            </div>
        </>
    )
}

export default MainBox
