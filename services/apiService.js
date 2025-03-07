import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo las tareas:", error);
    throw error;
  }
};

export const getTodoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo la tarea con ID ${id}:`, error);
    throw error;
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await axios.post(API_URL, todo);
    return response.data;
  } catch (error) {
    console.error("Error creando la tarea:", error);
    throw error;
  }
};

export const updateTodo = async (id, updates) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error(`Error actualizando la tarea con ID ${id}:`, error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error eliminando la tarea con ID ${id}:`, error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los usuarios:", error);
    throw error;
  }
};
