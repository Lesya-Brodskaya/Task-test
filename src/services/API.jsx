import axios from "axios";

const BASE_URL = "https://64677a582ea3cae8dc303143.mockapi.io/api/v1/users";

export const fetchUsers = async (page = 1) => {
  const url = `${BASE_URL}?page=${page}&limit=3`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllUsers = async () => {
  const url = `${BASE_URL}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const followUsers = async (id, object) => {
  const url = `${BASE_URL}/${id}`;
  try {
    const response = await axios.put(url, object);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
