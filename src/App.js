
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import { useEffect, useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState(localStorage.getItem('tasklist') || []);
  const[task,setTask]=useState({})

  useEffect(()=>{
    localStorage.setItem('tasklist',JSON.stringify((taskList)))
  },[taskList])
  return (
    <div className="App">
    <div className='container'>
      <Header />
      <AddTask tasklist={taskList} setTasklist={setTaskList}  task={task} setTask={setTask}/>
      <ShowTask tasklist={taskList} setTasklist={setTaskList}  task={task} setTask={setTask}/>
      </div>
    </div>
  );
}

export default App;
