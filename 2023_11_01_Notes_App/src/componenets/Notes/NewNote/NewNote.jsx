import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import classes from './NewNote.module.css';

const NewNote = () => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

  return ReactDOM.createPortal(
    <>
        <div className={classes.wrapper}></div>
        <div className={classes["new-note"]}>
            <input className={classes.title} type="text" placeholder='Title' />
            <textarea cols="30" rows="10" placeholder='Take a note...'></textarea>
            <div className={classes.tools}>
                
            </div>
        </div>
    </>,
    document.getElementById('createNote')
  )
}

export default NewNote
