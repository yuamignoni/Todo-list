import styles from './TaskList.module.css'
import {  Trash } from 'phosphor-react';

interface ITaskListProps {
    isComplete: boolean;
    text: string;
    id: string;
    handleDeleteInput: (id:string) => void;
    toggleCompleted: (id:string) => void;
}

  
export function TaskList({id, isComplete, text, handleDeleteInput, toggleCompleted}:ITaskListProps) {

const style = isComplete ? styles.complete : styles.incomplete
    return (
        <div className={styles.wrapper}>
              <input className={styles.roundedCheckbox} type="checkbox" checked={isComplete} onClick={() => toggleCompleted(id)}/>
        <div className={style}>{text}</div>
            <button className={styles.deleteButton} onClick={() => handleDeleteInput(id)} ><Trash className={styles.trash} size={24} /></button>
        </div>
    )
}   