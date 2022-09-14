import styles from "./ToDo.module.css";
import { ChangeEvent } from 'react';
import { useState } from 'react';

interface ToDoProps {
  isChecked?: boolean;
  content: string;
  onDeleteContent: (content: string) => void;
}

export function ToDo({ isChecked, content, onDeleteContent }: ToDoProps) {

  function isCheckboxChecked(){
    const checkbox:HTMLInputElement = document.getElementById(
      "checkbox",
    ) as HTMLInputElement;
    
    if(checkbox.checked){
      console.log('checked')
      isChecked = true;
      
    }
    else{
      isChecked = false
    }
   isChecked;
  }

  return (
    <div>
      <div className={styles.tarefas}>
        <div className={styles.commentList}>
          <input
            id="checkbox"
            type="checkbox"
            className={styles.checkbox}
            onClick={isCheckboxChecked}
          />
          <div>
            <text  className={isChecked ? styles.contentCheckboxChecked  : styles.content}>{content}</text>
          </div>
        </div>
      </div>
    </div>
  );
}
