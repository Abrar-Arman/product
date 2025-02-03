import { Link } from "react-router-dom";


export default function Product({id,img,title}) {
  return (
    <li className='col-md-3 text-center mb-3'>
      <img className='mb-1' style={{width:'100%'}} src={img} />
      <h3 style={{fontSize:'14px'}}>{title}</h3>
      <Link to={`product/${id}`}><button style={{backgroundColor:'rgba(255, 0, 0, 0.648)'}} className="btn mt-1 text-white">Details</button></Link>
    </li>
  )
}
