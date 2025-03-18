import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import classes from "./ProductItem.module.css";
import { cartOperationActions } from "../../store/cartOperationSlice";

const ProductItem = ({ title, price, description, id }) => {
   const dispatch = useDispatch();
   const addToCartHandler = () => {
      dispatch(
         cartOperationActions.addItemToCart({ title, price, description, id })
      );
   };
   return (
      <li className={classes.item}>
         <Card>
            <header>
               <h3>{title}</h3>
               <div className={classes.price}>${price.toFixed(2)}</div>
            </header>
            <p>{description}</p>
            <div className={classes.actions}>
               <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
         </Card>
      </li>
   );
};

export default ProductItem;
