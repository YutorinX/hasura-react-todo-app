import * as React from "react";
import { useMutation } from "@apollo/client";
import { CreateTodoDocument, TodoDocument } from "../../graphql/generated";

const TodoInput = ({ isPublic = false }) => {
  const [todoInput, setTodoInput] = React.useState("");

  const [createTodo] = useMutation(CreateTodoDocument, {
    refetchQueries: [TodoDocument],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      createTodo({
        variables: {
          object: {
            name: todoInput,
          },
        },
      });
      setTodoInput("");
    } catch (error) {
      // エラー処理
      console.error(error);
    }
  };

  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="What needs to be done?"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <i className="inputMarker fa fa-angle-right" />
    </form>
  );
};

export default TodoInput;
