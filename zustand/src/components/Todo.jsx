import React from "react";
import { useStore, useTodoStore } from "../app/store";

function Todo() {
  const { addTodo, todos, title, setTitle, deleteTodo, editTodo } =
    useTodoStore();

  return (
    <div
      style={{
        backgroundColor: "maroon",
        margin: "auto",
        maxWidth: "400px",
        textAlign: "center",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h1>Todo</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          style={{
            padding: "4px 8px",
            flex: 1,
            borderRadius: "4px",
            border: "none",
          }}
        />
        <button
          onClick={() => {
            addTodo({ id: Date.now(), title: title });
            setTitle("");
          }}
          style={{
            padding: "6px 16px",
            color: "maroon",
            backgroundColor: "wheat",
            borderRadius: "4px",
            border: "none",
          }}
        >
          add
        </button>
      </div>
      <ul style={{ listStyleType: "none", textAlign: "start", color: "wheat" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() =>{
              const newTitle=prompt("edit",todo.title)
              if(newTitle!==null)
                editTodo(todo.id,newTitle)
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Counter() {
  const { increase, reset } = useStore();
  const count = useStore((state) => state.count);
  const decrease = useStore((state) => state.decrease);

  return (
    <div  style={{
        backgroundColor: "skyblue",
        margin: "auto",
        maxWidth: "400px",
        textAlign: "center",
        borderRadius: "20px",
        padding: "20px",
      marginTop:"20px"
      }}>
        <h1>counter</h1>
      <p>{count}</p>
      <button onClick={() => increase(5)}>Increase</button>
      <button onClick={decrease}>decreas</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Todo;
