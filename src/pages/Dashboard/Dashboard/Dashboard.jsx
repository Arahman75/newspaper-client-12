import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../../shared/Navbar/Navbar';
import Footer from '../../../shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex'>
                <div className='w-64 min-h-screen bg-orange-400 rounded-md p-8'>
                    <ul className='menu'>
                        <li><NavLink className='bg-teal-200 text-xl font-semibold mb-4' to='/dashboard/allUser'>All User</NavLink></li>
                        <li><NavLink className='bg-teal-200 text-xl font-semibold mb-4' to='/allArticles'>All Articles</NavLink></li>
                        <li><NavLink className='bg-teal-200 text-xl font-semibold mb-4' to='/dashboard/addPublisher'>Add Publisher</NavLink></li>

                    </ul>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;