import React from 'react';
import TrendingArticles from '../TrendingArticles/TrendingArticles';
import OurFeature from '../../../components/OurFeature/OurFeature';
import ContactUs from '../../../components/ContactUs/ContactUs';
const Home = () => {
    return (
        <div>
            <TrendingArticles></TrendingArticles>
            <ContactUs></ContactUs>
            <OurFeature></OurFeature>
        </div>
    );
};

export default Home;