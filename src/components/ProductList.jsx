

// import ProductCard from "./ProductCard";

// function ProductList(props) {
//     const { products } = props;

//     const cardsPerRow = 4;

//     return (
//         <div>
//             <h1>Product List</h1>
//             <div className="row">
//                 {products.map((product, index) => (
//                     <div className={`col-${12 / cardsPerRow}`} key={product.id}>
//                         <ProductCard product={product} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductList;

// ---------------------------------------------------------------

import ProductCard from "./ProductCard";

function ProductList(props) {
    const { products } = props;

    return (
        <div className="container">
            <h1>Product List</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3" style={{width: "120rem", height: "100rem"}}> {/* Adjust the number of columns as needed */}
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;


// ---------------------------------------------------------------


