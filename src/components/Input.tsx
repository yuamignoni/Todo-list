import styles from './Input.module.css'
import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface IInput {
  handleDeleteInput: (id: string) => void;
  handleInput: (text: string) => void;
}

export function Input({handleInput}:IInput) {
  const [text, setText] = useState("")

  function handleSubmit(event:FormEvent) {
    event.preventDefault()
    handleInput(text)
  }

  function onChange(event: ChangeEvent<HTMLTextAreaElement>){
  setText(event.target.value)
}
  
    return (
          <form onSubmit={handleSubmit} className={styles.wrapper}>
        <textarea
          name="new task"
          placeholder="Adicione uma nova tarefa"
          onChange={onChange}
          value={text}

          required
        />
        <button type="submit" >Criar <img src={plus} /></button>
        </form>
    )
}