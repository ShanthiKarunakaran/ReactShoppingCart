import TrashCan from "../Assets/TrashCan.jpg"
import Pizza_img from "../Assets/pizza_img.jpg"

const Card = (props) => {
  
  return(
    <ul>
      <li>     
        <img src={Pizza_img} alt="pizza item" className="item_img" />
        <div className="items">
          <h2>{props.name}</h2>
          <h3>{props.desc}</h3>
        </div>
        <select name="" id=""></select>
        <span>$681</span>
        <img src={TrashCan} alt="delete button" className="trashcan_img" />
      </li>
      </ul>
  )
}

export default Card