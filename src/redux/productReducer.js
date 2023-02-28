import {
  ADDPRODUCT,
  ADDTOCART,
  INCREMENT,
  DECREMENT,
  DELETECART,
} from "./actionTypes";

const initialState = {
  products: [],
  cartItems: [
    {
      cartItemId: 0,
      qty: 0,
      itemPrice: 0,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  // console.log(Array.isArray(state.cartItems));
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADDTOCART:
      const { payload } = action;
      const checkItem = state.cartItems.find(
        (proId) => proId.cartItemId === payload.cartItemId
      );

      if (checkItem) {
        return {
          ...state,
          products: state.products.map((prod) => {
            if (prod.id === payload.cartItemId) {
              return {
                ...prod,
                productQty: parseInt(prod.productQty) - 1,
              };
            }

            return {
              ...prod,
            };
          }),
          cartItems: state.cartItems.map((item) => {
            if (item.cartItemId === payload.cartItemId) {
              const quantity = item.qty + 1;
              return {
                ...item,
                qty: quantity,
                itemPrice: parseInt(quantity) * parseInt(payload.itemPrice),
              };
            } else {
              return item;
            }
          }),
        };
      } else if (state.cartItems[0].cartItemId === 0) {
        return {
          ...state,
          products: state.products.map((prod) => {
            if (prod.id === payload.cartItemId) {
              const quantity = parseInt(prod.productQty);
              return {
                ...prod,
                productQty: quantity - 1,
              };
            }

            return {
              ...prod,
            };
          }),
          cartItems: state.cartItems.map((item) => {
            return {
              ...item,
              cartItemId: payload.cartItemId,
              qty: payload.qty,
              itemPrice: payload.itemPrice,
            };
          }),
        };
      } else {
        return {
          ...state,
          products: state.products.map((prod) => {
            if (prod.id === payload.cartItemId) {
              const quantity = parseInt(prod.productQty);
              return {
                ...prod,
                productQty: quantity - 1,
              };
            }

            return {
              ...prod,
            };
          }),
          cartItems: [...state.cartItems, payload],
        };
      }

    case INCREMENT:
      const checkProdQnty = state.products.find(
        (proId) => proId.id === action.payload
      );
      if (checkProdQnty.productQty === 0) return { ...state };

      let itemPrice;
      return {
        ...state,
        products: state.products.map((prod) => {
          if (prod.id === action.payload) {
            itemPrice = prod.productPrice;
            return {
              ...prod,
              productQty: parseInt(prod.productQty) - 1,
            };
          }

          return {
            ...prod,
          };
        }),
        cartItems: state.cartItems.map((item) => {
          if (item.cartItemId === action.payload) {
            const quantity = item.qty + 1;
            return {
              ...item,
              qty: quantity,
              itemPrice: parseInt(quantity) * parseInt(itemPrice),
            };
          } else {
            return item;
          }
        }),
      };

    case DECREMENT:
      const checkCartQnty = state.cartItems.find(
        (proId) => proId.cartItemId === action.payload
      );
      if (checkCartQnty.qty === 0) return { ...state };
      let ditemPrice;
      return {
        ...state,
        products: state.products.map((prod) => {
          if (prod.id === action.payload) {
            ditemPrice = prod.productPrice;
            return {
              ...prod,
              productQty: parseInt(prod.productQty) + 1,
            };
          }

          return {
            ...prod,
          };
        }),
        cartItems: state.cartItems.map((item) => {
          if (item.cartItemId === action.payload) {
            const quantity = item.qty - 1;
            return {
              ...item,
              qty: quantity,
              itemPrice: parseInt(quantity) * parseInt(ditemPrice),
            };
          } else {
            return item;
          }
        }),
      };
    case DELETECART:
      const newCart = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
      const rmvCartQnty = state.cartItems.find(
        (proId) => proId.cartItemId === action.payload
      );

      return {
        ...state,
        products: state.products.map((prod) => {
          if (prod.id === action.payload) {
            return {
              ...prod,
              productQty: parseInt(prod.productQty) + rmvCartQnty.qty,
            };
          }

          return {
            ...prod,
          };
        }),
        cartItems: [
          ...newCart,
          {
            cartItemId: 0,
            qty: 0,
            itemPrice: 0,
          },
        ],
      };

    default:
      return state;
  }
};

export default productReducer;
