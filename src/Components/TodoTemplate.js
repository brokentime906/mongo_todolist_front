import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const TodoTemplateBlock = styled.div`
  /* display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;
const AppTitle = styled.div`
  background: #383838;
  color: white;
`;
const TodoTemplate = ({ todos, setTodos }) => {
  return (
    <TodoTemplateBlock>
      <AppTitle>Shared Todo List</AppTitle>
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplateBlock>
  );
};
export default TodoTemplate;
