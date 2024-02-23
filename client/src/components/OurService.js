import React from 'react'
import styles from "./OurService.module.scss";
import image3 from '../images/23.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.png';

const OurService = () => {
  return (
    <div className={styles.service}>
      <h1>Our Services</h1>
      <div className={styles.service_card}>
      <div className={styles.card}>
        <img src={image3} alt="Logo" />
        <h3>Website de prezentare</h3>
        <p>Dezvolta afacerea si in mediul online: website uri pentru firme din diverse domenii.
        </p>
        <button>Read more</button>
      </div>
      <div className={styles.card}>
        <img src={image4} alt="Logo" />
        <h3>Landing pages</h3>
        <p>In marketingul digital, o pagina de destinatie (landing page) este o pagina web independenta, creata special pentru o campanie de marketing.
          
        </p>
        <button>Read more</button>
      </div>
      <div className={styles.card}>
        <img src={image5} alt="Logo" />
        <h3>Blog website</h3>
        <p>Blog-urile sunt un tip de site web. Singura diferenta reala dintre un blog si 
          restul tipurilor de site-uri web este ca blog-urile sunt periodic actualizate cu continut
           nou care este asezat in ordine invers cronologica.
        </p>
        <button>Read more</button>
      </div>

    </div>
    </div>
  )
}

export default OurService