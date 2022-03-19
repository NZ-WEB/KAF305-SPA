import axios from "axios";

export async function loadNews ({ commit }) {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_SERVER_BASE_URL}/allNews/news`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    commit("setNews", response.data.allNews);
  } catch (error) {
    throw error.response;
  }
}