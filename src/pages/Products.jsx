// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ProductList from "../components/ProductList";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         console.log(res.data.products);
//         setProducts(res.data.products); // Access the 'products' property
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ProductList products={products} />
//       )}
//     </div>
//   );
// }

// export default Products;


import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Link, Route, Routes } from "react-router-dom";
// import Cart from "./Cart";
import Cart from "../components/cart/Cart";
import ProductDetails from "../components/ProductDetails";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);// Access the 'products' property
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <nav>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route
            path="/cart"
            element={<Cart products={products} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      )} */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default Products;
