import api from "./api";

export const fetchTests = async () => {
  try {
    const response = await api?.get("/tests");
    if (response?.status === 200) {
      return response?.data;
    } else {
      throw new Error(`Request failed with status ${response?.status}`);
    }
  } catch (error) {
    console?.error("Error fetching tests:", error);
    throw error;
  }
};
