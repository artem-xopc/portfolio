import React, { HTMLAttributes } from 'react'
import styles from './Banner.module.css'
import ava from '../assets/images/avatars/1_1.jpg'

interface CustomSpanProps extends HTMLAttributes<HTMLSpanElement> {
    dataPeriod: string;
}

const Banner: React.FC<CustomSpanProps> = ({ dataPeriod, ...rest }) => {
    const [loopNum, setLoopNum] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [text, setText] = React.useState('');
    const [delta, setDelta] = React.useState(300 - Math.random() * 100);
    const [index, setIndex] = React.useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    React.useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <section className={styles.banner} id='home' style={{ padding: '260px 0 100px 0' }}>
            <div className={styles.box_banner}>
                <div>
                    <span className={styles.tagline}>Здравствуйте!</span>
                    <h1>{`Меня зовут Артём и я: `}
                        <span className={styles.txt_rotate} data-period='1000' data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                            <span className={styles.wrap}>{text}</span>
                        </span>
                    </h1>
                </div>
                <div>
                    <p>Основная информация:</p>
                    <p>JavaScript программист</p>
                    <p>Возраст: 22 года</p>
                    <p>Пол: мужской</p>
                    <p>Страна проживания: Россия</p>
                    <p>Интересуемая занятость: полная</p>
                </div>
            </div>
            <div className={styles.avatar}>
                <img src={ava} />
            </div>
        </section>
    )
}

export default Banner;