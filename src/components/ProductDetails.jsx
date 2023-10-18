import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  console.log("Product ID:", id); // Check if this logs the ID
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res);// Access the 'products' property
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
console.log(products)

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Product Details</h1>
          <div>
            <img src={products.images[0]} alt={"jjj00"} />
            <h2>{products.title}</h2>
            <p>Category: {products.category}</p>
            <p>Brand: {products.brand}</p>
            <p>Rating: {products.rating} stars</p>
            <p>Description: {products.description}</p>
            {products.discountPercentage ? (
              <div>
                <p>Price: ${products.originalPrice}</p>
                <p>Discounted Price: ${products.price}</p>
                <p>Discount: {products.discountPercentage}%</p>
              </div>
            ) : (
              <p>Price: ${products.price}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
            }  

export default ProductDetails;
