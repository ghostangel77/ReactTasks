import { TaskForm } from "./components/taskForm/taskForm.component";
import { Tasks } from "./components/tasks/tasks.component";

export function App() {
  return (
    <main className="h-screen bg-zinc-900">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasks />
      </div>
    </main>
  );
}

export default App;
