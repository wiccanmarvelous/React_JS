import React from 'react'
import Button from './Button'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.remove} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.remove} data={'Okay'} />
        </footer>
      </div>
    </>
  )
}

export default ErrorModal
