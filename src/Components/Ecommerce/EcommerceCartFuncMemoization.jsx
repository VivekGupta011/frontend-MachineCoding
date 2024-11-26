import React, { useState, useEffect } from 'react';

// Load cart data from local storage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

const EcommerceCartFunc = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 150 },
  ];

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  // Store cart in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>E-commerce Store</h1>
      <div style={styles.productList}>
        <h2 style={styles.subheading}>Products</h2>
        {products.map((product) => (
          <div key={product.id} style={styles.productItem}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              disabled={cart.some(item => item.id === product.id)}
              style={styles.addButton}
            >
              {cart.some(item => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <div style={styles.cart}>
        <h2 style={styles.subheading}>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <div style={styles.quantityControls}>
                  <button onClick={() => decreaseQuantity(item.id)} style={styles.quantityButton}>-</button>
                  <span style={styles.quantityDisplay}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} style={styles.quantityButton}>+</button>
                </div>
                <span>Total: ${item.price * item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>Remove</button>
              </div>

              
              // const updateQuantity = (productId, quantity) => {
              //   setCart((prevCart) => {
              //     return prevCart.map(item =>
              //       item.id === productId ? { ...item, quantity } : item
              //     );
              //   });
              // };
              // we have also option we can direct do changes in input 
              // <input
              //     type="number"
              //     value={item.quantity}
              //     onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
              //     min="1"
              //     style={styles.quantityInput}
              //   />
            ))}
            <h3 style={styles.totalCost}>Total Cost: ${totalCost}</h3>
            <button onClick={clearCart} style={styles.clearButton}>Clear Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcommerceCartFunc;

// Inline styles for better UI
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  subheading: {
    fontSize: '1.5em',
    margin: '10px 0',
  },
  productList: {
    width: '80%',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  productItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  addButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  cart: {
    width: '80%',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
  },
  quantityButton: {
    padding: '5px 10px',
    margin: '0 5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  quantityDisplay: {
    fontSize: '1em',
    padding: '5px 10px',
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  clearButton: {
    padding: '10px 15px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  totalCost: {
    fontSize: '1.25em',
    marginTop: '20px',
  },
};







// optimization in terms of we have create one update function insted of increaseCart and decreaseCart 
// import React, { useEffect, useState } from "react";

// // Load cart data from local storage
// const loadCartFromLocalStorage = () => {
//   const cartData = localStorage.getItem("cart");
//   return cartData ? JSON.parse(cartData) : [];
// };

// const EcommerceCart = () => {
//   const [cart, setCart] = useState(loadCartFromLocalStorage);

//   // Sample products (this can be fetched from an API)
//   const products = [
//     { id: 1, name: "Product 1", price: 100 },
//     { id: 2, name: "Product 2", price: 200 },
//     { id: 3, name: "Product 3", price: 150 },
//   ];

//   // Update localStorage when cart changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const updateCart = (product, quantity) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         // Update the existing product quantity
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: Math.max(1, item.quantity + quantity) }
//             : item
//         );
//       } else {
//         // Add new product to the cart
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const totalCost = cart.reduce((total, product) => total + product.price * product.quantity, 0);

//   return (
//     <div className="form-container">
//       <h1>E-commerce Store</h1>
//       <div>
//         <h2>Products</h2>
//         {products.map((product) => (
//           <div key={product.id}>
//             <span>{product.name}</span>
//             <span>${product.price}</span>
//             <button
//               onClick={() => updateCart(product, 1)}
//               disabled={cart.some((item) => item.id === product.id)}
//             >
//               {cart.some((item) => item.id === product.id) ? "In Cart" : "Add to Cart"}
//             </button>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h2>Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div>
//             {cart.map((item) => (
//               <div key={item.id}>
//                 <span>{item.name}</span>
//                 <span>${item.price}</span>
//                 <div>
//                   <button onClick={() => updateCart(item, -1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateCart(item, 1)}>+</button>
//                 </div>
//                 <span>Total: ${item.price * item.quantity}</span>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             ))}
//             <h3>Total Cost: ${totalCost}</h3>
//             <button onClick={clearCart}>Clear Cart</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EcommerceCart;
