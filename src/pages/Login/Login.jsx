import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';

const Login = () => {
    const {signin}=useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault()
        const form =event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        signin(email,password)
        .then(res=>console.log(res))
        .catch(error=>console.error(error))
    }
    return (
        <div onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;