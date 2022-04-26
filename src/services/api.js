// Fichero src/services/api.js
const callToApi = async () => {
  const URL_API = `https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json`;

  // Llamamos a la API
  const response = await fetch(`${URL_API}`);
  const data = await response.json();

  // Cuando responde la API podemos limpiar los datos aquí
  const result = data;

  return result;
};

export { callToApi };
