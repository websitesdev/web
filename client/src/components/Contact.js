import React from 'react'
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Telephone:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact