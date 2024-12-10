import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderStatus() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch orders from the server
  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://api.example.com/orders");
      setOrders(response.data); // Update the state with the new data
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    // Fetch orders initially when the component mounts
    fetchOrders();

    // Set up polling every 10 seconds
    const interval = setInterval(fetchOrders, 10000); // 10000ms = 10 seconds

    // Cleanup: Stop polling when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Order Status</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id}: {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderStatus;
