import React from "react";
import styles from "./Contact.module.css";
import keepInTouch from "../assets/images/coder.png";

const Contact = () => {
  const [buttonText, setButtonText] = React.useState("B Telegram!");

  return (
    <section className={styles.contact}>
      <div>
        <span>
          <img src={keepInTouch} />
        </span>
      </div>
      <div>
        <span>
          <h2>Останемся на связи</h2>
          <a href="https://t.me/artem_xopc" target="_blank" rel="noreferrer">
            <button>
              <span>{buttonText}</span>
            </button>
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
