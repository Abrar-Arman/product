import img1 from '../../assets/img/delivery.png'
import img2 from '../../assets/img/service.png'
import img3 from '../../assets/img/secure.png'
import style from './service.module.css'
export default function Servese() {
  console.log('Servese')
  return (
    <section className="container mt-4 pt-3 ">
      <div className="row  justify-content-between text-center">
        <div className={`${style.service} col-md-3 shadow pt-2 pb-4`}>
            <img src={img1} />
            <p className='service mb-1'>FREE AND FAST DELIVERY</p>
            <span>Free delivery for all orders over $140</span>
        </div>
        <div className={`${style.service} col-md-3 shadow pt-2 pb-4`}>
            <img src={img2} />
            <p className='mb-1'>FREE AND FAST DELIVERY</p>
            <span>Free delivery for all orders over $140</span>
        </div>
        <div className={`${style.service} col-md-3 shadow pt-2 pb-4`}>
            <img src={img3} />
            <p className='mb-1'>FREE AND FAST DELIVERY</p>
            <span>Free delivery for all orders over $140</span>
        </div>

      </div> 

    </section>
  )
}
