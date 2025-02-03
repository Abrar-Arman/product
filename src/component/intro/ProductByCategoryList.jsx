import { useParams } from "react-router-dom"
import useFetch from "../../assets/hooks/useFetch";
import Spinner from "../spinner/Spinner";
import ProductByCategoryItem from "./ProductByCategoryItem";
import style from '../product/product.module.css'
export default function ProductByCategory() {
  const {name} = useParams();
  const {data,error,loading}=useFetch(`https://dummyjson.com/products/category/${name}`);
   if(loading) 
          return < Spinner />;
  return (
    <main className="container mt-4">
      <section className={`container mt-5 pt-3 w-100  ${style.product}`}>
            <span>Our {name} Products</span>
            <h2 className="mt-4">Explore Our <b style={{color:'rgba(255, 0, 0, 0.648)'}}>{name}</b> Products</h2>
            {error ? <p>some error </p>:''}
            <ul className='row gap-2 mt-3 justify-content-between'>
                {data.data?.products.map((product,ind)=><ProductByCategoryItem key={ind} id={product.id} img={product.thumbnail} title={product.title}/>)}
            </ul>
      
          </section>
    </main>
  )
}
