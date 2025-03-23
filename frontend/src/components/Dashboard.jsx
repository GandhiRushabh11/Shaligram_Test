import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", description: "Description for Task 1" },
    { id: 2, name: "Task 2", description: "Description for Task 2" },
  ]);

  const handleCreate = () => {
    const newTask = {
      id: Date.now(),
      name: `Task ${tasks.length + 1}`,
      description: "New task description",
    };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: `${task.name} (Edited)` } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Task Dashboard</h1>
        <div className="space-x-2">
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Create Task
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <table className="w-full bg-white shadow-lg rounded text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Description</th>
            <th className="p-4">Name</th>
            <th className="p-4">Description</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-4">{task.id}</td>
              <td className="p-4">{task.name}</td>
              <td className="p-4">{task.description}</td>
              <td className="p-4">{task.name}</td>
              <td className="p-4">{task.description}</td>
              <td className="p-4 flex gap-2">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="px-4 py-2 border rounded text-blue-500"
                >
                  <Pencil className="h-4 w-4 mr-1 inline" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-4 py-2 border rounded text-red-500"
                >
                  <Trash2 className="h-4 w-4 mr-1 inline" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
