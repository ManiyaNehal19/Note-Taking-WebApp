import React from 'react'
import { useView } from '../contexts/Viewcontext'

function NoteCard({note}) {
  const {changeNotesId, notesID} = useView();
  console.log(notesID);
  return (
    <div 
    id = {note.id}
    onClick = {
      ()=> changeNotesId(note.id)
    }
    className='border-b-1 border-gray-200 flex flex-col justify-between m-3 p-2 hover:bg-gray-200 rounded-lg'>
        <h2 className='font-semibold text-lg mb-1'>{note.title}</h2>
        <div className='flex'>
            {(note.tags).map((tag)=>(
                <div key={tag} className='px-2 bg-gray-200 rounded-lg text-center text-gray-800 mr-1'>{tag}</div>
            ))}
        </div>
    </div>
  )
}

export default NoteCard