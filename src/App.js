
import { useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Routes from './routes/routes';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  const [addProducts, setaddProducts] = useState([]);
  return (
    <div className="bg-slate-700 text-center pb-6 min-h-screen">
      <Router>
        <Navbar add={addProducts} setaddProducts={setaddProducts} />
        <Routes add={addProducts} setaddProducts={setaddProducts} /> 
      </Router>
    </div>
  );
}

export default App;
