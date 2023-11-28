import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provide/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <form onSubmit={handleLogin} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-success text-xl">Login</button>
                    </div>
                    <div onClick={handleGoogleLogin} className='flex cursor-pointer'>
                        <button type='submit' className="btn btn-primary">
                            Login with google
                        </button>
                    </div>
                    <p className='text-center text-lg mt-4 font-bold'>Are you new to newspaper website? Please <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;