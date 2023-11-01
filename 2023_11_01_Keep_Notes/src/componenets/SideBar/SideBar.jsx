import React from 'react'
import classes from './SideBar.module.css';
import NotesLight from '../../assets/notes-light.png';
import NotesDark from '../../assets/notes-dark.png';
import ReminderLight from '../../assets/reminder-light.png';
import ReminderDark from '../../assets/reminder-dark.png';
import EditLabelLight from '../../assets/edit-label-light.png';
import EditLabelDark from '../../assets/edit-label-dark.png';
import ArchiveLight from '../../assets/archive-light.png';
import ArchiveDark from '../../assets/archive-dark.png';
import TrashLight from '../../assets/trash-light.png';
import TrashDark from '../../assets/trash-dark.png';

const Menu = () => {
  return (
    <>
      <div className={classes['side-bar']}>
        <div className={`${classes.notes} ${classes['side-bar-icons']}`}>
          <img src={NotesLight} alt="" />
          <p>Notes</p>
        </div>
        <div className={`${classes.reminder} ${classes['side-bar-icons']}`}>
          <img src={ReminderLight} alt="" />
          <p>Reminders</p>
        </div>
        <div className={`${classes['edit-label']} ${classes['side-bar-icons']}`}>
          <img src={EditLabelLight} alt="" />
          <p>Edit Labels</p>
        </div>
        <div className={`${classes.archive} ${classes['side-bar-icons']}`}>
          <img src={ArchiveLight} alt="" />
          <p>Archive</p>
        </div>
        <div className={`${classes.trash} ${classes['side-bar-icons']}`}>
          <img src={TrashLight} alt="" />
          <p>Trash</p>
        </div>
      </div>
    </>
  )
}

export default Menu
