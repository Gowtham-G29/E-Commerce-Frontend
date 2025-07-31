
import ProductList from "./Components/ProductList";
import { getProducts } from "./Service/Api";

function App() {
  getProducts();
  return (
    <div>
      <div className="flex justify-center items-center text-3xl pt-10 font-bold text-blue-400 font-serif">Products</div>
      <ProductList/>
    </div>
  );
}

export default App;
