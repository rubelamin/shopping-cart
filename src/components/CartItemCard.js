import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartIncrement, cartDecrement, removeCartItem } from "../redux/actions";

export default function CartItemCard({ cartItem }) {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.productsarray.products);
  const productFind = prod.find((data) => data.id === cartItem.cartItemId);

  const incrementHandler = (itemId) => {
    dispatch(cartIncrement(itemId));
  };
  const decrementHandler = (itemId) => {
    dispatch(cartDecrement(itemId));
  };

  const removeCartHandler = (itemId) => {
    dispatch(removeCartItem(itemId));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img
          className="lws-cartImage"
          src={productFind?.productImg}
          alt="product"
        />
        <div className="space-y-2">
          <h4 className="lws-cartName">{productFind?.productName}</h4>
          <p className="lws-cartCategory">{productFind?.productCat}</p>
          <p>
            BDT <span className="lws-cartPrice">{cartItem.itemPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => incrementHandler(cartItem.cartItemId)}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cartItem.qty}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => decrementHandler(cartItem.cartItemId)}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {parseInt(cartItem.itemPrice)}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => removeCartHandler(cartItem.cartItemId)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
