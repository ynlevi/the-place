import config from "../config";
const fetchDataFromStrapi = async (endpoint) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-cache",
  };

  const request = await fetch(`${config.api}${endpoint}`, reqOptions);
  const response = await request.json();
  return response.data;
};
export default fetchDataFromStrapi;
