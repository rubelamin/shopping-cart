import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";

// thumbnail https://i.dummyjson.com/data/products/59/thumbnail.jpg

export default function ProductCard({ data }) {
  const dispatch = useDispatch();

  const carthandler = (itemId, itemPrice) => {
    const itemData = {
      cartItemId: itemId,
      qty: 1,
      itemPrice: parseInt(itemPrice),
    };
    dispatch(addCart(itemData));
  };

  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src={`${data.productImg}`}
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{data.productName}</h4>
        <p className="lws-productCategory">{data.productCat}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{data.productPrice}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{data.productQty}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => carthandler(data.id, data.productPrice)}
        >
          Add To Cart {data.id}
        </button>
      </div>
    </div>
  );
}
