import React, { useState } from "react";
import { FaComment, FaPaperclip, FaPlus, FaTrash } from "react-icons/fa";

const Board = ({ open, searchText }) => {
  const initialTaskCategories = [
    {
      name: "Backlog Tasks",
      tasks: [
        {
          id: 1,
          title: "Something",
          description: "Some Description",
          comments: 4,
          attachments: 10,
        },
      ],
    },
    {
      name: "To DO",
      tasks: [
        {
          id: 1,
          title: "Something",
          description: "Some Description",
          comments: 4,
          attachments: 10,
        },
      ],
    },
    {
      name: "In Process",
      tasks: [
        {
          id: 1,
          title: "Something",
          description: "Some Description",
          comments: 4,
          attachments: 10,
        },
      ],
    },
    {
      name: "Done",
      tasks: [
        {
          id: 1,
          title: "Something",
          description: "Some Description",
          comments: 4,
          attachments: 10,
        },
      ],
    },
  ];

  const [taskCategories, setTaskCategories] = useState(initialTaskCategories);
  const [newTaskInputs, setNewTaskInputs] = useState({});

  const handleInputChange = (index, field, value) => {
    setNewTaskInputs((prevInputs) => ({
      ...prevInputs,
      [index]: {
        ...prevInputs[index],
        [field]: value,
      },
    }));
  };

  const handleAddTask = (index) => {
    const newTaskTitle = newTaskInputs[index]?.title || "";
    const newTaskDescription = newTaskInputs[index]?.description || "";

    if (newTaskTitle.trim() && newTaskDescription.trim()) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        description: newTaskDescription,
        comments: 0,
        attachments: 0,
      };
      const updatedCategories = [...taskCategories];
      updatedCategories[index].tasks.push(newTask);
      setTaskCategories(updatedCategories);
      setNewTaskInputs((prevInputs) => ({
        ...prevInputs,
        [index]: { title: "", description: "" },
      }));
    }
  };

  const handleDeleteTask = (categoryIndex, taskId) => {
    const updatedCategories = [...taskCategories];
    updatedCategories[categoryIndex].tasks = updatedCategories[
      categoryIndex
    ].tasks.filter((task) => task.id !== taskId);
    setTaskCategories(updatedCategories);
  };

  const filterTasks = (tasks) => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchText.toLowerCase()) ||
        task.description.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div className="md:flex space-x-4 p-4">
      {taskCategories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="font-bold text-md mb-4 text-gray-700">
            {category.name}
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              className="px-2 py-1 mb-2 text-sm border border-gray-300 rounded-md w-full"
              value={newTaskInputs[categoryIndex]?.title || ""}
              onChange={(e) =>
                handleInputChange(categoryIndex, "title", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="px-2 py-1  mb-2 border border-gray-300 text-sm rounded-md w-full"
              value={newTaskInputs[categoryIndex]?.description || ""}
              onChange={(e) =>
                handleInputChange(categoryIndex, "description", e.target.value)
              }
            />
            <button
              onClick={() => handleAddTask(categoryIndex)}
              className="w-full flex items-center justify-center px-4 py-1 bg-gray-200 text-white rounded-md"
            >
              <FaPlus className="mr-2 rounded-full bg-slate-400 py-1" />
              <p className="text-sm font-semibold" style={{ color: "blue" }}>
                Add Task
              </p>
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filterTasks(category.tasks).map((task) => (
              <div
                key={task.id}
                className="bg-gray-100 p-3 rounded-md mb-4 relative"
              >
                <h3 className="font-semibold text-md text-gray-700">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <div className="flex justify-between items-center mt-2 text-gray-500 text-sm">
                  <span className="flex items-center space-x-1">
                    <FaComment />
                    <span>{task.comments}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaPaperclip />
                    <span>{task.attachments}</span>
                  </span>
                </div>
                {category.name !== "Done" && (
                  <button
                    onClick={() => handleDeleteTask(categoryIndex, task.id)}
                    className="absolute top-2 right-2 text-red-500"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
