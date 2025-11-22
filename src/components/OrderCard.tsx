import "../styles/orderCard.css";

interface Order {
  id: string;
  customerName: string;
  address: string;
  items: string[];
  status: string;
}

interface Props {
  order: Order;
  onClick: () => void;
  isSelected: boolean;
}

function OrderCard({ order, onClick, isSelected }: Props) {

  return (
    <div 
      className={`order-card ${isSelected ? "selected" : ""}`} 
      onClick={onClick}
    >
      <h3 className="order-title">Pedido #{order.id}</h3>

      <p className="order-customer">
        Cliente: <strong>{order.customerName}</strong>
      </p>

      <p className="order-status">
        Estado: <strong>{order.status}</strong>
      </p>

      <p className="order-items-label">Items:</p>

      <ul className="order-items-list">
        {order.items.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

    </div>
  );
}

export default OrderCard;