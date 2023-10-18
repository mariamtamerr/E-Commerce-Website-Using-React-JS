
// export default ProductCard;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './ProductCard.css';
import Rating from "./Rating";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "./cart/cartSlice"; // Import the Redux action

function ProductCard(props) {
    const { product } = props;
    const isOutOfStock = product.stock === 0;
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize the useDispatch hook
    const [addedToCart, setAddedToCart] = useState(false);

     // Redux state to check if the item is already in the cart
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    // Check if the item is in the cart based on its ID
    const isItemInCart = cartItems.some((item) => item.id === product.id);
    setAddedToCart(isItemInCart);
  }, [cartItems, product.id]);


    const handleClick = () => {
        // Dispatch the addItemToCart action with the selected product
        dispatch(addItemToCart(product));
        navigate('/cart');
        setAddedToCart(true);

    }

    return (
        <div className="col-lg-3 col-md-3 col-sm-6 mb-3">
            <div className="card h-100 ">
                <img src={product.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/productDetails/${product.id}`} className="card-link">
                            {product.title.substring(0, 10)}
                        </Link>
                    </h5>
                    <p className="card-text price">
                        ${product.price}
                    </p>
                    <p className="card-text description">
                        {product.description.substring(0, 15)}
                    </p>
                    <p className="card-text rating">
                        <Rating rating={product.rating} />
                    </p>
                    <div className={`stock-status ${isOutOfStock ? 'out-of-stock' : 'in-stock'}`}>
                        {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                    </div>

                    {addedToCart ? (
            <button className="btn btn-info cart" style={{ backgroundColor: "black", color: "red" }}>
              Added to Cart
            </button>
          ) : (
            <button onClick={handleClick} className="btn btn-info cart text-center" >
              Add to Cart
            </button>
          )}
                   
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="col-lg-3 col-md-3 col-sm-6 mb-3">
    //         <div className="card" style={{ width: '22rem' }}>
    //             <div className='position-relative'>
    //             <img src={product.images[0]} className="card-img-top" alt="..." />
    //                 <button disabled className="btn fw-bold rounded-pill position-absolute border border-0 text-light" style={{ top: '2%', left: '10px', fontSize: '12px', backgroundColor: handleStockColor }}>{handleStockText}</button>
    //             </div>
    //             <div className="card-body">
    //                 <div className="d-flex justify-content-between">
    //                  <h5 className="card-title">
    //                      <Link to={`/productDetails/${product.id}`} className="card-link">
    //                          {product.title}
    //                      </Link>
    //                  </h5>
    //                     <h5 className="card-title fw-bold">{product.price}$</h5>
    //                 </div>
    //                 <p className="card-text text-start" style={{ fontSize: '16px' }}>{product.description}</p>
    //                 <Rating rating={product.rating} />
    //                 <button className="btn btn-outline-success fw-bold" onClick={handleClick}>Add To Cart</button>
    //             </div>
    //         </div>
    //     </div>
    // )
}


export default ProductCard;