import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Cadastro.module.css'

export function Cadastro(){

    const [toDo, setToDo] = useState(['Atividade 1']);
    const [newTodo, setNewToDo] = useState('')

    function handleContent(event: ChangeEvent<HTMLTextAreaElement>){
        event.preventDefault();

        setNewToDo(event.target.value)
        setToDo([...toDo, newTodo]);
        alert(toDo)
        
    }


    return (
        <form className={styles.form}>
            <textarea className={styles.textarea} placeholder="Adicione nova tarefa"></textarea>
            <button className={styles.button} onSubmit={handleContent}> Criar</button>
        </form>
    )
}