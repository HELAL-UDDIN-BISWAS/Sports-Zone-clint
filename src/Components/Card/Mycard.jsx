import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Mycard = ({ mycart, mycarts, setmycarts }) => {

    const handaleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/categories/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'success',
                                text: 'Do you want to continue',
                                icon: 'success',
                                confirmButtonText: 'DELETE'
                            })
                        }
                        const remainig = mycarts.filter(cart => cart._id !== id);
                        setmycarts(remainig)


                    })

            }
        })
    }
    // console.log(mycart)
    const { imageurl, name, BraNdname, Type, ShortDescription, Rating, _id } = mycart || {}
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-72' src={imageurl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Type: {Type}</p>
                <div className="card-actions justify-end">
                    <Link to={`/Deteils/${_id}`}>
                        <button className="btn btn-primary">Watch</button>
                    </Link>
                    <Link to={`/Ubdatecard/${_id}`}>
                        <button className="btn btn-primary">Ubdate</button>
                    </Link>
                    <button onClick={() => handaleDelete(_id)} className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    );
};

export default Mycard;