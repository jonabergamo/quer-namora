import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import CaixaTexto from "./components/caixa texto";
import { useState } from "react";
import FinalScreen from "./components/FinalScreen";

function App() {
  const [x, setX] = useState("0px");
  const [y, setY] = useState("0px");
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});

  function changePosition() {
    // Gera uma posição aleatória em pixels
    setX(Math.floor(Math.floor(Math.random() * 1300) - 800));
    setY(Math.floor(Math.random() * 401) - 200);
    setStyle({ "--heigh": "300px", "--width": "300px" });
  }

  return (
    <div className="App">
      <AnimatePresence>{show ? <FinalScreen /> : null}</AnimatePresence>

      <motion.div className="title-question">
        <h1>Liberar mais cedo hoje?</h1>
      </motion.div>
      <div className="botoes">
        <CaixaTexto
          texto="SIM"
          onClick={() => {
            setShow(true);
          }}
        />
        <CaixaTexto
          texto="NÃO"
          onHoverStart={changePosition}
          x={x}
          y={y}
          style={style}
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
    </div>
  );
}

export default App;
