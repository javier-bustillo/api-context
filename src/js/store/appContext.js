/* CREAMOS EL CONTEXTO */

import React, { useState, createContext } from "react";

export const Context = createContext(null);
/* creamos el contexto */
const UserProvider = ({ children }) => { /* children, props por defecto de UserProvider( ) */
  const [state, setState] = useState("no hay color");
  return (
    /* seteamos a todos los hijos de aplicacion con el valor de Context.Provider */
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider> /* pasamos el objeto {state, setState} */
  ); 
};

/* exportamos el contexto */ 
export default UserProvider;
