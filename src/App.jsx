import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState([]);
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

  return(
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote}/>
      <Main />
    </div>
  )
}

export default App;
