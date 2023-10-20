import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Ubdatecard = () => {
    const ubdate = useLoaderData()
    const { imageurl, name, BraNdname, Type, ShortDescription, Rating, _id, Price } = ubdate || {}

    const handleUbdate = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const imageurl = form.imageurl.value
        const BraNdname = form.BraNdname.value
        const Type = form.Type.value
        const Price = form.Price.value
        const Rating = form.Rating.value
        const ShortDescription = form.ShortDescription.value
        const allprodect = { name, imageurl, BraNdname, Type, Price, ShortDescription, Rating }
        fetch(`http://localhost:5000/categories/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allprodect),
        })
            .then(res => res.json())
            .then(data => {

                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Success'
                    })
                }
            })

    }
    return (
        <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="bg-white">
                    <form onSubmit={handleUbdate} className="card-body grid">
                        <div className="grid lg:grid-cols-2 lg:gap-4" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="name" placeholder="name" defaultValue={name} name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">IMAGE-URL</span>
                                </label>
                                <input type="url" placeholder="IMAGE-URL" defaultValue={imageurl} name='imageurl' className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="name" defaultValue={BraNdname} placeholder="Brand Name" name='BraNdname' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="name" placeholder="Type" name='Type' defaultValue={Type} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type='name' placeholder="Price" defaultValue={Price} name='Price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type='name' placeholder="ShortDescription" defaultValue={ShortDescription} name='ShortDescription' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type='name' placeholder="Rating" defaultValue={Rating} name='Rating' className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control w-full mt-6">
                            <button type='submit' className="btn btn-primary w-full">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ubdatecard;