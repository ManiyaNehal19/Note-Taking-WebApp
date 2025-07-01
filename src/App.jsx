import { useEffect, useState } from 'react'
import './App.css'
import { NoteProvider } from './contexts/Notecontext.js';
import { ViewProvider } from './contexts/Viewcontext.jsx';
import Sidebar from './components/Sidebar';
import MainBar from './components/MainBar';
import NotesPanel from './components/NotesPanel';

function App() {
  const [notes, setnotes] = useState([]);
  const [tags, settags] = useState([]);
  const addTag = (tagname)=>{
    settags((prev)=>(
      prev.includes(tagname)?prev:[...prev, tagname]
    ));
  }
  const addnotes = (note, tag, title)=>{
    setnotes((prev)=>[...prev, {id:Date.now(), tags:tag, title: title, content: note}])
  }
  const deletenote = (id) => {
    setnotes((prev) => prev.filter((note) => note.id !== id));
  };
  const updatenote = (id, updated_note) => {
    setnotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, content: updated_note } : note
      )
    );
  };
  

  return (
    <NoteProvider value={{notes,tags, addTag, addnotes, deletenote, updatenote}}>
      <ViewProvider>
        <div className='h-screen w-screen grid grid-cols-5'>
          <Sidebar/>
          <MainBar/>
          <NotesPanel/>
        </div>
      </ViewProvider>
    </NoteProvider>
    )
}

export default App
