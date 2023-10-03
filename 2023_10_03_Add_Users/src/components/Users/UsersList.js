import React from 'react';
import classes from './UsersList.module.css';

const UsersList = (props) => {

    return (
        <>
            {props.usersList.length !== 0 && <div className={classes['user-list']}>
                <ul>
                    {props.usersList.map((user) => (
                        <li key={Math.random().toString()}>
                            {user.name}({user.age} years old)
                        </li>
                    ))}
                </ul>
            </div>}
        </>
    )
}

export default UsersList;