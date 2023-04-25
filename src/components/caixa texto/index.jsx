import "./style.css";
import { motion } from "framer-motion";

export default function CaixaTexto(props) {
  return (
    <>
      <motion.div
        className="botaoTexto"
        onHoverEnd={props.onHoverStart}
        onHoverStart={props.onHoverStart}
        animate={{ x: props.x, y: props.y }}
        whileHover={{ scale: 1.1 }}
        exit={{ x: props.x, y: props.y }}
        transition={{ type: "spring", duration: 0.00001, stiffness: 300 }}
        style={props.style}
      >
        <motion.div
          className="box-texto"
          onClick={props.onClick}
          onHoverEnd={props.onHoverStart}
          onHoverStart={props.onHoverStart}
        >
          <h3>{props.texto}</h3>
        </motion.div>
      </motion.div>
    </>
  );
}
