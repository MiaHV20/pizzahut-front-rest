import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/pizzahutlogo.jpg";

interface HeaderProps {
  restaurantCode: string;
}

function Header({ restaurantCode }: HeaderProps) {

  const navigate = useNavigate();

  const goToHistory = () => {
    navigate("/history");
  };

  return (
    <header className="header-container">

      <div className="header-left">
        <img src={logo} className="header-logo" />
      </div>

      <div className="header-center">
        <h2 className="header-code">{restaurantCode}</h2>
      </div>

      <div className="header-right">
        <button className="history-btn" onClick={goToHistory}>
          Historial de pedidos
        </button>
      </div>

    </header>
  );
}

export default Header;