import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import AppBar from "./components/AppBar";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const reloadData = () => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  };

  useEffect(() => {
    reloadData();
  }, []);

  return (
    <div className="App">
      <AppBar />
      <Form onSuccess={reloadData} />
      <CardContainer>
        {notes.map((note) => (
          <Note key={`note__${note.id}`} title={note.title}>
            {note.content}
          </Note>
        ))}
      </CardContainer>
    </div>
  );
}

export default App;
