import Additem from '../Components/AddItem'
import Card from '../Components/Card'
import Checkout from '../Components/Checkout'

import Data from '../Utils/data'

const ShopPage = () => {
  console.log(Data)
  return(
    <div className="shopping_container">
      <div className='col_1'>
        <div className="row_1">
          <Additem />
        </div>
        <div className="row_2">
          {Data.map((item) => <Card name={item.name} desc={item.desc} />)}
        </div>
      </div>
      <div className="col_2">
        <Checkout />
      </div>
    </div>
  )
}

export default ShopPage