import React, { useContext } from 'react';
import { AuthContext } from '../../provide/AuthProvider';
import Swal from 'sweetalert2';

const AddArticles = () => {
    const { user } = useContext(AuthContext)
    const handleAddArticle = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const email = user?.email;
        const description = form.description.value;
        const publisher_img = form.publisher_img.value;
        const publisher_name = form.publisher_name.value;
        const view = form.view.value;
        const date = form.date.value;

        const addArticles = {
            title,
            img,
            email,
            description,
            publisher_img,
            publisher_name,
            view,
            date
        }
        console.log(addArticles);
        fetch('http://localhost:5000/articles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addArticles)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "add article successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Add Article</h3>

            </div>
            <form onSubmit={handleAddArticle}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Title</span>
                        </label>
                        <input type="text" name='title' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">User Picture</span>
                        </label>
                        <input type="text" name='userPhoto' defaultValue={user?.photoURL
                        } className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Article Picture</span>
                        </label>
                        <input type="text" name='img' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Description</span>
                        </label>
                        <textarea type="text" name='description' placeholder='description' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Publisher img</span>
                        </label>
                        <input type="text" name='publisher_img' placeholder='publisher_img' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Publisher name</span>
                        </label>
                        <input type="text" name='publisher_name' className="input input-bordered" placeholder='publisher name' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">
                                View</span>
                        </label>
                        <input type="text" name='view' placeholder='view' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">
                                Date</span>
                        </label>
                        <input type="date" name='date' placeholder='date' className="input input-bordered" required />
                    </div>
                </div>
                <div className="text-center mt-4">
                    <input className="btn btn-primary" type="submit" value="Add Articles" />
                </div>
            </form>
        </div>
    );
};

export default AddArticles;