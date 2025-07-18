import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './NavBar.module.css';
import logo from '../assets/logo.png';
import menu from '../assets/icons/menu_white.png';
import main from '../assets/icons/main.png';
import skills from '../assets/icons/skills_color.png';
import SocialIcons from './UI/SocialIcons';
import portfolio from '../assets/icons/projects.png';

const NavBar = () => {
  const [activeLink, setActiveLink] = React.useState('/');
  const [scrolled, setScrolled] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Добавляем обработчик события при монтировании компоненты
    window.addEventListener('resize', handleResize);

    // Удаляем обработчик события при размонтировании компоненты
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={scrolled ? styles.scrolled : styles.wrapper}>
        <div className={styles.box_navbar_items}>
          {windowSize.width < 768 ? (
            <div className={styles.dropdown}>
              <button>
                <img src={menu} style={{ width: '20px' }} />
              </button>
              <div className={styles.dropdown_content}>
                <div className={styles.dropdown_links}>
                  <Nav.Link
                    href={'#home'}
                    className={styles.droplinks_item}
                    onClick={() => onUpdateActiveLink('home')}
                  >
                    <img src={main} style={{ width: '20px', height: '20px' }} />
                    <p>Главная</p>
                  </Nav.Link>
                  <Nav.Link
                    href={'#skills'}
                    className={styles.droplinks_item}
                    onClick={() => onUpdateActiveLink('skills')}
                  >
                    <img src={skills} style={{ width: '25px', height: '25px' }} />
                    <p>Навыки</p>
                  </Nav.Link>
                  <Nav.Link
                    href={'#portfolio'}
                    className={styles.droplinks_item}
                    onClick={() => onUpdateActiveLink('portfolio')}
                  >
                    <img src={portfolio} style={{ width: '25px', height: '25px' }} />
                    <p>Портфолио</p>
                  </Nav.Link>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.links_wrapper}>
              <Nav.Link href={'#home'}>
                 {/* <img src={logo} alt="logo" style={{ width: '200px', marginRight: '50px' }} /> */}
              </Nav.Link>

              <Nav.Link
                href={'#home'}
                className={styles.links_item}
                onClick={() => onUpdateActiveLink('home')}
              >
                Главная
              </Nav.Link>
              <Nav.Link
                href={'#skills'}
                className={styles.links_item}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Навыки
              </Nav.Link>
              <Nav.Link
                href={'#portfolio'}
                className={styles.links_item}
                onClick={() => onUpdateActiveLink('portfolio')}
              >
                Портфолио
              </Nav.Link>
            </div>
          )}
        </div>
        <div>
          <div className={styles.log_button}>
            <div className={styles.social_icon}>
              <SocialIcons />
            </div>
            <a href="https://t.me/artem_xopc" className={styles.log_but}>
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
