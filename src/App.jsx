import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Queries from "./pages/Queries";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-query" element={<Query />} />
        <Route path="/react-queries" element={<Queries />} />
      </Routes>
    </div>
  );
}

export default App;
