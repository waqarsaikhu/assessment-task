const BASE_URL = "https://demo.jinnahtechnologies.com/api";

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/TokenAuth/Authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: true,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();
  return data.result.accessToken;
};
export const createProductSubCategory = async (token, productData) => {
  const response = await fetch(
    `${BASE_URL}/services/app/ProductSubCategory/Create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create product sub-category");
  }
};

export const updateProductSubCategory = async (token, productData) => {
  const response = await fetch(
    `${BASE_URL}/services/app/ProductSubCategory/Update`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update product sub-category");
  }
};

export const getProductSubCategoryById = async (token, id) => {
  const response = await fetch(
    `${BASE_URL}/services/app/ProductSubCategory/GetProductSubCategoryForEdit?id=${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get product sub-category");
  }
  const data = await response.json();
  return data;
};

export const getAllProductSubCategories = async (token) => {
  const response = await fetch(
    `${BASE_URL}/services/app/ProductSubCategory/GetAll`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get all product sub-categories");
  }
  const data = await response.json();
  return data;
};

export const getCategoryList = async (token) => {
  const response = await fetch(
    `${BASE_URL}/services/app/ProductCategory/GetProductCategoryComboList`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get category list");
  }
  const data = await response.json();
  return data.items;
};

export const deleteProductSubCategory = async (token, id) => {
  const response = await fetch(
    `${BASE_URL}/services/app/ProductSubCategory/Delete?id=${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to delete product sub-category");
  }
};
