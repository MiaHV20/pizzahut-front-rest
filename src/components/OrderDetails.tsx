import "../styles/orderDetails.css";

interface Order {
  id: string;
  customerName: string;
  address: string;
  items: string[];
  status: string;
}

interface Props {
  order: Order;
}

function OrderDetails({ order }: Props) {
  return (
    <div className="order-details-container">

      <h2 className="details-title">
        Pedido #{order.id}
      </h2>

      <div className="details-section">
        <p><strong>Cliente:</strong> {order.customerName}</p>
        <p><strong>Dirección:</strong> {order.address}</p>
        <p><strong>Estado actual:</strong> {order.status}</p>
      </div>

      <div className="details-section">
        <h3>Items</h3>
        <ul className="details-items">
          {order.items.map((i,index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="details-buttons">

        <button className="status-btn cooking">
          Iniciar preparación
        </button>

        <button className="status-btn packed">
          Finalizar preparación
        </button>

        <button className="status-btn delivered">
          Pedido entregado
        </button>

      </div>

    </div>
  );
}

export default OrderDetails;