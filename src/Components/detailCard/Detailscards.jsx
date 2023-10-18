
const Detailscards = ({categoryitem}) => {
    console.log( categoryitem)
    const {imageurl,name,BraNdname,Type,ShortDescription,Rating}= categoryitem || {}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={imageurl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{ShortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Detailscards;