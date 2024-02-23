import React from 'react'
import styles from "./AboutUS.module.scss";
import image2 from '../images/2.jpg';

const AboutUS = () => {
    return (
        <div className={styles.about_us}>
            <div className={styles.about_left}>
                <img src={image2} alt="Logo" />;

            </div>
            <div className={styles.about_right}>
                <h1>About Us</h1>
                <p>Navi likes to keep up-to-date with all of the latest beauty trends and technologies and is always introducing new and innovative treatments to stay at the forefront of the constantly evolving beauty world. Most importantly though we always try to keep our customers looking and feeling superb.
                    Now Navis Beautique will be renamed as Navis Beautique and Training Academy as Navi has reached another milestone and will be now providing Training in all Beauty Treatments, while still providing for all the beauty needs for her customers as normal.
                </p>
                <button>See prices</button>
            </div>

        </div>
    )
}

export default AboutUS