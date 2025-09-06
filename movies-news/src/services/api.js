import axios from "axios";

const API_URL = ""; // Replace with actual API

export const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching the news:", error);
    return [];
  }
};