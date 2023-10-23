import { useEffect } from 'react';
import ReactDom from 'react-dom';
import './ShowModals.css'
const ShowModals = (props) => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    const clickHandler = () => {
        props.onHideModal()
    };

    return ReactDom.createPortal(
        <>
            <div className="wrapper"></div>
            <div className='box'>
                <h1>STAY TUNED</h1>
                <p>{`Accept this  or regret ;)`}</p>
                <button className='button-accept' onClick={clickHandler}>I Accept</button>
            </div>
        </>,
        document.getElementById('modal')
    )
}

export default ShowModals
