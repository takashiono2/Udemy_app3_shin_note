import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNotes = {
      id: uuid(),
      title: "新しいノート",
      content: "新しい内容",
      modDate: Date.now()
    }
    setNotes([...notes, newNotes]);
  }

  const onDeleteNote = (id) =>{
    const filterNotes = notes.filter((note)=>note.id!== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () =>{
    return notes.find((note)=> note.id === activeNote );
  }


  return(
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()}/>
    </div>
  )
}

export default App;
