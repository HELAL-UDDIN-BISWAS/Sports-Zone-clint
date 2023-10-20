import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import Swal from 'sweetalert2';
const Register = () => {
const {register}=useContext(AuthContext)

    const handlesubmit=(event)=>{
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        console.log(name,email,password)
        register(email,password)
        .then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'OK',
                text: 'Login in Success Full',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            console.log(res)})
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        .catch(error=>console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesubmit} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;