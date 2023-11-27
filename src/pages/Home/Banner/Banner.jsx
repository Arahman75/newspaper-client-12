import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/2ghznsS/benner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Our Best NewsPaper Website</h1>
                    <p className="mb-5">holidays on private islands. Yet, beneath this veil of material wealth lies a more enigmatic layer, particularly concerning the lives of the heirs and heiresses destined to inherit these colossal fortunes. Born into a life of privilege that far exceeds the norm, they inhabit a reality that is almost</p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;