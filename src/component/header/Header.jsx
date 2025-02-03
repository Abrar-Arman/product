import { Link } from 'react-router-dom'
import style from './header.module.css'
export default function Header() {
  return (
<header>
   <nav className={`navbar navbar-expand-lg bg-body-tertiary py-3 ${style.navbar}`}>
  <div className="container  d-flex justify-content-between align-items-center ">
    <Link className="navbar-brand fw-bold" to="/">Exculsive</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className= {`${style.link} collapse justify-content-center  navbar-collapse`} id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product">Product</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/addproduct">Add product</Link>
        </li>
      </ul>
      
    </div>
    <div className='d-flex align-items-center gap-2'>
        <form className="d-flex" role="search">
            <div><input className="btn  border ps-3" type="search" placeholder="what are you looking for?" aria-label="Search" /></div>   </form>
            <div className="icon d-flex gap-1">
           
                <i className="fa-regular fa-heart " />
                <i className="fa-solid fa-cart-shopping" />
             

            </div>
            
      
      </div>
  </div>
</nav>

    </header>
  )
}
