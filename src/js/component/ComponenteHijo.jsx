import React, { useContext } from "react"; // #utilizamos el contexto con useContext
import { Context } from "./store/appContext"; // #importamos el contexto

// componente hijo de Home
// no pasamos props desde el padre
const ComponenteHijo = () => { 
    // #utilizamos el contexto creado
    //  @llamada al hook useContext y pasamos el contexto como valor
    //  @destructuring de objeto {setState} que se encarga de setear el objeto inicial
    //  y state como valor inicial 'no hay color'
    //  @Context viene definida e IMPORTADA de appContext
   
    const { setState } = useContext(Context);
   

  return (
    <div className="row px-5 py-3 mx-5 mb-2" style={{ background: "#f99595" }}>
      <div className="col-lg-6">
        <h1>Componente 1</h1>
      </div>
      <div className="col-lg-6">
        {/* calling the setter exposed by context */}
        {/*onClick activa una funcion que va a actualizar con un valor*/}
        <button
          style={{ background: "#ff5d5d" }}
          onClick={() => setState("Rosa")}
          className="btn"
        >
          Cambiar
        </button>
      </div>
    </div>
  );
};
// exportamos el componente
export default ComponenteHijo;
