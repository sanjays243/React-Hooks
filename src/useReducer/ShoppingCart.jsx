import { useReducer } from "react";

const initialState = [];

const products = [
  { id: 1, name: "Mobile", price: 10000 },
  { id: 2, name: "Laptop", price: 40000 },
  { id: 3, name: "Headphones", price: 1500 }
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.product];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div><br />
      <h2>Shopping Cart - useReducer</h2>
      <h3>Available Products</h3>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ?{item.price}</p>
          <button onClick={() => dispatch({ type: "ADD", product: item })}>Add to Cart</button>
        </div>
      ))}
   
      <h3>My Cart</h3>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item, index) => (
        <div key={`${item.id}-${index}`}>
          <p>{item.name} - ?{item.price}</p>
          <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>Remove</button>
        </div>
      ))}
      <h3>Total: ?{total}</h3>
    </div>
  );
}

export default ShoppingCart;
