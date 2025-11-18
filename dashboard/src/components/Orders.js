// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { orders } from "../data/data"; // ✅ import from data.js

const Orders = () => {
  const [allOrders, setAllOrders] = useState(orders);

  // If no orders exist, show the old message
  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  // Otherwise, show all orders in a table
  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Symbol</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.symbol}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td
                  className={order.type === "BUY" ? "buy" : "sell"}
                  style={{
                    color: order.type === "BUY" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.type}
                </td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
