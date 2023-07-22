const Banner = () => {
    return (
        <div>
            <section className="username-info" style={{ padding: '260px 0 100px 0' }}>
                <h4 className="username">Романов Артём</h4>
                <p>Основная информация:</p>
                <p>JavaScript программист</p>
                <p>Возраст: 22 года</p>
                <p>Пол: мужской</p>
                <p>Страна проживания: Россия</p>
                <p>Интересуемая занятость: полная</p>
                <p style={{ marginTop: "5px" }}>Контактная информация:</p>
                <p>
                    <a href="https://vk.com/artem_xopc" target="_blank">Вконтакте</a> |
                    <a href="https://t.me/artem_xopc" target="_blank">Telegram</a>
                </p>
            </section>
        </div>
    )
}

export default Banner;