import axios from "axios";
import { BASE_URL } from "../config/urls";
import Cookies from 'js-cookie';

const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use(
  config => {
    // Adicione aqui a lógica para manipular a configuração de cada requisição
    const token = Cookies.get('erg::#4%&gtreatrbaetrg53df');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
      return config;
    },

    error => {
      // Tratamento de erro para requisições
    return Promise.reject(error);
  }
);

http.interceptors.response.use(

  response => {
      // Manipular respostas bem-sucedidas
    return response;
  },
  error => {
      // Tratamento de erro para respostas
      // Você pode redirecionar para uma página de erro ou exibir uma mensagem
    return Promise.reject(error);
  }
);
  
export default http;