export function getBaseUrl() {
  return process.env.REACT_APP_BASE_URL;
}

export function getToken() {
  return localStorage.getItem("token");
}
