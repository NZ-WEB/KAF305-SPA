/*
export function someAction (context) {
}
*/

import axios from "axios";

export async function loadTopNews({ commit }) {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_SERVER_BASE_URL}/home-page/news`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    commit("setTopNews", response.data.allTopNews);
  } catch (error) {
    throw error.response;
  }
}
