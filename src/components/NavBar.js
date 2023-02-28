import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

export default function NavBar({ handleView }) {
  const total = useSelector((state) => state.productsarray);

  const totalCartPrice = () => {
    const tp = total.cartItems.reduce((prev, curr) => prev + curr.qty, 0);
    return tp;
  };

  const controlView = (e) => {
    handleView(e);
  };

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <span
            className="navHome"
            id="lws-home"
            onClick={() => controlView(true)}
          >
            {" "}
            Home{" "}
          </span>
          {totalCartPrice() <= 0 ? (
            <span className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{totalCartPrice().toString()}</span>
            </span>
          ) : (
            <span
              className="navCart"
              id="lws-cart"
              onClick={() => controlView(false)}
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{totalCartPrice().toString()}</span>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
