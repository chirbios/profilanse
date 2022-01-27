import './newsItem.scss';

function NewsItem() {
    return(
        <div className="container">
            <div className="news-item__wrapper">
                <div className="news-item__title">Название</div>
                <div className="news-item__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui voluptas velit libero fuga dolorum at eligendi aperiam eos odio? Sapiente nam numquam quas ab sed, temporibus magnam amet nisi.</div>
                <div className="news-item__date">20.20.2020</div>
            </div>
        </div>
    )
}

export default NewsItem;