import styles from "./ToDo.module.css";
import { useState } from "react";
import { Trash } from "phosphor-react";

export type ToDo = {
  id: number;
  content: string;
  checked: boolean;
};
interface ToDoProps {
  toDo: ToDo;
  onDeleteContent: (id: number) => void;
  onChecked: (checked: boolean) => void

}

export function ToDo({toDo, onDeleteContent, onChecked }: ToDoProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
   if(!isChecked){
    toDo.checked = true;
    console.log(toDo.checked);
   }else{
    toDo.checked = false;
    console.log(toDo.checked)
   }
   handleChecked();
   return toDo.checked;
  };


  function handleDeleteComment() {
    onDeleteContent(toDo.id);
  }

  function handleChecked(){
    onChecked(toDo.checked)
  }

  return (
    <div>
      <div className={styles.tarefas}>
        <div className={styles.commentList}>
          <input
            id="checkbox"
            type="checkbox"
            className={styles.checkbox}
            onChange={handleChange}
          />
          <div>
            <text
              className={
                isChecked ? styles.contentCheckboxChecked : styles.content
              }
            >
              {toDo.content}
            </text>
          </div>
          <div>
            <button
              className={styles.trash}
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
