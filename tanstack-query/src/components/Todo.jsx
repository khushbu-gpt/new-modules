import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    // onSuccess: () => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },
    onSuccess: (newTodo) => {
      queryClient.setQueryData(["todos"], (oldTodos = []) => [
        newTodo,
        ...oldTodos,
      ]);
    },
  });

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id:Date.now(),
            userId: Math.round(Math.random())+100,
            todo: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

// api/todos.js

async function getTodos() {
  const res = await fetch("https://dummyjson.com/todos");
  const result = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  return result.todos;
}

async function postTodo(newTodo) {
  const res = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const result = await res.json();
  if (!res.ok) {
    throw new Error("Failed to add todo");
  }

  return result;
}
