import axios from "axios";
import React from "react";
import "./index.css";
import Button from "../Button";

export default function Form(props) {
  const [titulo, setTitulo] = React.useState("");
  const [conteudo, setConteudo] = React.useState("");

  const handleTitleChanged = (event) => {
    setTitulo(event.target.value);
  };

  const handleContentChanged = (event) => {
    setConteudo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/notes/", {
        title: titulo,
        content: conteudo,
      })
      .then(() => {
        setTitulo("");
        setConteudo("");
        props.onSuccess();
      });
  };

  return (
    <form className="form-card">
      <input
        placeholder="Título"
        className="form-card-title form-card-input"
        type="text"
        onChange={handleTitleChanged}
      />
      <textarea
        onChange={handleContentChanged}
        placeholder="Conteúdo"
        className="form-card-input"
      />
      <Button onClick={handleSubmit}>Criar</Button>
    </form>
  );
}
