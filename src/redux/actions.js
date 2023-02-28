import {
  ADDPRODUCT,
  ADDTOCART,
  DELETECART,
  INCREMENT,
  DECREMENT,
} from "./actionTypes";

export const addProduct = (productData) => {
  return {
    type: ADDPRODUCT,
    payload: productData,
  };
};

export const addCart = (productId) => {
  return {
    type: ADDTOCART,
    payload: productId,
  };
};

export const removeCartItem = (productId) => {
  return {
    type: DELETECART,
    payload: productId,
  };
};

export const cartIncrement = (productId) => {
  return {
    type: INCREMENT,
    payload: productId,
  };
};

export const cartDecrement = (productId) => {
  return {
    type: DECREMENT,
    payload: productId,
  };
};
