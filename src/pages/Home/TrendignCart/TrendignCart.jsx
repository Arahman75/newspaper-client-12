import React from 'react';
import banner from '../../../assets/img/benner.jpeg'


const TrendingCart = ({ article }) => {
    const { view, date, publisher_name, publisher_img, img, description, title } = article;

    return (
        <div className="card bg-base-100 shadow-xl p-0">
            <figure><img src={img} className='w-full h-56' alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <img src={publisher_img} className='w-12 h-12 rounded-full mr-2' alt="" />
                        <h2 className='text-xl font-semibold'>{publisher_name}</h2>
                    </div>
                    <p>{date}</p>
                    <p>{view}</p>
                </div>
                <p className='text-justify'>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCart;