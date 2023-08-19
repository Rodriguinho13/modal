import React, { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleModal = () => {
    setisOpen(!isOpen);
  }
  
  return (
    <div className="container">
      <h2>React Js Modal</h2>
      <button onClick={handleModal}>Abrir Modal</button>
      <Modal isOpen={isOpen}>
        <button onClick={handleModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
};


export default App;
