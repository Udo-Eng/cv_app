import Register from "./pages/Register/Register";
import DashBoard from "./pages/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
