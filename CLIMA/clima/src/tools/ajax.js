// Encapsulo la llamada. Utilizo axios para hacer la llamada
// ajax: La manera en que hacemos las peticiones asincrónas con JavaScript.
// ajax: Asynchronous JavaScript and XML
// ajax: Petición asincrónica de JavaScript y XML
import axios from 'axios';

export const ajax = async (options) => await axios
  .request(options)
  .then(response => response.data);