import React from 'react'
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <>
      <div className={classes.card}>
        <h3>{props.title}</h3>
        <p>{props.note.length > 115 ? props.note.slice(0, 115) + '...' : props.note}</p>
      </div>
    </>
  )
}

export default Card