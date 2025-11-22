import { useState } from "react";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import OrderDetails from "../components/OrderDetails";
import "../styles/ordersPage.css";
import ordersMock from "../mocks/orders.mock";

function OrdersPage() {
  
  // mock temporal hasta conectar API
  const [orders, setOrders] = useState(ordersMock);

  // pedido seleccionado
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const handleOrderClick = (id: string) => {
    setSelectedOrderId(id);
  };

  const selectedOrder = orders.find(o => o.id === selectedOrderId) || null;

  return (
    <div className="orders-page-container">

      {/* HEADER */}
      <Header restaurantCode="PH-0001" />

      <div className="orders-content">

        {/* GRID DE PEDIDOS */}
        <div className="orders-grid">
          {orders.map(order => (
            <OrderCard 
              key={order.id}
              order={order}
              onClick={() => handleOrderClick(order.id)}
              isSelected={order.id === selectedOrderId}
            />
          ))}
        </div>

        {/* PANEL DE DETALLES */}
        <div className="order-details-panel">
          {selectedOrder ? (
            <OrderDetails order={selectedOrder} />
          ) : (
            <div className="no-selection">
              <h3>Selecciona un pedido</h3>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default OrdersPage;