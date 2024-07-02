import axios from 'axios';
import '../config'

const API_URL = global.config.api.url + ''

class RecipeService {
  getRecipes() {
    return axios
      .get(API_URL + "recipe", {
        params: {
          //accessToken: accessToken
        }
      })
      .then(response => {
        return response.data
      })
  }

  updateCategories(data) {
    return axios
      .post(API_URL + "recipes", data)
      .then(response => {
        return response.data
      })
  }
}

export default new RecipeService()