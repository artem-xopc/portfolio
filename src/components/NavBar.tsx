import React, { Fragment } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import logo from '../assets/logo.png'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import AppRouter from '../routes/AppRouter';
import menu from '../assets/icons/menu.png';
import main from '../assets/icons/main_color.png'
import about from '../assets/icons/about_color.png'
import skills from '../assets/icons/skills.png'
import portfolio from '../assets/icons/portfolio.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

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
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.box_navbar_items}>
                    <Link to={'/'}><img src={logo} style={{ width: '200px' }} /></Link>
                    {windowSize.width < 768 ? (
                        <div className={styles.dropdown}>
                            <button><img src={menu} style={{ width: '20px' }} /></button>
                            <div className={styles.dropdown_content}>
                                <div className={styles.dropdown_links}>
                                    <Link to={'/'} className={styles.droplinks_item}>
                                        <img src={main} style={{ width: '20px', height: '20px' }} />
                                        <p>Главная</p>
                                    </Link>
                                    <Link to={'/about'} className={styles.droplinks_item}>
                                        <img src={about} style={{ width: '25px', height: '25px' }} />
                                        <p>Обо мне</p>
                                    </Link>
                                    <Link to={'/portfolio'} className={styles.droplinks_item}>
                                        <img src={portfolio} style={{ width: '25px', height: '25px' }} />
                                        <p>Портфолио</p>
                                    </Link>
                                    <Link to={'/skills'} className={styles.droplinks_item}>
                                        <img src={skills} style={{ width: '25px', height: '25px' }} />
                                        <p>Навыки</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.links_wrapper}>
                            <Link to={'/'} className={styles.links_item}>Главная</Link>
                            <Link to={'/about'} className={styles.links_item}>Обо мне</Link>
                            <Link to={'/portfolio'} className={styles.links_item}>Портфолио</Link>
                            <Link to={'/skills'} className={styles.links_item}>Навыки</Link>
                        </div>
                    )}
                </div>
                <div>
                    <div className={styles.log_button}>
                        <Link to={'/login'} className={styles.log_but}>LogIn</Link>
                        <Link to={'/signup'} className={styles.log_but}>SignUp</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;