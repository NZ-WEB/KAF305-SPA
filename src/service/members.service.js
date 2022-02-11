import axios from 'axios';
const SERVER_BASE_URL = 'http://localhost:3001';
export default class MembersService {
  async getAll() {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/members`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.members;
    } catch (error) {
      throw error.response;
    }
  }

  async getBySlug(slug) {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/members/${slug}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.members;
    } catch (e) {
      throw e.response;
    }
  }
}
