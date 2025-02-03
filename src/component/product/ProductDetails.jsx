import { useParams } from "react-router-dom"
import useFetch from "../../assets/hooks/useFetch";
import Spinner from "../spinner/Spinner";

export default function ProductDetails() {
    const {id}=useParams();
    const {data,error,loading} = useFetch(`https://dummyjson.com/products/${id}`);
    if(loading) 
            return < Spinner />;
  
  return (
    <main className="container mt-4 ">
        <div style={{height:'60vh'}} className="row w-100 ">
             <div className="col-md-5 -50">
                  <div className="row fw-bold">
                   <div className="sidebar col-md-4 d-flex flex-column">
                    {data.data.images.map((img,ind)=><img  style={{width:'100%',cursor:'pointer'}} src={img} key={ind} />)}
                   </div>
                   <div style={{overflow:'auto'}} className="col-md-8 d-flex align-items-center">
                    <img style={{width:'100%'}} src={data.data.thumbnail} alt={data.data.title} />
                   </div>
                  </div>
            </div>
             <div className="col-md-7 fw-bold  justify-content-center align-items-center d-flex flex-column gap-3 ">
                  <h2 style={{marginBottom:'2px'}}>{data.data.title}</h2>
                  <span>Price: <span style={{color:'rgba(255, 0, 0, 0.648)'}}>$ {data.data.price}</span></span>
                  <p style={{fontSize:'14px',width:'60%',textAlign:'justify'}}>{data.data.description}</p>
                  <button className="btn btn-primary">Add to Cart</button>
             </div>
        </div>
    
    </main>
  )
}
