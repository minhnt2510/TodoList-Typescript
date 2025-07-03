import { useState } from "react";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import type { Todo } from "../../@types/todo.type";
import styles from "./todolist.module.scss";

export default function TodoList() {
  const [todos, settodos] = useState<Todo[]>([]);

  const doneTodos = todos.filter((todo) => todo.done);
  const notdoneTodos = todos.filter((todo) => !todo.done);

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString(),
    };
    settodos((prev) => [...prev, todo]);
  };
  const handleDoneTodo = (id: string, done: boolean) => {
    settodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      });
    });
  };
  console.log(todos);
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList todos={notdoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList doneTaskList todos={doneTodos} handleDoneTodo={handleDoneTodo}/>
      </div>
    </div>
  );
}
