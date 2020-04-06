import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import axios from "axios";
const TodoListBlock = styled.div``;

const TodoList = ({ todos, setTodos }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: todoList } = await axios.get("paging");
        setTodos(todoList);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>대기중...</div>;
  }
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem id={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
};
export default TodoList;
