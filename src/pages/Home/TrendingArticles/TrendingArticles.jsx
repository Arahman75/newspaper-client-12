import React, { useEffect, useState } from 'react';
import TrendingCart from '../TrendignCart/TrendignCart';


const TrendingArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setArticles(data)
            )
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                articles.map(article => <TrendingCart key={article.id} article={article}></TrendingCart>)
            }
        </div>
    );
};

export default TrendingArticles;