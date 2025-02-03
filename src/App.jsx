import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/pages/Home";
import ProductDetails from "./component/product/ProductDetails";
import ProductByCategory from "./component/intro/ProductByCategoryList";
import ProductList from "./component/product/ProductList";
import AddProductForm from "./component/addproduct/AddProductForm";
import useFetch from "./assets/hooks/useFetch";



export default function App() {
    const {data,error,loading}= useFetch('https://dummyjson.com/products');
    console.log('parent')
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home  data={data} error={error} loading={loading}/>} />
          <Route path='/product' element={<ProductList data={data} error={error} loading={loading} />} />  
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='product/category/:name' element={<ProductByCategory />} />
          <Route path='/addproduct' element={<AddProductForm />}/>

      </Routes>
      
      <Footer />
    </>
  )
}
