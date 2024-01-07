import React from 'react'

export default function AddTask({tasklist,setTasklist,task,setTask}) {



    const handleSubmit=(e)=>{
        e.preventDefault()
        if(task.id){
        const date=new Date()
        const updatedList=tasklist.map((todo)=>(
            todo.id=== task.id ? {id:task.id,name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo
           
        ))
        setTasklist(updatedList)
        setTask({})
        }else{
           
            const date=new Date()
            const newTask={
                id:date.getTime(),
                name:e.target.task.value,
                time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
          setTasklist([...tasklist,newTask])
         setTask({})
        }
        
    }
    
  return (
    <section className='addTask'>
       <form onSubmit={handleSubmit}>
        <input type='text' name='task' value={task.name || ' '} placeholder='add Task' maxLength='25' onChange={e=>setTask({...task, name:e.target.value})} />
        <button>
           {task.id ? 'Update':'Add'}
        </button>
       </form> 
    </section>
  )
}
