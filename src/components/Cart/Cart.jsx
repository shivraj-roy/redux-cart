import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
   const showCart = useSelector((state) => state.cart.showCart);
   const cartItems = useSelector((state) => state.cartOperation.items);
   const totalAmount = useSelector((state) => state.cartOperation.totalAmount);
   return (
      showCart && (
         <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
               {cartItems.map((item) => (
                  <CartItem
                     key={item.id}
                     item={{
                        id: item.id,
                        title: item.title,
                        quantity: item.quantity,
                        total: item.totalPrice,
                        price: item.price,
                     }}
                  />
               ))}
            </ul>
            <div
               className={classes.total}
               style={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
               }}
            >
               <span style={{ fontSize: "1.2rem", marginRight: "10px" }}>
                  Total Amount:{" "}
               </span>
               <span style={{ fontSize: "1.2rem" }}>
                  ${totalAmount.toFixed(2)}
               </span>
            </div>
         </Card>
      )
   );
};

export default Cart;
