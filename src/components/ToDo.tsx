import styles from './ToDo.module.css';

interface ToDoProps {
  content: string;
  onDeleteContent: (content: string) => void;
}

export function ToDo({ content, onDeleteContent }: ToDoProps) {
  return (
    <div>
    <div className={styles.tarefas}>
    <div className={styles.commentList}>
    <input type="checkbox" className={styles.checkbox} />
    <div >
      <text className={styles.content}>{content}</text>
    </div>
    </div>
    </div>
      </div>
  );
}
