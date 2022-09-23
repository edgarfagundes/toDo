import {  ChangeEvent, InvalidEvent, useState } from "react";
import styles from "./Lista.module.css";
import { ToDo } from "./ToDo";

export default function Lista() {
  const [toDo, setToDo] = useState<ToDo[]>([]);
  const [newTodo, setNewToDo] = useState<string>();
  const [toDoCount, setToDoCount] = useState(0);
  const [countConclude, setCountConclude] = useState<number>();

  function deleteToDo(id: number) {
    const contentsWithoutDeletedOne = toDo.filter((toDo) => {
      setToDoCount(toDoCount - 1);
      return toDo.id !== id;
    });

    setToDo(contentsWithoutDeletedOne);
    setCountConclude(countConclude! - 1);
  }

  function handleToDoContent() {
    setToDoCount(toDoCount + 1);
  }

  function handleContent(event: any) {
    event.preventDefault();
    setNewToDo(event.currentTarget.elements.content.value)
    if (newTodo) {
      setToDo([
        ...toDo,
        {
          id: new Date().getUTCMilliseconds(),
          content: newTodo,
          checked: false
        },
      ]);

      setNewToDo('');
    } else {
      console.log('Não é possível adicionar uma tarefa vazia.');
    }
  }


  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewToDo(event.target.value);
    
  }

  function handleNewContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function isChecked(){
    const counter = toDo.filter((toDo) => {
      return toDo.checked === true}
      );
  
      setCountConclude(counter.length);
      console.log(countConclude)
  }

  const isNewTodoEmpty = newTodo?.length === 0;

  return (
    <form className={styles.form} onSubmit={handleContent}>
      <div className={styles.diplay}>
        <div className={styles.column}>
          <input
            className={styles.input}
            id="content"
            placeholder="Deixe um comentário"
            value={newTodo}
            onChange={handleNewTodoChange}
            onInvalid={handleNewContentInvalid}
            required
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isNewTodoEmpty}
            onClick={handleToDoContent}
          >
            Criar
          </button>
        </div>
      </div>
      <div className={styles.criadas}>
        <div className={styles.tarefasCount}>
        <span className={styles.criadasCount}>Tarefas criadas: 
        <span className={styles.criadasCounter}>{toDoCount}</span>
        </span>
        </div>
        <div>
        <span className={styles.concluidasCount}>Tarefas concluídas: 
        <span className={styles.concluidasCounter}>{countConclude} de {toDoCount}</span>
        </span>
        </div>
      </div>
      <div>
        {toDo.map((todo) => {
          return (
            <ToDo toDo={todo} key={todo?.id} onDeleteContent={deleteToDo} onChecked={isChecked} />
          );
        })}
      </div>
    </form>
  );
}
