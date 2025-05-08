import axios from "axios";


console.log("API URL:", process.env.REACT_APP_API_URL);


const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, application/*+json",
  },
  withCredentials: true, 
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("JWT_TOKEN");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Added JWT Token to request headers");
    }
    let csrfToken = localStorage.getItem("CSRF_TOKEN");

    if (!csrfToken) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/csrf-token`,
          { withCredentials: true }
        );
        csrfToken = response.data.token;
        localStorage.setItem("CSRF_TOKEN", csrfToken);
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    }

    if (csrfToken) {
      // Add CSRF token to the request header
      config.headers["X-XSRF-TOKEN"] = csrfToken;
      console.log("Added CSRF token to request headers");
    }

    return config;
  },
  (error) => {
    // Handle any request errors
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default api;
