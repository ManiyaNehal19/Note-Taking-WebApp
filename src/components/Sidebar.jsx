import React from 'react'
import { useNotes } from '../contexts/Notecontext'
import Logo from '../assets/Logo.png'
import home from '../assets/home_7955459.png'
import  arrow from '../assets/arrow_15064512.png'
import plus from '../assets/icons8-plus.svg'
import { useView } from '../contexts/Viewcontext';
import TagCard from '../utils/TagCard'
function Sidebar() {
    const {tags, addTag} = useNotes();
    const {changeActiveFilter} = useView();
    function changeFormStatus(){
        const form = document.getElementById("form");
        if(form.classList.contains("hidden")){
            form.classList.remove("hidden");
        }else{
            form.classList.add("hidden");
        }
    }
  return (
    <div
    className='col-span-1 max-h-screen  grid grid-rows-12 border-r-1 border-gray-200 '>
        <div >
            <img src={Logo} className='row-span-1 '/>
        </div>
        <div className='row-span-1 flex items-center justify-between m-1 p-3  hover:bg-gray-100  rounded-lg'
        onClick={()=>{
             changeActiveFilter("All Notes");
        }}>
            <div className='flex items-center'>
            <img src={home} alt=""  className='h-4 w-4 mr-2'/>
            <h2 className='font-semibold'>All Notes</h2>
            </div>
            <img src={arrow} alt="" className='h-7 w-7 ' />
            
            
        </div>
        <div className='row-span-10 m-2 border-t-1 border-gray-200  overflow-scroll'>

            <div className='flex items-center justify-between p-2'>
                <h2>Tags</h2>
                <form className='hidden' id='form' onSubmit={(e)=>{
                  e.preventDefault();
                  const get_input = document.querySelector("input");
                  addTag(get_input.value);
                  console.log(tags);
                  changeFormStatus();
                  get_input.value = "";
                 
                    
                }}>
                    <input type="text" placeholder='Add Tag' className='p-0.5 w-36 border-s-gray-400' />
                    
                </form>
                <img src={plus} className='h-8 w-8 hover:cursor-pointer' 
                onClick={()=>{
                    changeFormStatus();
                }}/>
            </div>
            {tags.map((tag)=>(
                <TagCard tag={tag}/>
            ))}
        </div>
    </div>
  )
}

export default Sidebar