import Navbar from "./components/common/Navbar";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cart.context";

function App() {
  return (
    <CartProvider>
      <div className="bg-slate-700 text-center pb-6 min-h-screen">
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
