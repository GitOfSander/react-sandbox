import axios from 'axios';
import '../config';

const API_URL = global.config.api.url + 'recipe';

const getRecipes = (tags = '') => {
  const params = tags ? { tags: tags.join(',') } : {};
  return axios.get(API_URL, { params });
};

const getRecipe = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createRecipe = (recipe) => {
    return axios.post(API_URL, recipe);
};

const updateRecipe = (id, recipe) => {
    return axios.put(`${API_URL}/${id}`, recipe);
};

const deleteRecipe = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};