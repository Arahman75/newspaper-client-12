import React from 'react';
import TrendingArticles from '../TrendingArticles/TrendingArticles';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingArticles></TrendingArticles>
        </div>
    );
};

export default Home;