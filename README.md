<h2> #Challenge React 2023 </h4>

<h3>#Instalacion del entorno</h3>.
1. Ejecutar comandos :<br>
   - git clone https://github.com/antondelu/challenge-react.git <br>
   - npm install <br>
   - npm start .
   <br>

<h3>Login/Acceso :</h3>
   Admin : admin@mevuelo.com <br>
   Invitado : invitado@mevuelo.com 

<h3>APIs : </h3>
Se utiliza API MOCHA <i>https://apimocha.com </i><br>
Se utiliza AXIOS para el consumo.<br>
Se comentan en el codigo los methods de la api como DELETE y POST ya que no permitia interacion visual de cambios.<br>
Se dejan comentados para que se vea el consumo de los endpoints.

<h3>Librerias/Bibliotecas :</h3>
 - react-bootstrap / estilos y componentes <br>
 - react-router-dom / definicion de rutas de navegacion.<br>
 - sweetalert2 ( Plugin ) / Manejo de alertas. 

 <h3>Persistencia de datos :</h3>
 Se utiliza <strong>context</strong> para la persistencia de datos.

 <h3>Preguntas :</h3>
<strong>¿Qué es webpack y para qué sirve? ¿Conoces otras herramientas similares?</strong><br>
Webpack es como su palabra lo refiere un empaquetador.<br>
Te permite tener agrupados archivos JS como también archivos de estilos CSS.<br>
Para graficarlo visualmente seria como agrupar todo en un caja y desplegarlo en la app que uno quiera.<br><br>

<strong>¿Puede explicar brevemente cómo se implementa en React?</strong><br>
Personalmente he usado Rollup. ( https://rollupjs.org/ )<br>
Pero adjunto una guía paso a paso de como instalar y buildear webpack en react.<br>
https://jsramblings.com/creating-a-react-app-with-webpack/ <br><br>

<strong>¿Puede explicar brevemente qué son los hooks? Mencione al menos 3 que haya usado, ejemplifica uno de ellos.</strong><br>
useEffect / useContext / useState <br>
Este ultimo define y actualiza un estado por ejepmplo:<br>
En el sigueinte ejemplo del useState se crear un estado "counter" inicializado en 0 y con
setCounter (funcion para actualizar el estado que acabaos de crear ) se va a ir modificando a medida que hagamos click: <br>

```javascript
import { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter++);
  }
  return (
    <div>
      <p>Contador</p>
      <button onClick={increment}>Sumar</button>
    </div>
  );
};

```




