import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Lista.module.css";
import { ToDo } from "./ToDo";

export default function Lista() {
  const [toDo, setToDo] = useState([""]);
  const [newTodo, setNewToDo] = useState("");

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

  function deleteToDo() {}

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
        >
          Criar
        </button>
        </div>
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
