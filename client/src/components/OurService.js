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
        <img src={image3} alt="Logo" />;
        <h3>Make up</h3>
        <p>Make up is a relatively new semi-permanent manual method of eye-brow enhancement. It produces realistic looking hair strokes giving the effect of 3D hair.
        </p>
        <button>Read more</button>
      </div>
      <div className={styles.card}>
        <img src={image4} alt="Logo" />;
        <h3>Hairstyle</h3>
        <p>Hairstyle is a relatively new semi-permanent manual method of eye-brow enhancement. It produces realistic looking hair strokes giving the effect of 3D hair.
        </p>
        <button>Read more</button>
      </div>
      <div className={styles.card}>
        <img src={image5} alt="Logo" />;
        <h3>Microblading</h3>
        <p>Microblading for eyebrow embroidery is a relatively new semi-permanent manual method of eye-brow enhancement. It produces realistic looking hair strokes giving the effect of 3D hair.
        </p>
        <button>Read more</button>
      </div>

    </div>
    </div>
  )
}

export default OurService