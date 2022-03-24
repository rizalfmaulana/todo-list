import { ChangeEvent, FC, useState } from "react";
import { ITask } from "../../Interface";
import TodoTask from "../todotask/TodoTask";

const Todo: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
    console.log(todo);
  };

  const completedTask = (taskToDelete: string): void => {
    setTodo(todo.filter((task) => task.taskName != taskToDelete));
  };
  return (
    <>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="deadline (in days).."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} completedTask={completedTask} />
        ))}
      </div>
    </>
  );
};

export default Todo;
