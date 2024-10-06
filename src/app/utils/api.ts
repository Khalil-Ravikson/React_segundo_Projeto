import axios from "axios"; // Importa o Axios, uma biblioteca para realizar requisições HTTP
import { Post } from "../types/Post"; // Importa o tipo Post, que deve ser usado para tipar os dados retornados

// Cria uma instância do Axios com a URL base predefinida
const req = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com" // Define a URL base para todas as requisições feitas com essa instância
});

// Função assíncrona para buscar todos os posts
export const getPosts = async(): Promise<Post[]> => {
    const result = await req.get("/posts");  // Faz a requisição GET para "/posts"
    return result.data; // Retorna os dados da resposta (os posts), que já estão em formato JSON
}

// Função assíncrona para buscar um post específico, baseado no ID fornecido
export const getPost = async (id: number): Promise<Post> => {
    const result = await req.get(`/post/${id}`);  // Faz a requisição GET para "/post/{id}", buscando um post específico
    return result.data; // Retorna os dados do post correspondente
}

// Função assíncrona para buscar todos os usuários
export const getUsers = async(): Promise<Post[]> => {
    const result = await req.get("/users");  // Faz a requisição GET para "/users", buscando todos os usuários
    return result.data; // Retorna os dados dos usuários
}
