import { useState } from "react";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import type { Todo } from "../../@types/todo.type";
import styles from "./todolist.module.scss";

export default function TodoList() {
  const [todos, settodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
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
  const startEditTodo = (id: string) => {
    const finddedTodo = todos.find((todo) => todo.id === id);
    if (finddedTodo) {
      setCurrentTodo(finddedTodo);
    }
  };
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name };
      return null;
    });
  };
  const finishEditTodo = () => {
    settodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo;
        }
        return todo;
      });
    });
    setCurrentTodo(null);
  };
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          editTodo={editTodo}
          finishEditTodo={finishEditTodo}
        />
        <TaskList
          todos={notdoneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
        />
        <TaskList
          doneTaskList
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
        />
      </div>
    </div>
  );
}
