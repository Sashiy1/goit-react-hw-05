import axios from "axios";

const ACCESS_KEY = `JwXu3hijmT7CIuPNAh_fO7Fp5CcTZga48jFpqYyc05M`;

export const fetchPhotoByQuery = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      client_id: ACCESS_KEY,
      orientation: "landscape",
      page: page,
      per_page: 4,
    
    },
  });

  return response.data;
};
