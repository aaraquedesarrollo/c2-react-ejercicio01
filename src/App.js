import { useState } from "react";

function App() {
  const [topGlobo, setTopGlobo] = useState(
    Math.floor(Math.random() * window.innerHeight)
  );
  const [leftGlobo, setLeftGlobo] = useState(0);
  const [puntos, setPuntos] = useState(0);
  let timer;

  const randomPosition = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTopGlobo(Math.floor(Math.random() * window.innerHeight));
      setLeftGlobo(Math.floor(Math.random() * window.innerWidth));
    }, 300);
  };

  const anyadirPunto = () => {
    setPuntos(puntos + 1);
  };

  return (
    <>
      <p>
        Marcador <span>{puntos}</span>
      </p>
      <i
        className="icono fab fa-fly"
        onMouseOver={randomPosition}
        onClick={anyadirPunto}
        style={{ top: topGlobo, left: leftGlobo }}
      ></i>
    </>
  );
}

export default App;
