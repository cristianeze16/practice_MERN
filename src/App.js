import "./App.css";
import NombreFoto from "./components/NombreFoto";
import CampoConArray from "./components/CampoConArray";
import Flechita from "./components/Flechita";
import data from "./data/datos";
import { useState } from "react";
function App() {
  console.log(data[0].image)
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [numeroAcambiar, setNumeroAcambiar] = useState(0);

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    // console.log(mostrarOcultar);
  };

  let next = () => {
    if (numeroAcambiar < data.length - 1) {
      setNumeroAcambiar(++numeroAcambiar);
    } else {
      setNumeroAcambiar(0);
    }
  };
  let prev = () => {
    if (numeroAcambiar > 0) {
      setNumeroAcambiar(--numeroAcambiar);
    } else {
      setNumeroAcambiar(data.length - 1);
    }
  };


  return (
    <div className="card black">
      <NombreFoto
        nombre={data[numeroAcambiar].category}
        foto={data[numeroAcambiar].image}
      />
      {mostrarOcultar ? (
        <>
          <p className="gray flex j-center a-center" onClick={hide}>
            ocultar info
          </p>

          <div className=" flex j-center a-center">
            <p className="j-center a-center">
              {data[numeroAcambiar].name}
            </p>
            <p className=" white ">
              description:{data[numeroAcambiar].description}
            </p>
          </div>
        </>
      ) : (
        <p className="gray flex j-center a-center" onClick={hide}>
          Mostrar info
        </p>
      )}

      <div className=" flex j-center a-center d-row">
        <Flechita verbo="Anterior" estilo="r25" click={prev} />
        <Flechita verbo="Siguiente" estilo="l25" click={next} />
      </div>
    </div>
  );
}

export default App;
