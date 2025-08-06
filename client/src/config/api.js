// API 설정
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

console.log("API Base URL:", API_BASE_URL);
