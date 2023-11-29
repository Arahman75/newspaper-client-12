import React, { useContext } from 'react';
import { AuthContext } from '../../provide/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='w-[300px] mx-auto text-center'>
            <img className='w-full' src={user?.photoURL} alt="user photo" />
            <h2 className='text-2xl font-bold py-4'>{user?.displayName}</h2>
            <h3 className='text-xl font-semibold'>{user?.email}</h3>
        </div>
    );
};

export default MyProfile;