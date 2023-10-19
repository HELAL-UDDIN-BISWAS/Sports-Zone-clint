import React from 'react';

const AddProduct = () => {
    const handlesubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const name=form.name.value
        const imageurl=form.imageurl.value
        const BraNdname=form.BraNdname.value
        const Type=form.Type.value
        const Price=form.Price.value
        const Rating=form.Rating.value
        const ShortDescription=form.ShortDescription.value
        const allprodect={name,imageurl,BraNdname,Type,Price,ShortDescription,Rating}
        console.log(allprodect)
        fetch("http://localhost:5000/categories",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(allprodect),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="bg-white">
      <form onSubmit={handlesubmit} className="card-body grid">
        <div className="grid lg:grid-cols-2 lg:gap-4" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="name" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">IMAGE-URL</span>
          </label>
          <input type="url" placeholder="IMAGE-URL" name='imageurl' className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="name" placeholder="Brand Name" name='BraNdname' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="name" placeholder="Type" name='Type' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type='name' placeholder="Price" name='Price' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input type='name' placeholder="ShortDescription" name='ShortDescription' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type='name' placeholder="Rating" name='Rating' className="input input-bordered" required />
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

export default AddProduct;