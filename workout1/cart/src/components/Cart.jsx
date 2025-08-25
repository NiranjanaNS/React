import React, { useReducer } from 'react'

const initialState = {
    cart: []
};

const reducer = (state, action) => {
    switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload)
      };

    case "CLEAR_CART":
      return { cart: [] };

    default:
      return state;
  }
}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const items = ["Apple"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div className="flex gap-2 mb-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded-lg"
          >
            Add {item}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-4 rounded-lg w-64">
        <h2 className="text-xl mb-2">Items</h2>
        {state.cart.length === 0 ? (
          <p className="text-gray-400">Cart is empty</p>
        ) : (
          <ul>
            {state.cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2 border-b border-gray-700 pb-1"
              >
                {item}
                <button
                  onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}
                  className="text-red-400 hover:text-red-600"
                >
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => dispatch({ type: "CLEAR_CART" })}
        className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
      >
        Clear Cart
      </button>
    
    </div>
  )
}

export default Cart