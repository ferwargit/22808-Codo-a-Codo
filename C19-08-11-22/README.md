# Node
En React escribimos en JSX pero al final se compila y el navegador lee html, css y javascript. Entonces si nosotros queriamos levantar el servidor o trabajar o ver archivos por consola, anteriormente siempre necesitabamos del navegador, por que el nevegador tenia un motor que traducia javascript. Cada Navegador tiene su motor. Por ejemplo el motor V8 de Google Chrome. Para que sirve? Para poder traducir y poder trabajar con javascript.  
Los primeros ejercicios los trabajabamos con el `document.write` para poder verlo, que sea mas grafico en el navegador y despues empezamos a verlo por consola y tilizando el console.log, evitavamos el navegador y veíamos por consola, sin querer estábamos trabajando con node sino iba haber muchas cosas que no hibamos a poder utilizar.  
NODE sirve para poder trabajar con javascript del lado del servidor sin necesidad del navegador. Esta armado a partir del motor V8 de Google Chrome.
Haciendo referencia a console.log, el metodo log es una funcion dentro de un objeto. Todo es un objeto. Vamos a trabajar con las funcionalidades de Node.
# Versión de Node
```
>node -v
v16.17.0
```
Si tengo Node tengo npm que me sirve para instalar los módulos.
Hablamos de modularizacion. Exportamos la funcion para poder importarla en otra parte de mi proyecto. Lo profundizamos con los componentes. Un código tiene que estar modularizado.  
Como trabajo con los módulos en react, exporto por defecto o exporto la funcion y la importo en el otro bloque de código. Cuando inicializo un proyecto en react me trae un archivo.json que es la configuración del proyecto pero ya biene configurado por react.  
Ahora si trabajo con puro Node sin ningun extra de configuración, NO puedo utilizar el import.  
frutas.js
```javascript
const frutas = ["banana", "banana", "pera", "banana"];

export default frutas;
```
app.js
```javascript
import frutas from "./frutas";

console.log(frutas);
```
Me da error, no puedo usar el import.
```
D:\22808-Codo-a-Codo\22808-Codo-a-Codo\C19-08-11-22\node>node app.js
(node:7072) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs
extension.
(Use `node --trace-warnings ...` to show where the warning was created)
D:\22808-Codo-a-Codo\22808-Codo-a-Codo\C19-08-11-22\node\app.js:1
import frutas from "./frutas";
^^^^^^

SyntaxError: Cannot use import statement outside a module
```
Node no utiliza por defecto esta metodología de importación y exportación.
Para poder importar tengo que modificar el archivo package.json y decirle **set "type": "module"**

frutas.js
Exportación por defecto de Node
```javascript
const frutas = ["banana", "banana", "pera", "banana"];

module.exports = frutas;

// export default frutas;
```
app.js
Requerimiento por defecto de Node
```javascript
// import frutas from "./frutas";

const frutas = require("./frutas");

console.log(frutas);
```
ejecuto node app.js
```
D:\22808-Codo-a-Codo\22808-Codo-a-Codo\C19-08-11-22\node>node app.js
[ 'banana', 'banana', 'pera', 'banana' ]
```
React ya viene con el archivo package.json modificado para poder utilizar el export y el import. Para utilizar en el backend el export y el import tengo que modificar el archivo package.json que trae la configuracion de mi proyecto.
Para tener el package.json tengo que **inicializar** un proyecto, ¿como se inicializa un proyecto en Node?
```
>npm init
```
Me arma el proyecto pero me va a empezar a preguntar
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node)
version: (1.0.0)
description: primer servidor node
entry point: (app.js)
test command:
git repository:
keywords:
author: ferchu
license: (ISC)
About to write to D:\22808-Codo-a-Codo\22808-Codo-a-Codo\C19-08-11-22\node\package.json:

{
  "name": "node",
  "version": "1.0.0",
  "description": "primer servidor node",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "ferchu",
  "license": "ISC"
}


Is this OK? (yes) y

D:\22808-Codo-a-Codo\22808-Codo-a-Codo\C19-08-11-22\node>
```
Se crea el archivo package.json
```json
{
  "name": "node",
  "version": "1.0.0",
  "description": "primer servidor node",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "ferchu",
  "license": "ISC"
}
```
Aquí es donde tengo que hacer la modificación para poder trabajar con import.
Lo puedo armar sin que me pregunte, le decimos a todo yes
```
>npm init -y
```
```
Wrote to D:\22808-Codo-a-Codo\22808-Codo-a-Codo\C19-08-11-22\node\package.json:

{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
Completo con el type
```json
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
Ahora ya puedo trabajar con import y export