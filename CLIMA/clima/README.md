Video: <https://www.youtube.com/watch?v=A3SOd0c7a9s>

# Inicio Aplicación CLIMA  

```node
>npx create-react-app clima
```

```node
>cd clima
```

```node
>npm start
```

## Construimos App.jsx  

rfc (reactFunction)

```jsx
import React from 'react';

const App = () => {
  return (
    <div>
      
    </div>
  );
}

export default App;
```

## Flujo APIs

Endpoints para consumir un listado completo de países. Me trae todos los países que existen en el mundo. Es gratuita. No se necesita API_KEY.
<https://restcountries.com/>
<https://restcountries.com/v3.1/all>  

En función de esta API que me da el país, me voy a traer la ciudad.
<https://spott.p.rapidapi.com/places?limit=100&country=MX&type=CITY>

Y finalmente cuando tenga la ciudad, me interesa traerme el clima.
<http://api.openweathermap.org>

## Creo carpeta tools

Dentro creo el archivo ajax.js y dentro voy a encapsular las llamadas utilizando axios.
Antes tengo que instalar axios.

```node
>npm i axios
```

## Creo carpeta services

Para los servicios que me van a permitir consumir las diferentes APIs

Video 1:05
