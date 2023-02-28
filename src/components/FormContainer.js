import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import { generateId } from "../utils/generateId";

export default function FormContainer() {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQty, setProductQty] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    const productData = {
      id: generateId(4),
      productName,
      productCat,
      productImg,
      productPrice,
      productQty,
    };
    dispatch(addProduct(productData));
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={submitHandler}
        >
          <div className="space-y-2">
            <label for="name">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label for="category">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              value={productCat}
              onChange={(e) => setProductCat(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              value={productImg}
              onChange={(e) => setProductImg(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label for="quantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                value={productQty}
                onChange={(e) => setProductQty(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
