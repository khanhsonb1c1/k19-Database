import axios from "axios";

const base_url = "https://api.tomonisolution.com";
// const base_url = "https://api-dev.tomonisolution.com";

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    "Accept-Language": "vi",
  },
});

const getTopProduct = () => {
  return axiosInstance.get(`${base_url}/api/top-products-for-sale`);
};

const getProductList = (params: object) => {
  return axiosInstance.get(`${base_url}/api/products`, { params });
};

const getProductDetail = (id: string, params: object) => {
  return axiosInstance.get(`${base_url}/api/products/${id}`, { params });
};

const getCheckCodeInfo = (id: string, params: object) => {
  return axiosInstance.get(`${base_url}/api/anti-counterfeiting-stamps/${id}`, { params });
};

const checkCode = (id: string) => {
  return axiosInstance.post(`${base_url}/api/anti-counterfeiting-stamps/check/${id}`);
};
const getReviews = (product_id: string) => {
  return axiosInstance.get(`${base_url}/api/product-reviews&filter[product_id]=${product_id}`);
};

export { getTopProduct, getProductList, getProductDetail, getCheckCodeInfo, checkCode, getReviews };
