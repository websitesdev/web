import React from "react";
import styles from "./Footer.module.scss";
import logo from "../images/logo-transparent-png.png";
import {
  
   
    FaInstagram,
  
  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <p>
            Ne angajăm să creăm spații digitale captivante care rezonează cu
            publicul tău.
          </p>
        </div>
        <div className={styles.center}>
          <p>Link-uri</p>
          <nav className={styles.links}>
            <a className={styles.nav_item} href={"/"}>
              Acasa
            </a>
            <a className={styles.nav_item} href={"/"}>
              Blog
            </a>
            <a className={styles.nav_item} href={"/"}>
              Despre
            </a>
            <a className={styles.nav_item} href={"/"}>
              Servicii
            </a>
            <a className={styles.nav_item} href={"/"}>
              Portofoliu
            </a>
          </nav>
        </div>

        <div className={styles.right}>
        <p>Contact</p>
          <nav className={styles.links}>
           
            <a className={styles.nav_item} href={"/"}>
              +40729436991
            </a>
            <a className={styles.nav_item} href={"/"}>
              contact@websiteconcept.ro
            </a>
            <a className={styles.nav_item} href={"/"}>
            <FaInstagram className={styles.instagram}/>
            </a>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
