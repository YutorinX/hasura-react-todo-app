import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";

import { TodoDocument } from "../../graphql/generated";

import TodoItem, { TodoType } from "./TodoItem";
// import TodoFilters from "./TodoFilters";

const TodoPrivateList = () => {
  // const [filter, setFilter] = useState<string>("all");

  const { data: { todos } = {} } = useQuery(TodoDocument);

  if (!todos) return null;

  // const filterResults = (filter: string): void => {
  //   setFilter(filter);
  // };

  // const clearCompleted = () => {
  // };

  // let filteredTodos = todos;
  // if (filter === "active") {
  //   filteredTodos = todos.filter((todo: TodoType) => todo.is_completed !== true);
  // } else if (filter === "completed") {
  //   filteredTodos = todos.filter((todo: TodoType) => todo.is_completed === true);
  // }

  const todoList = todos.map((todo: TodoType, index: number) => <TodoItem key={todo.id} index={index} todo={todo} />);

  return (
    <Fragment>
      <div className="todoListWrapper">
        <ul>{todoList}</ul>
      </div>

      {/* <TodoFilters
        todos={filteredTodos}
        currentFilter={filter}
        filterResultsFn={filterResults}
        clearCompletedFn={clearCompleted}
      /> */}
    </Fragment>
  );
};

export default TodoPrivateList;
