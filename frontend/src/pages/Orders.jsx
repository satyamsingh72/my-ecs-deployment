import { useEffect, useState } from "react";
import { orderApi } from "../api/api";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    orderApi
      .get("/orders")
      .then((response) => {
        setOrders(response.data);
      });

  }, []);

  return (
    <div>

      <h1>Orders</h1>

      {orders.map((order) => (
        <p key={order.id}>
          Order #{order.id}
        </p>
      ))}

    </div>
  );
}

export default Orders;