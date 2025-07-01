import React from 'react';
import { useNotes } from '../contexts/Notecontext';

function InputDialog({ onClose }) {
    const {tags, addnotes} = useNotes();
    const tag_list = [];

    function addingNote(){
        const get_title = document.getElementById('title_name').value;
        if(get_title && tag_list.length > 0) {
            addnotes("", tag_list, get_title);
            document.getElementById('title_name').value = ""; // reset title
        }
    }
    function changetagColor(id){
        const get_tag = document.getElementById(id);
        if (get_tag.classList.contains('bg-gray-400')) {
            get_tag.classList.remove('bg-gray-400');
        } else {
            get_tag.classList.add('bg-gray-400');
        }
    }
  return (
    <>
      <div className="fixed inset-0 bg-black/20  z-40" onClick={onClose}></div>
      <dialog open className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-1/3 max-w-md">
        <h1 className='text-center font-semi-bold text-xl '>Add a Note</h1>
        <form className='m-3'>
            <label htmlFor="NoteTitle" className='mr-3 '>Title</label>
            <input type="text" id='title_name' placeholder='Enter Title' required />
        </form>
        <div className='flex m-3 flex-wrap'>
            {(tags).map((tag)=>(
                <div key={tag} id={tag} className='px-2 m-1 bg-gray-200 rounded-lg text-center text-gray-800 hover:cursor-pointer hover:bg-gray-300'
                onClick={() => {
                    changetagColor(tag);
                    if (!(tag_list.includes(tag))) {
                      tag_list.push(tag);
                    } else {
                      const index = tag_list.indexOf(tag);
                      if (index !== -1) tag_list.splice(index, 1);
                    }
                  }}
                  
                >{tag}</div>
            ))}
        </div>
        <div className='flex justify-between m-3'>
        <button
        onClick={()=> {
            addingNote();
            onClose();
            }}
        className=' w-3/4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Add Note</button>
        <button
          onClick={onClose}
          className=" px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Close
        </button>
        </div>
        
      </dialog>
    </>
  );
}

export default InputDialog;
