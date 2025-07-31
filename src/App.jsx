import DepartmentSelectionPage from "./Components/DepartmentSelectionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DepartmentSelectionPage />} />
          <Route path="/products/:deptName" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
