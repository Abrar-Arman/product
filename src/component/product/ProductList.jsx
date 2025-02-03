import useFetch from '../../assets/hooks/useFetch';
import Spinner from '../spinner/Spinner';
import Product from './Product';
import style from './product.module.css'
export default function ProductList({data,error,loading}) {
    // const {data,error,loading}= useFetch('https://dummyjson.com/products');
    console.log('prduct')
       if(loading) 
        return < Spinner />;

  return (
    <section className={`container mt-5 pt-3 w-100  ${style.product}`}>
      <span>Our Products</span>
      <h2>Explore Our Products</h2>
      {error ? <p>some error </p>:''}
      <ul className='row gap-2 mt-3 justify-content-between'>
          {data.data.products.map((product,ind)=><Product key={ind} id={product.id} img={product.thumbnail} title={product.title}/>)}
      </ul>

    </section>
  )
}
