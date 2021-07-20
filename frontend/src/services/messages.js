export const getAll = async () => {
  const url = "http://localhost:8000/message";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
