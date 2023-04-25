import "./style.css";
import { motion } from "framer-motion";
import Dog from "../../dog.gif"
import CaixaTexto from "../caixa texto";
import { useState } from "react";

export default function FinalScreen() {
    const [x, setX] = useState("0px");
    const [y, setY] = useState("0px");
    const [show, setShow] = useState(false);
  
    function changePosition() {
      // Obtem a largura e a altura da janela do navegador
  
      // Gera uma posição aleatória em pixels
      setX(Math.floor(Math.floor(Math.random() * 1300) - 800));
      setY(Math.floor(Math.floor(Math.random() * 521) - 260));
    }
  return (
    <motion.div
      className="finalScreen"
      initial={{ scale: 0, x: -100 }}
      animate={{ scale: 1, x: 0 }}
    >
          <h1>Obrigado!</h1>
          <img src={Dog} alt="" className="dog"></img>
          <CaixaTexto texto="CANCELAR" onHoverStart={changePosition} x={x} y={y}/>
      </motion.div>
     
  );
}
