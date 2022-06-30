import trashImg from '../assets/trash.svg';
import checkImg from '../assets/check.svg';
import uncheckImg from '../assets/uncheck.svg';
import { Task as TaskType } from '../types/Task';

import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
  onCompleteTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {

  const toggleCompleteTask = () => {
    onCompleteTask(task.id);
  }

  const deleteTask = () => {
    onDeleteTask(task.id);
  }


  return (
    <div className={styles.task} key={task.id}>
      <div className={styles.taskCheckBoxArea} onClick={toggleCompleteTask}>
        <img src={task.isCompleted ? checkImg : uncheckImg} alt="marcar como check" />
      </div>
      <p className={task.isCompleted ? styles.completed : ``}>{task.description}</p>
      <div className={styles.trashArea} onClick={deleteTask}>
        <img src={trashImg} alt="apagar" />
      </div>
    </div>
  )
}