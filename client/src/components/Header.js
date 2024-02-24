import React, { useState } from "react";
import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import logo from "../images/logo-transparent-png.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <Link to="/" className={styles.nav_item}>
              Acasa
            </Link>
            <Link to="/aboutus" className={styles.nav_item}>
              Despre
            </Link>
            <Link to="/ourservice" className={styles.nav_item}>
              Servicii
            </Link>
            <Link to="/portfolio" className={styles.nav_item}>
              Portofoliu
            </Link>
            <Link to="/" className={styles.nav_item}>
              +40729436992
            </Link>
          
            <div className={styles.nav_button_container}>
              <Button />
        
            </div>

         
          </nav>
        </div>
        <div>
          <div className={styles.header_button_container}>
            <Button />
          </div>
          <div className={styles.header_toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={styles.button}>Contact</button>;
};

export default Header;
