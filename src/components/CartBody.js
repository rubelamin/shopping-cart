import React from "react";
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import CheckoutBillDetails from "./CheckoutBillDetails";

export default function CartBody() {
  const total = useSelector((state) => state.productsarray);

  // const totalCartPrice = () => {
  //   const tp = total.cartItems.reduce((prev, curr) => prev + curr.qty, 0);
  //   return tp;
  // };
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {total.cartItems !== [] || total.cartItems[0].cartItemId !== 0 ? (
              <>
                {total.cartItems.map((item) => (
                  <CartItemCard cartItem={item} key={item.cartItemId} />
                ))}
              </>
            ) : (
              <>
                <h5>There is no item in cart</h5>
              </>
            )}
          </div>

          <CheckoutBillDetails />
        </div>
      </div>
    </main>
  );
}
