import styles from './Footer.module.css';
import stylesNav from './NavBar.module.css';
import logo from '../assets/logo.png';
import vk from '../assets/icons/vk.png';
import telegram from '../assets/icons/telegram.png';
import inst from '../assets/icons/instagram.png';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <Nav.Link href={'#home'}>
          <img src={logo} alt="logo" style={{ width: '200px' }} />
        </Nav.Link>
        <div className={styles.social_wrapper}>
          <div className={stylesNav.social_icon}>
            <a href="#">
              <img src={vk} alt="ВКонтакте" />
            </a>
            <a href="https://t.me/artem_xopc">
              <img src={telegram} alt="Телеграм" />
            </a>
            <a href="#">
              <img src={inst} alt="Инстраграм" />
            </a>
          </div>
          <p>Copyright 2023. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
