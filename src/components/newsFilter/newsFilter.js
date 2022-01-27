import './newsFilter.scss';

function NewsFilter() {
    return (
        <div className="filter">
            <div className="container">
                <label for="site-search">Search the site:</label>
                <input type="search" 
                        id="site-search" 
                        name="q" 
                        aria-label="Search through site content"/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default NewsFilter;