import React, { useState } from "react";
import { createProduct } from "../services/api";

function ProductForm({ token }) {
  const [productSubCategoryCode, setProductSubCategoryCode] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(token, { productSubCategoryCode, productCategoryId });
      // Reset form after successful submission
      setProductSubCategoryCode("");
      setProductCategoryId("");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Subcategory Code"
        value={productSubCategoryCode}
        onChange={(e) => setProductSubCategoryCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Category Id"
        value={productCategoryId}
        onChange={(e) => setProductCategoryId(e.target.value)}
      />
      <button type="submit">Create Product</button>
    </form>
  );
}

export default ProductForm;
