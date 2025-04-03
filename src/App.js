import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register"; // ✅ Import Register page
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Add Register Route */}
      </Routes>
    </Router>
  );
}

export default App;
