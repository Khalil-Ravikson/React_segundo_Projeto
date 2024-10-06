"use client" // Indica que este componente é um componente de cliente no Next.js

import { useQuery } from "@tanstack/react-query"; // Importa o hook useQuery da biblioteca React Query para gerenciar requisições de dados
import { Post } from "./types/Post"; // Importa o tipo Post para garantir que os dados estejam tipados corretamente
import axios from "axios";

import { usePost, usePosts } from "./utils/querry";

// Definição do componente Home
export default function Home() {

  // Executa uma query para buscar os posts usando React Query e com fetch 
  const post = usePosts();
  const onePost  = usePost(10);

  onePost.isLoading ?? true;

  const query2 = useQuery({
    queryKey: ['posts'], // 'queryKey' identifica essa query, útil para cache e refetch
    queryFn: async (): Promise<Post[]> => { // Define a função que busca os dados, retornando uma Promise de um array de Post
      const results = await axios.get("https://jsonplaceholder.typicode.com/posts"); // Faz a requisição usando Axios para buscar os posts da API
      return results.data; // Aqui, results.data contém o corpo da resposta, que já está em formato JSON
    }
  });

  // Renderiza o componente
  return (
    <div className="container mx-auto font-[family-name:var(--font-geist-sans)]"> {/* Contêiner principal com classes para estilização */}
      <div className="text-white"> {/* Div para o texto, configurada para ser branca */}
        Olá, mundo {/* Texto de saudação */}
        <h1>{post.isLoading ? "Loading..." : "Loading complete"}</h1> {/* Condicional para exibir o status de carregamento */}
        <ul> {/* Lista para os posts */}
          {post.data?.map((posts) => ( // Mapeia os dados da query, se disponíveis
            <li key={posts.id}> {/* Cada item da lista deve ter uma chave única */}
              <h1 className="text-green-500 ml-2">{posts.id}</h1> {/* Exibe o ID do post em verde */}
              <h1 className="ml-2">{posts.title}</h1> {/* Exibe o título do post */}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-red-600"> {/* Div para o texto, configurada para ser vermelha */}
        Olá, mundo {/* Texto de saudação */}
        <h1>{query2.isLoading ? "Loading..." : "Loading complete"}</h1> {/* Condicional para exibir o status de carregamento */}
        <ul> {/* Lista para os posts */}
          {query2.data?.map((post) => ( // Mapeia os dados da query, se disponíveis
            <li key={post.id}> {/* Cada item da lista deve ter uma chave única */}
              <h1 className="text-green-500 ml-2">{post.id}</h1> {/* Exibe o ID do post em verde */}
              <h1 className="ml-2">{post.title}</h1> {/* Exibe o título do post */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
