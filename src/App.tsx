import "./global.css";
import styles from './App.module.css';

import emptyImg from './assets/empty.svg'
import { Header } from "./components/Header";
import { Input } from './components/Input';
import { Summary } from "./components/Summary";
import { Task as TaskType } from "./types/Task";
import { Task } from "./components/Task";
import { useState } from "react";


let SERIAL_ID = 3;

const data: TaskType[] = [
  {
    id: 1,
    description: "Estudar Java",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Comer goiaba",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Ler livro",
    isCompleted: false,
  }
]



export function App() {

  const [tasks, setTasks] = useState<TaskType[]>(data);


  function countTasksCompleted(tasks: TaskType[]) {
    return tasks.filter(task => task.isCompleted).length;
  }


  const addTask = (taskDescription: string) => {
    const newTask: TaskType = {
      id: SERIAL_ID + 1,
      description: taskDescription,
      isCompleted: false
    }

    setTasks([newTask, ...tasks]);
    SERIAL_ID++;
  };

  const toggleCompleteTask = (taskId: number) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }
      return task;
    }))
  }

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Input onAddTask={addTask} />
        </div>
        <section className={styles.tasksArea}>
          <Summary tasksCreatedAmount={tasks.length} tasksCompletedAmount={countTasksCompleted(tasks)} />
          {
            tasks.length === 0 ? (
              <div className={styles.emptyArea}>
                <img src={emptyImg} alt="" />
                <h3>Você ainda não tem tarefas cadastradas</h3>
                <p>Crie tarefas e organize os seus itens a fazer</p>
              </div>
            )
              : (tasks.map((task) => (
                <Task key={task.id} task={task} onCompleteTask={toggleCompleteTask} onDeleteTask={handleDeleteTask} />
              ))

              )
          }


        </section>
      </div>
    </>
  )
}


