import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import styles from "./todolist.module.scss";

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default TodoList;
