import axios from "axios";

const ACCESS_KEY = `JwXu3hijmT7CIuPNAh_fO7Fp5CcTZga48jFpqYyc05M`;



export const requestPhotoByQuery = async (query) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: query,
          client_id: ACCESS_KEY 
        }
      });
  
      return response.data;
};