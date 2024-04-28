import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/api";

function ProductList({ token }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts(token);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [token]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.productSubCategoryCode} - {product.productCategoryId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
