import styles from './Summary.module.css';


interface SummaryProps {
  tasksCreatedAmount: number;
  tasksCompletedAmount: number;
}

export function Summary({ tasksCreatedAmount, tasksCompletedAmount }: SummaryProps) {
  return (
    <div className={styles.summaryArea}>
      <div className={styles.summaryAreaParagraph}>
        <p>Tarefas criadas</p> <span className={styles.summaryNumber}>{tasksCreatedAmount}</span>
      </div>
      <div className={styles.summaryAreaParagraph}>
        <p className={styles.doneLabel}>Concluídas</p> <span className={styles.summaryNumber}>{tasksCompletedAmount} de {tasksCreatedAmount}</span>
      </div>
    </div>
  )
}