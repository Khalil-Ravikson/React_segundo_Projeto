import { useQuery } from "@tanstack/react-query"; // Importa o hook useQuery do React Query para gerenciamento de requisições
import { getPost, getPosts } from "./api"; // Importa as funções getPosts e getPost, que fazem as requisições HTTP

// Hook customizado para buscar todos os posts
export const usePosts = () => {
    // useQuery realiza a requisição para buscar os posts
    const query = useQuery({
        queryKey: ['posts'], // queryKey é usado para identificar essa query, o que é útil para cache e refetch
        queryFn: getPosts // queryFn define qual função será chamada para buscar os dados (nesse caso, getPosts que faz a requisição HTTP)
    });
    
    return query; // Retorna o resultado da query, que contém o status e os dados
}

// Hook customizado para buscar um post específico pelo ID
export const usePost = (id: number) => 
    // Chama o useQuery passando a key e a função para buscar um post específico
    useQuery({
        queryKey: ['post', id], // A queryKey inclui o ID para identificar a busca de um post específico, útil para cache de posts individuais
        queryFn: () => getPost(id) // queryFn chama a função getPost, que faz a requisição passando o ID do post
    });
