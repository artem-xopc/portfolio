import React, { Fragment } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import menu from '../../assets/icons/menu_white.png';
import main from '../../assets/icons/main_color.png'
import about from '../../assets/icons/about_color.png'
import skills from '../../assets/icons/skills.png'
import portfolio from '../../assets/icons/portfolio.png'
import vk from '../../assets/icons/vk.png'
import telegram from '../../assets/icons/telegram.png'
import inst from '../../assets/icons/instagram.png'

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
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

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
                            <button><img src={menu} style={{ width: '20px' }} /></button>
                            <div className={styles.dropdown_content}>
                                <div className={styles.dropdown_links}>
                                    <Link to={'#home'} className={styles.droplinks_item} onClick={() => onUpdateActiveLink('home')}>
                                        <img src={main} style={{ width: '20px', height: '20px' }} />
                                        <p>Главная</p>
                                    </Link>
                                    <Link to={'#about'} className={styles.droplinks_item} onClick={() => onUpdateActiveLink('about')}>
                                        <img src={about} style={{ width: '25px', height: '25px' }} />
                                        <p>Обо мне</p>
                                    </Link>
                                    <Link to={'#portfolio'} className={styles.droplinks_item} onClick={() => onUpdateActiveLink('portfolio')}>
                                        <img src={portfolio} style={{ width: '25px', height: '25px' }} />
                                        <p>Портфолио</p>
                                    </Link>
                                    <Link to={'#skills'} className={styles.droplinks_item} onClick={() => onUpdateActiveLink('skills')}>
                                        <img src={skills} style={{ width: '25px', height: '25px' }} />
                                        <p>Навыки</p>
                                    </Link>
                                </div>
                            </div>

                            {/* <Link to={'/'}><img src={logo} style={{ width: '200px', marginLeft: '50px' }} /></Link> */}
                        </div>
                    ) : (
                        <div className={styles.links_wrapper}>
                            <Link to={'/'}><img src={logo} alt='logo' style={{ width: '200px' }} /></Link>

                            <Link to={'#home'} className={styles.links_item} onClick={() => onUpdateActiveLink('home')}>Главная</Link>
                            <Link to={'#about'} className={styles.links_item} onClick={() => onUpdateActiveLink('about')}>Обо мне</Link>
                            <Link to={'#portfolio'} className={styles.links_item} onClick={() => onUpdateActiveLink('portfolio')}>Портфолио</Link>
                            <Link to={'#skills'} className={styles.links_item} onClick={() => onUpdateActiveLink('skills')}>Навыки</Link>
                        </div>
                    )}
                </div>
                <div>
                    <div className={styles.log_button}>
                        <div className={styles.social_icon}>
                            <a href="#"><img src={vk} alt="ВКонтакте" /></a>
                            <a href="#"><img src={telegram} alt="Телеграм" /></a>
                            <a href="#"><img src={inst} alt="Инстраграм" /></a>
                        </div>
                        <a href='https://t.me/artem_xopc' className={styles.log_but}>Let's Connect</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;