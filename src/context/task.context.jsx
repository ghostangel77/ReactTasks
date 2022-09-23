import { createContext, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data);
  const [lastId, setLastId] = useState(tasks.length);

  const addTask = (task) => {
    task.id = lastId + 1;
    setLastId(task.id);
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
