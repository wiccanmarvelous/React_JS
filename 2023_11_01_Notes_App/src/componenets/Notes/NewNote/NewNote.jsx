import React, { useEffect, useReducer, useState } from 'react'
import ReactDOM from 'react-dom';
import classes from './NewNote.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const colorSet = ['#FAAFA8', '#F39F76', '#FFF8B8', '#E2F6D3', '#B4DDD3', '#D4E4ED', '#AECCDC', '#D3BFDB', '#F6E2DD', '#E9E3D4', '#EFEFF1']

const NewNote = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputTextarea, setInputTextarea] = useState('');
    const [useColor, setUseColor] = useState(false);
    const [color, setColor] = useState('white');

    const boxColorChange = (passedColor) => {
        const parent = document.getElementById('newNote');
        parent.style.backgroundColor = `${passedColor}`;
        const childElements = parent.getElementsByTagName('*');
        Array.from(childElements).forEach(ele => ele.style.backgroundColor = `${passedColor}`);
    };

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    useEffect(() => {
        boxColorChange(color);
    }, [color]);

    const titleChangeHandler = value => setInputTitle(value);

    const textareaChangeHandler = value => setInputTextarea(value);

    const submitHandler = () => {
        props.addNotes({
            title: inputTitle,
            note: inputTextarea,
            bgColor: color
        })
        props.setAddNote(false);
    }

    const emptyHandler = () => {
        props.setAddNote(false);
    }


    return ReactDOM.createPortal(
        <>
            <div className={classes.wrapper}></div>
            <div>
                <div className={classes["new-note"]} id='newNote'>
                    <input
                        onClick={() => setUseColor(false)}
                        onChange={(event) => titleChangeHandler(event.target.value)}
                        className={classes.title}
                        type="text"
                        placeholder='Title'
                    />
                    <textarea
                        onClick={() => setUseColor(false)}
                        onChange={(event) => textareaChangeHandler(event.target.value)}
                        cols="30"
                        rows="10"
                        placeholder='Take a note...'
                    />
                    <div

                        className={classes.tools}
                    >
                        <button onClick={() => useColor ? setUseColor(false) : setUseColor(true)}><PaletteOutlinedIcon /></button>
                        <button
                            onClick={emptyHandler}
                        >
                            <CloseOutlinedIcon style={{color:'red'}} />
                        </button>
                        <button
                            className={classes.submit}
                            onClick={submitHandler}
                        >
                            <CheckCircleIcon style={{ color: 'green' }} />
                        </button>
                    </div>
                </div>
            </div>
            {useColor &&
                <div className={classes['color-pannel']}>
                    {colorSet.map((col) => (
                        <button
                            key={col}
                            style={{ backgroundColor: `${col}` }}
                            onClick={() => { setColor(col); setUseColor(false); }}
                            onMouseOver={() => boxColorChange(col)}
                            onMouseOut={() => boxColorChange(color)}
                        ></button>
                    ))}
                </div>
            }
        </>,
        document.getElementById('createNote')
    )
}

export default NewNote
