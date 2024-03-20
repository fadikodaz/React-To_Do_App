import React, { useState } from 'react'
import './ToDo.css'

const ToDoApp = ({mode}) => {

  const [Title, setTitle] = useState('');
  const [Descri, setDesc] = useState('');
  const [mainTask, setmainTask] = useState([]);

  const TaskHandler = () =>{
    if(Title.trim().length !== 0 && Descri.trim().length !== 0)
    {
      setmainTask([...mainTask, {Title,Descri}])
    }
    setTitle('')
    setDesc('')
  }


  const deleteHandler = (id) =>{
        let copyTask = [...mainTask]
        copyTask.splice(id , 1)
        setmainTask(copyTask);
  }



  let task = mainTask.map((t,id)=>{
      return(
        <div key={id} className={` task ${mode === true ? 'active' : ''}`}>
              <div className="left">
                <h3>{t.Title}</h3>
                <p>{t.Descri}</p>
              </div>
              <div className="right">
                  <button onClick={()=>{deleteHandler(id)}}><i class="ri-close-circle-fill"></i></button>
              </div>
        </div>
      )
  })

  return (
    <div className='toDo'>
         <h1 className={`title ${mode === true ? 'active' : ''}`}>
            React To Do App
         </h1>
         
         <div className={` fieldBox ${mode === true ? 'active' : ''}`}>
            <input onChange={(e)=>{setTitle(e.target.value)}} value={Title} type="text" placeholder='Add Title' />
            <textarea onChange={(e)=>{setDesc(e.target.value)}} value={Descri} placeholder='Add Description' rows="10" />
            <button className='addBtn' onClick={()=>{TaskHandler()}}>Add Task</button>
         </div>

         <div className="TaskDisplayBox">
              <h1 className={` ${mode === true ? 'active' : ''}`}>Your Task</h1>

              {task}

         </div>

    </div>
  )
}

export default ToDoApp
