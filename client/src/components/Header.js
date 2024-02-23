import React ,{useState} from 'react'
import styles from "./Header.module.scss";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineCloseSquare} from "react-icons/ai";
import logo from '../images/logo-transparent-png.png'
const Header = () => {

    const[menuOpen,setMenuOpen]=useState(false);
    const menuToggler=()=>setMenuOpen(p=>!p);

  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
            <div>
               
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
            <div>
                <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`]:{}}`}>
                    <a className={styles.nav_item} href={"/"}>Acasa</a>
                    <a className={styles.nav_item} href={"/"}>Despre</a>
                    <a className={styles.nav_item} href={"/"}>Servicii</a>
                    <a className={styles.nav_item} href={"/"}>Portofoliu</a>
                    <a className={styles.nav_item} href={"/"}>Blog</a>
            
                    <div className={styles.nav_button_container}>
                        <Button/>
                    </div>
                </nav>
            </div>
            <div>
                <div className={styles.header_button_container}>
                <Button/>

                </div>
                <div className={styles.header_toggler} onClick = {menuToggler}>
                    {!menuOpen ? <BiMenuAltRight/> : <AiOutlineCloseSquare/>}
                </div>
            </div>
        </div>
    </div>
  )
};


const Button=()=>{
    return <button className={styles.button}>Contact</button>;
}

export default Header