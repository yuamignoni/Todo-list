import styles from './TaskStatus.module.css'

interface IStatusTasks {
numOfTasks: number,
completedTasks: number
}

export function TaskStatus({numOfTasks, completedTasks}:IStatusTasks) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.created}>
                Tarefas Criadas 
                <span className={styles.counter}>{numOfTasks}</span>
            </div>
            <div className={styles.completed}>
                Concluídas 
            <span className={styles.counter}>{completedTasks} de {numOfTasks}</span>
            </div>
        </div>
    )
}