import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome to My Next.js Todo App</h1>
      <TodoList />
    </main>
  );
}
