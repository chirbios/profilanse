import './popup.scss';

function PopUp() {
    return(
        <>
            <div className="container">
                <div className="popup">
                    <div className="popup__wrapper">
                        <input type="text" className="popup__login" placeholder='Введите логин'/>
                        <input type="password" className="popup__password" placeholder='Введите пароль' />
                        <button className="btn">Отправить</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUp;