import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provide/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, handleUpdateProfile, loginWithGoogle } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);

        //validation

        if (password.length < 6) {
            Swal.fire({
                title: "password at least 6 character",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleUpdateProfile(name, photo)
                    .then(result => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "user create successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })

            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
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
                            <button type='submit' className="btn btn-success text-xl">SignUp</button>
                        </div>

                        <div onClick={handleGoogleLogin} className='flex cursor-pointer'>
                            <button type='submit' className="btn btn-primary">
                                Login with google
                            </button>
                        </div>
                        <p className='text-center text-lg mt-4 font-bold'>Already have an account? Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;