import React from "react";
import styled from "styled-components";

const TodoItemBlock = styled.div``;

const TodoItem = ({ todo }) => {
  const { content, done } = todo;
  return (
    <TodoItemBlock>
      <div>{content}</div>
    </TodoItemBlock>
  );
};
export default TodoItem;
