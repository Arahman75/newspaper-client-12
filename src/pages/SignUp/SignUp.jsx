import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

    }


    return (
        // <div className="hero min-h-screen">
        //     <div className="hero-content flex-col">
        //         <div className="text-center lg:text-left">
        //             <h1 className="text-5xl font-bold">Please SignUp</h1>
        //         </div>
        //         <div className="card w-full max-w-lg shadow-2xl bg-gray-200">
        //             <form className="card-body">
        //                 <div className="form-control w-full">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="email" placeholder="email" className="input input-bordered w-full" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input type="password" placeholder="password" className="input input-bordered" required />
        //                     <label className="label">
        //                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                     </label>
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <button className="btn btn-active btn-accent">Login</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please SignUp</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-gray-200 ">
                    <form onSubmit={handleSignUp} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-success">SignUp</button>
                        </div>
                        {/* <div onClick={handleGoogleLogin} className='flex cursor-pointer'> */}
                        <div className='flex cursor-pointer'>
                            <button type='submit' className="btn btn-primary">
                                Login with google
                            </button>
                            {/* <img src={google} className='w-12 h-12' alt="" /> */}
                        </div>
                        <p className='text-center text-lg mt-4 font-bold'>Already have an account? Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;