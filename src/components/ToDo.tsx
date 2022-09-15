import styles from "./ToDo.module.css";
import { useState } from 'react';
import { ThumbsUp, Trash } from "phosphor-react";

interface ToDoProps {
  content: string;
  onDeleteContent: (content: string) => void;
}

export function ToDo({ content, onDeleteContent }: ToDoProps) {

  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  function handleDeleteComment() {
    onDeleteContent(content);
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
            <text  className={isChecked ? styles.contentCheckboxChecked : styles.content}>{content}</text>
          </div>
          <button className={styles.trash} onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
        </div>
      </div>
    </div>
  );
}
