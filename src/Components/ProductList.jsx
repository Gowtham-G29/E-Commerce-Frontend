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
      <ProductListCard products={products} />
    </div>
  );
}

export default ProductList;
