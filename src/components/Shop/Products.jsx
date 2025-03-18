import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
   {
      id: "p1",
      price: 6,
      title: "Atomic Habits",
      description: "Habits that can change your life",
   },
   {
      id: "p2",
      price: 5,
      title: "The Power of Now",
      description:
         "The Power of Now is a book about the present moment and the importance of being present in the moment.",
   },
   {
      id: "p3",
      price: 4,
      title: "The 48 Laws of Power",
      description:
         "The 48 Laws of Power is a book about the power of the mind and the power of the body.",
   },
   {
      id: "p4",
      price: 3,
      title: "The Art of War",
      description:
         "The Art of War is a book about the art of war and the art of life.",
   },
   {
      id: "p5",
      price: 2,
      title: "The 7 Habits of Highly Effective People",
      description:
         "The 7 Habits of Highly Effective People is a book about the habits of highly effective people.",
   },
];

const Products = () => {
   return (
      <section className={classes.products}>
         <h2>Buy your favorite books</h2>
         <ul>
            {DUMMY_PRODUCTS.map((product) => (
               <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
               />
            ))}
         </ul>
      </section>
   );
};

export default Products;
