import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./cart";

const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.product);


  const [cart, setCart] = useState([]);

  const list = products.map((product) => {
    const addToCart = (data) => {
      setCart([...cart, { ...data, qyt: 1 }]);
    };

    return (
      <div className="box" key={product.id}>
        <h3>{product.productName}</h3>

        <img className="image" src={product.image} alt="" />
        <br />

        <span>{product.brandName}</span>

        <br />
        <span> Rs: {product.price}</span>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    );
  });

  return (
    <div> <h1 className="Head" >
    <div>Shopping App</div>   
      <div className="cart">Cart<sup>{cart.length}</sup></div>
      </h1>
      
<Cart cart={cart}/>
 {list}
    </div>
  );
};

export default ProductComponent;
