import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskStatus } from './components/TaskStatus'
import { TaskList } from './components/TaskList'
import { NoTasks } from './components/NoTasks'
import { v4 as uuidv4 } from 'uuid';

interface Itasks {
  id: string;
  isComplete: boolean;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Itasks[]>([])
  const numOfTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isComplete).length

  function handleInput(taskText:string) {
    setTasks([
      ...tasks, {
        id: uuidv4(),
        text:taskText,
        isComplete:false
      }
    ])
  }

function handleDeleteInput(id:string):void {
  const newTasks = tasks.filter(task => task.id !== id)
  setTasks(newTasks)
}
function toggleCompleted(id:string):void {
  const newTasks = tasks.map(task => {
    if (task.id===id){
    return {...task, isComplete: !task.isComplete}}
  return task
  })

 setTasks([...newTasks ])
}

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Input handleInput={handleInput} />
      <TaskStatus
      numOfTasks={numOfTasks}
      completedTasks={completedTasks}
      />
      {!tasks && <NoTasks/>}
      {tasks && tasks.map(task => {
            return (
              <div className={styles.taskWrapper}>
            <TaskList
              toggleCompleted={toggleCompleted}
              handleDeleteInput={handleDeleteInput}
              key={task.id}
              isComplete={task.isComplete}
              text={task.text}
              id={task.id}
            />
            </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
