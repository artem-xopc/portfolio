import React from "react";
import vk from "../../assets/icons/vk.png";
import telegram from "../../assets/icons/telegram.png";
import github from "../../assets/icons/github.png";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.social_icon}>
      <a href="https://vk.com/romanov__artem" target="_blank" rel="noreferrer">
        <img src={vk} alt="ВКонтакте" />
      </a>
      <a href="https://t.me/RomanovArtem" target="_blank" rel="noreferrer">
        <img src={telegram} alt="Телеграм" />
      </a>
      <a href="https://github.com/artem-xopc" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialIcons;
