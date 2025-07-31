import { useEffect, useState } from "react";
import { getProducts } from "../Service/Api";
import ProductListCard from "./ProductListCard";

function ProductList() {
  const [products, setProduct] = useState([]);

  const getProductsList = async () => {
    try {
      const response = await getProducts();
      setProduct(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center text-3xl pt-10 font-bold text-blue-400 font-serif">
        Products
      </div>
      <ProductListCard products={products} />
    </div>
  );
}

export default ProductList;
