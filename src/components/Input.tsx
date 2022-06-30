import styles from './Input.module.css';
import plusImg from '../assets/plus.svg';
import { useState } from 'react';

interface InputProps {
  onAddTask: (taskDescription: string) => void;
}

export function Input({ onAddTask }: InputProps) {

  const [taskDescription, setTaskDescription] = useState('');

  const addTask = () => {
    if (taskDescription.length > 0) {
      onAddTask(taskDescription);
    }

    setTaskDescription('');
  }

  return (
    <div className={styles.inputArea}>
      <input type="text" placeholder="Adicione uma nova tarefa" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      <button onClick={addTask}>Criar <img src={plusImg} alt="Criar" /></button>
    </div>
  )
}