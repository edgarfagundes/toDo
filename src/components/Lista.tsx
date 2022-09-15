import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Lista.module.css";
import { ToDo } from "./ToDo";

export default function Lista() {
  const [toDo, setToDo] = useState<string[]>([]);
  const [newTodo, setNewToDo] = useState("");
  const [toDoCount, setToDoCount] = useState(toDo.length)


  function deleteToDo(contentToDelete: string) { 
    const contentsWithoutDeletedOne = toDo.filter((toDo) => {
      setToDoCount(toDoCount - 1)
      return toDo !== contentToDelete;
    });

    setToDo(contentsWithoutDeletedOne);
  }

  function handleToDoContent(){
    setToDoCount(toDoCount + 1)
  }
  

  function handleContent(event: FormEvent) {
    event.preventDefault();
    setToDo([...toDo, newTodo]);
    setNewToDo("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewToDo(event.target.value);
  }

  function handleNewContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }
  

  const isNewTodoEmpty = newTodo.length === 0;

  

  return (
    <form className={styles.form} onSubmit={handleContent}>
      <div className={styles.diplay}>
        <div className={styles.column}>
        <input
          className={styles.input}
          name="content"
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
      <span >Tarefas criadas: {toDoCount}</span>
      </div>
      <div>
        {toDo.map((content) => {
          return (
            <ToDo 
              key={content}
              content={content}
              onDeleteContent={deleteToDo}
            />
          );
        })}
      </div>
    </form>
  );
}
