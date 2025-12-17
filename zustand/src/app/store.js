import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increase: (num) => set((state) => ({ count: state.count + num })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export const useTodoStore = create((set) => ({
  todos: [],
  title: "",

  setTitle: (value) => set({ title: value }),

  addTodo: ({ id, title }) =>
    set((state) => {
      const cleanTitle = title.trim();
      if (!cleanTitle) return state;

      return {
        todos: [...state.todos, { id, title: cleanTitle }],
      };
    }),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  editTodo: (id, newTitle) =>
    set((state) => {
      const cleanTitle = newTitle.trim();
      if (!cleanTitle) return state;

      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, title: cleanTitle } : todo
        ),
      };
    }),
}));
