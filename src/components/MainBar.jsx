import React, { useState } from 'react'
import { useNotes } from '../contexts/Notecontext.js';
import { useView } from '../contexts/Viewcontext.jsx';
import NoteCard from '../utils/NoteCard.jsx';
import InputDialog from '../utils/InputDialog.jsx';
function MainBar() {
  const {tags,addnotes, notes} = useNotes();
  const {notesID, changeNotesId, activeFilter } = useView();
  const [showDialog, setShowDialog] = useState(false);
  let display_list = [];
  function generate_display_list(){
   if(activeFilter==="All Notes"){
    display_list = notes
   }else{
    const arr = [];
    for(let i =0; i<notes.length; i++){
      if((notes[i].tags).includes(activeFilter)){
        arr.push(notes[i]);
      }
    }
    display_list = arr;
   }
   
  }
  generate_display_list();

  return (
    <div className=' col-span-1 max-h-screen  border-r-1 border-gray-200 '>
      <div className='  p-3 m-3 text-3xl font-semibold'>
        {activeFilter}
      </div>
      <div className='flex justify-center items-center'>
        <button 
        onClick={()=>(
          setShowDialog(true)
        )}
        className='bg-blue-600 w-5/6 p-2  text-white font-semibold rounded-lg  hover:bg-blue-700 hover:cursor-pointer'>+ Create New Note</button>
      </div>
      <div>
      {showDialog && <InputDialog onClose={() => setShowDialog(false)} />}
      </div>
      
      <div>
        {display_list.map((list_item)=>(
          <NoteCard note={list_item}/>
        ))}
      </div>
    </div>
  )
}

export default MainBar