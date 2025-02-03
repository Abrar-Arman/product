import myImg from '../../assets/img/intro.png';
import CategoryList from './CategoryList';
export default function Intro() {
  console.log('intro');
  return (
    <div  className="container py-3 ">
      <div   className="row gap-3">
         <div  style={{height:'50vh',backgroundColor:'#fff'}} className="sidebar pt-2 col-md-3 ">
          <CategoryList />
         </div>
         <div style={{height:'50vh',backgroundColor:'#000'}} className="col-md-8 text-white d-flex ">
            <div style={{height:'100%',width:'60%'}}className="d-flex  flex-column align-items-start justify-content-center ps-5">
            <p style={{fontSize:'26px',fontWeight:'500'}}>Up to 10% off Voucher</p>
            <span style={{textDecoration:'underline'}}>Shop Now</span>
            </div>
             
           <div style={{width:'40%',height:'100%'}} className='d-flex   justify-content-center align-items-end' >
            <img  style={{width:'90%'}} src={myImg} className='bg-info'/>
           </div>
         </div>
      </div>
    </div>
  )
}
