import NewsFilter from '../newsFilter/newsFilter';
import NewsItem from '../newsItem/newsItem';
import './newsContainer.scss';

function NewsContainer() {
    return(
        <>
            <div className="container">
                <NewsFilter/>
                <div className="news-container__wrapper">
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>
        </>
    )
}

export default NewsContainer;