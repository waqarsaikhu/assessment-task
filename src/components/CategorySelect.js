import React, { useState, useEffect } from "react";
import { getCategoryList } from "../services/api";

function CategorySelect({ token }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoryList(token);
        setCategories(response.items);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, [token]);

  return (
    <select>
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.displayText}
        </option>
      ))}
    </select>
  );
}

export default CategorySelect;
