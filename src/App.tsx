import { Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OrdersPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;