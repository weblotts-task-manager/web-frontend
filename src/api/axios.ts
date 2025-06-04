import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:5001/gateway/api/`,
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    if (config.url?.includes("refresh-token")) {
      // console.log("Frontend log:", config);
      return config;
    }

    const auth = localStorage.getItem("auth") || "{}";
    console.log(JSON.parse(auth));
    if (auth !== "{}") {
      const { token, refreshToken: refToken } = JSON.parse(auth);
      if (isTokenExpired(token)) {
        const tkn = await refreshToken(refToken);
        config.headers.Authorization = `Bearer ${tkn}`;
        console.log("Expired token", tkn);
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // console.log(token);
      // if (isTokenExpired(token)) {
      //   const tkn = await refreshToken(refToken);
      //   config.headers.Authorization = `Bearer ${tkn}`;
      // } else {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      localStorage.removeItem("auth");
      window.location.reload();
    }
  }
);

function isTokenExpired(token: string): boolean {
  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));
    return decoded.exp * 1000 < Date.now();
  } catch {
    return false;
  }
}

async function refreshToken(refreshToken: string): Promise<string | null> {
  // Implement your token refresh logic
  try {
    const { data } = await api.post("/auth/refresh-token", { refreshToken });
    console.log("Check token", data);
    // store.dispatch(refreshTokenAction(data));
    window.localStorage.setItem(
      "auth",
      JSON.stringify({
        token: data.accessToken,
        refreshToken: data.refreshToken,
      })
    );
    return "res";
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export default api;
