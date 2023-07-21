import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h3>Страница не обнаружена</h3>
            <button>
                <Link to={'/'}>Вернуться на главную</Link>
            </button>
        </div>
    )
}

export default NotFoundPage;