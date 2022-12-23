import * as React from "react";
import { TodoQuery } from "../../graphql/generated";

export type TodoType = TodoQuery["todos"][number];

interface TodoItemType {
  index: number;
  todo: TodoType;
}

const TodoItem = ({ index, todo }: TodoItemType) => {
  const removeTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const toggleTodo = () => {};

  return (
    <li key={index}>
      <div className="view">
        <div className="round">
          {/* <input checked={todo.is_completed} type="checkbox" id={todo.id!.toString()} onChange={() => toggleTodo()} /> */}
          <label htmlFor={todo.id!.toString()} />
        </div>
      </div>

      {/* <div className={"labelContent" + (todo.is_completed ? " completed" : "")}> */}
      <div>{todo.name}</div>
      {/* </div> */}

      <button className="closeBtn" onClick={(e: any) => removeTodo(e)}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
