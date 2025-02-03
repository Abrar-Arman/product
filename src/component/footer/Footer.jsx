import style from './footer.module.css'
export default function Footer() {
  return (
    <footer className="mt-5 py-5 ps-3 pe-4 text-white text-center">
     <div className={`d-flex w-100 ${style.footer} justify-content-between align-items-start gap-4`}>
        <div>
            <h1>Exclusive</h1>
            <span>Subscribe</span>
            <p>Get 10% off your first order</p>
            <input type='email' placeholder="Enter your email" />
        </div>
        <div>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <span>exclusive@gmail.com</span>
        </div>
       
        <div>
            <h3>Account</h3>
            <ul>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
               
            </ul>
        </div>
        <div>
            <h3>Quick Link</h3>
           <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Contact</li>
            <li>FAQ</li>
            
           </ul>
        </div>
      </div>
    </footer>
  )
}
