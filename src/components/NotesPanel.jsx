import React, { useState, useEffect } from 'react';
import { useView } from '../contexts/Viewcontext.jsx';
import { useNotes } from '../contexts/Notecontext.js';

function NotesPanel() {
  const { notesID } = useView();
  const { notes, updatenote, deletenote } = useNotes();

  const note_display = notes.find(note => note.id === notesID) || {
    title: "",
    content: "",
    tags: []
  };

  const [content, setContent] = useState(note_display.content);
  const [showSaved, setshowSaved] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);


  useEffect(() => {
    setContent(note_display.content);
  }, [note_display]);

  return (
    <div className='col-span-3 h-screen grid grid-cols-4 '>
      <div className='col-span-3 flex flex-col border-r-1 border-gray-200 '>
        <div className='p-3 m-3 text-3xl font-semibold border-b border-gray-200'>
          {note_display.title}
        </div>

        <div className='flex m-3'>
          {note_display.tags.map((tag) => (
            <div
              key={tag}
              className='px-2 bg-gray-200 rounded-lg text-center text-gray-800 mr-1'
            >
              {tag}
            </div>
          ))}
        </div>

        <div className='flex-grow m-3 border-t-1 border-gray-200'>
          <form className='h-full'>
            <textarea
              className='w-full h-full resize-none rounded-lg p-2 outline-none'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </form>
        </div>
      </div>

      <div className='col-span-1 p-2 space-y-2'>
        <button 
        onClick={()=>{
          updatenote(notesID, content)
          setshowSaved(true);
          setTimeout(() => {
            setshowSaved(false);
          }, 2000);
          
          
        }}
        className='px-4 py-1 w-full bg-blue-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-700'>
          Save
        </button>
        <button
        onClick={()=>{
          deletenote(notesID)
          setshowDeleted(true);
          setTimeout(() => {
            setshowDeleted(false);
          }, 2000);
        }}
        className='px-4 py-1 w-full bg-red-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-red-700'>
          Delete
        </button>
      </div>
      {showSaved && (
  <div className='fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300'>
    Saved ✅
  </div>
)}
{ showDeleted&&<div className='fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300'>
Deleted ❌
  </div>}

    </div>
  );
}

export default NotesPanel;
