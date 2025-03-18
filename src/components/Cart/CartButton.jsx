import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartButton = () => {
   const dispatch = useDispatch();
   const cartQuantity = useSelector(
      (state) => state.cartOperation.totalQuantity
   );
   return (
      <button
         className={classes.button}
         onClick={() => dispatch(cartActions.toggleCart())}
      >
         <span>My Cart</span>
         <span className={classes.badge}>{cartQuantity}</span>
      </button>
   );
};

export default CartButton;
