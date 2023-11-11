import React, { useState } from 'react';
import classes from './Header.module.css';
import MenuLineLight from '../../assets/menu-line-light.png';
import MenuLineDark from '../../assets/menu-line-dark.png';
import Logo from '../../assets/logo.png';
import SearchImg from '../../assets/search.png';
import RefreshLight from '../../assets/refresh-light.png';
import SettingsLight from '../../assets/settings-light.png';
import XLight from '../../assets/x-light.png';

const Header = (props) => {
    const [searchBarActive, setSearchBarActive] = useState(false);

    const searchBarClickHandler = (event) => {
        event.preventDefault();
        setSearchBarActive(true);
    }

    const menuButtonClickHandler = (event) => {
        event.preventDefault();
        props.setMenuOpen((oldState) => oldState ? false : true);
    }

    return (
        <>
            <header className={classes.header}>
                <div className={classes["menu-logo"]}>
                    <button onClick={(event) => menuButtonClickHandler(event)}><img className={classes['menu-img']} src={MenuLineLight} alt="menu line" /></button>
                    {/* <button><img className={classes.logo} src={Logo} alt="logo" /></button>
                    <p className={classes['logo-text']}>Keep</p> */}
                </div>
                <div onClick={(event) => searchBarClickHandler(event)} className={
                    `${classes["search-bar"]} ${searchBarActive ? classes["search-bar-active"] : ''}`
                }>
                    <img className={classes['search-icon']} src={SearchImg} alt="search icon" />
                    <input className={classes.search} type="text" name="" id="" placeholder='Search' />
                    <img src={XLight} alt="" />
                </div>
                <div className={classes["modification"]}>
                    <img className={classes.refresh} src={RefreshLight} alt="refresh" />
                    <img className={classes.settings} src={SettingsLight} alt="" />
                    <img className={classes.profile} src="" alt="" />
                </div>
            </header>
        </>
    );
};

export default Header;