export const Login = async (credentials) => {
  const url = "http://localhost:8000/login";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
