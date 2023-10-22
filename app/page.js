"use client"

import React, {useState} from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) =>{
    const work = [...mainTask]
    work.splice(i,1)
    setmainTask(work)
  }

  let renderText = "No Task Available"

  if(mainTask.length > 0){
    renderText = mainTask.map((t,i)=>{
      return (
        <li className='flex align-middle justify-between'>
          <div className='flex justify-between text-bold w-2/3 align-center'>
            <h2 className='text-xl font-bold'>{t.title}</h2>
            <h3 className='text-lg'>{t.desc}</h3>
          </div>
          <button 
           onClick={()=>{deleteHandler(i)}}
           className='bg-black py-2 px-6 rounded text-white'>Delete</button>
        </li>
      );
    });
  } 

  return (
    <div>
        <div className='bg-black text-white py-5' >
          <h2 className='text-center decoration-5 text-2xl font-semibold'>My Todo List</h2>
        </div>
        <form onSubmit={submitHandler} className='py-5 px-8 flex gap-4 justify-center'>
            <input 
              type='text'
              placeholder='Enter the text'
              className='p-5 border-4 border-black'
              value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }}
            />
            <input 
              type='text'
              placeholder='Enter the text'
              className='p-5 border-4 border-black'
              value={desc}
              onChange={(e)=>{
                setdesc(e.target.value)
              }}
            />
            <button className='bg-black text-white px-10'>Add</button>
        </form>
        <div className='p-10 bg-slate-500'>
          <ul>
            {renderText}
          </ul>
        </div>
    </div>
  )
}

export default page