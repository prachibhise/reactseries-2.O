import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 2,
      name: "Headphones",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 6000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1> Shopping Cart</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <div className="empty">
            <h3>Your cart is empty </h3>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="quantity">
                    <button onClick={() => decrease(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increase(item.id)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <h2 className="total">
              Total: ₹{total.toLocaleString()}
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;