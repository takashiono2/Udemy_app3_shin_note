import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid'

function App() {
  //キーをnotesとして、localStorageから初期値をとってくる。もしくはなければ、[]とする
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(false);

  //notesが更新される時、loacalStorageに保存する、キーはnotesとする。
  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);

  useEffect(()=>{
    if (notes.length !== 0) setActiveNote(notes[0].id);
  },[]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "",
      modDate: Date.now()
    }
    setNotes([...notes, newNote]);
  }

  const onDeleteNote = (id) =>{
    const filterNotes = notes.filter((note)=>note.id!== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () =>{
    return notes.find((note)=> note.id === activeNote );
  }

  const onUpdateNote = (updatedNote) => {
    const updateNotesArray = notes.map((note)=>{
      if(note.id === updatedNote.id){
        return updatedNote;
      }else{
        return note;
      }
    });
    setNotes(updateNotesArray);
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
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  )
}

export default App;
