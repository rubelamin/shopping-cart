import React from "react";
import { useSelector } from "react-redux";
import FormContainer from "./FormContainer";
import ProductCard from "./ProductCard";

export default function MainBody() {
  const productData = useSelector((state) => state.productsarray.products);
  // console.log(productData);

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {productData &&
            productData.map((data, index) => (
              <ProductCard data={data} key={index} />
            ))}
        </div>
        <FormContainer />
      </div>
    </main>
  );
}
