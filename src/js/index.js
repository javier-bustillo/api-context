/* PROPORCIONAMOS EL CONTEXTO */

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import your own components
import Home from "./component/home.jsx";

// importamos el componente UserProvider
import UserProvider from "./store/appContext.js";



//render your react application
ReactDOM.render(
  // UserProvider envuelve la aplicación raíz <Home /> para que pueda "heredar" el contexto creado
  // Toda la aplicacion puede acceder a los datos proporcionados por el contexto
  <UserProvider>
    <Home />
  </UserProvider>,
  document.querySelector("#app")
);
