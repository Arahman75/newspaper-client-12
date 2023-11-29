import React from 'react';
import contact from '../../assets/img/contact.jpg'

const ContactUs = () => {
    return (
        <div>
            <div className='text-center my-4'>
                <h3 className='text-red-500 font-bold text-3xl'>Contact Us</h3>
                <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam repellat debitis eos exercitationem !</p>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
                    <img src={contact} className="w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">This ia a best Newspaper Website</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;