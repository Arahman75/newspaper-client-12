import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllArticleCart from '../../components/AllArticleCart/AllArticleCart';

const AllArticles = () => {
    const articles = useLoaderData();
    console.log(articles);
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-12'>
                {
                    articles.map(article => <AllArticleCart key={article.id} article={article}></AllArticleCart>)
                }
            </div>

        </div>
    );
};

export default AllArticles;