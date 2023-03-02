import mastercard from "../Assets/mastercard.jpg"
import visa from "../Assets/visa.jpg"
import rupay from "../Assets/rupay.jpg"

const Checkout = () => {
  return(
    <div className="card_container">
      <form action="">
        <h1>Card Details</h1>
        <h3>Card Type</h3>
        <ul class="card_types">
          <li><img src={mastercard} alt="mastercard image" /></li>
          <li><img src={visa} alt="visa image" /></li>
          <li><img src={rupay} alt="rupay image" /></li>
          <li><span>See All</span></li>
        </ul>
        
        <div>
          <label htmlFor="">Name on Card</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Card Number</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Expiration Date</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">CVV</label>
          <input type="text" />
        </div>

        <div className="pricing_block">
          <h4>
            <span>Subtotal</span>
            <span>$1,668</span>
          </h4>
          <h4>
            <span>Shipping</span>
            <span>$4</span>
          </h4>
          <h4>
            <span>Total</span>
            <span>$1,672</span>
          </h4>
          <button>
            <span>$1,672</span>
            <span>Checkout</span>  
            <span><img src="../Assets/right.jpg" alt="" /></span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout