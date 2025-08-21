import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col justify-center items-center text-white h-screen w-full bg-[url(./assets/mountain.avif)] bg-cover bg-center bg-no-repeat">
      <div className="bg-neutral-800 rounded-4xl flex flex-col">
        <h1 className="flex justify-center text-4xl text-bold">TO-DO</h1>
        <div className="flex justify-center">
          <input
            className="border-2 m-2 border-white text-white px-2"
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="border-2 m-2 px-2 text-xl font-bold"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col w-2xl h-auto p-2">
          <ol className="flex flex-col">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between border-2 rounded-md mb-2 p-2"
              >
                <span
                  className={`text-white pr-6 task.completed ? "completetext" : ""`}
                >
                  {task.text}
                </span>
                <button
                  className="border-red-700 rounded-md justify-end px-2 bg-red-700"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Todo;
