import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

async function getTodos() {
  await fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then(console.log);
}
async function postTodo() {
  await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: "Use DummyJSON in the project",
      completed: false,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
