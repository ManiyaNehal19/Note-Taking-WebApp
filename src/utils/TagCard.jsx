import React from 'react'
import tagimg from './tag.png'
import { useView } from '../contexts/Viewcontext.jsx';

function TagCard({tag}) {
    const {changeActiveFilter, activeFilter} = useView();
  return (
    <div key={`${tag}-1`} className='flex items-center   hover:bg-gray-100 rounded-lg p-2'
    onClick={()=>{
        changeActiveFilter(tag);
        
    }
      }>
        <img src={tagimg} alt="" className='w-4 h-4 mr-1.5'/>
        <h2 className='font-semibold '>{tag}</h2>
    </div>
  )
}

export default TagCard