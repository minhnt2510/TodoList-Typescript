import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import styles from "./todolist.module.scss";

export default function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList />
      </div>
    </div>
  );
}
