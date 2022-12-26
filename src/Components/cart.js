import React, { useEffect, useState } from "react";

const Cart = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART.map((data, dataindex) => {
        return (
          <div className="cart_item">
            <span>{data.productName}</span> <br />
            <span>{data.brandName}</span>
            <br />
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return dataindex === index
                    ? { ...item, qyt: data.qyt > 0 ? data.qyt - 1 : 0 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{data.qyt}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return dataindex === index
                    ? { ...item, qyt: data.qyt + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <br />
            <span>Rs: {data.price * data.qyt} /.</span>
            <br />
          </div>
        );
      })}
      <p>
        Cart Total: Rs.
        {CART.map((data) => data.price * data.qyt).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
