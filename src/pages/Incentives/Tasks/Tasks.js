import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import ManagerTaskModal from "./ManagerTaskModal";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [singletask, setSingleTask] = useState({});
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [formList, setFormList] = useState({
    sendTask: "",
    assignedUsername: "",
    assignedUseremail: "",
    taskTitle: "",
    taskDesc: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormList({ ...formList, [name]: value });
  };
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3500/api/tasks`, formList);
      if (res.data) {
        console.log("data has been sent");
        console.log(formList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendToEveryone = async (e) => {
    e.preventDefault();

    const { assignedUsername, assignedUseremail, ...others } = formList;

    try {
      const res = await axios.post(
        `http://localhost:3500/api/tasks/alltenants`,
        others
      );
      if (res.data) {
        console.log("data has been sent to all");
        console.log(others);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleFetchAllTasks = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/api/tasks`);
        console.log(res.data);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchAllTasks();
  }, []);

  const handleTaskModal = (task) => {
    setSingleTask(task);
    setOpenTaskModal(true);
  };

  return (
    <>
      <div className=" max-w-5xl mx-auto">
        <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute left-full translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 -translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Create tasks for tenants
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </div>
            <div className="mt-12">
              <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="sendTask"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Whom do you want to send?
                  </label>
                  <select
                    id="sendTask"
                    name="sendTask"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={(e) => {
                      handleFormChange(e);
                    }}
                  >
                    <option>Select</option>
                    <option>Everyone</option>
                    <option>Send to individual</option>
                  </select>
                </div>
                {formList.sendTask === "Send to individual" && (
                  <>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="assignedUsername"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="assignedUsername"
                          id="assignedUsername"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="assignedUseremail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="assignedUseremail"
                          name="assignedUseremail"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="taskTitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Title
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="taskTitle"
                      id="taskTitle"
                      autoComplete="organization"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      onChange={(e) => {
                        handleFormChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="taskDesc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="taskDesc"
                      name="taskDesc"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      onChange={(e) => {
                        handleFormChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  {formList.sendTask === "Send to individual" ? (
                    <input
                      type="submit"
                      value="Submit"
                      onClick={(e) => handleTaskSubmit(e)}
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    ></input>
                  ) : (
                    <input
                      type="submit"
                      value="Submit"
                      onClick={(e) => handleSendToEveryone(e)}
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    ></input>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-5 max-w-3xl mx-auto">
        <p className=" font-medium text-lg text-center text-gray-500 mb-5 underline underline-offset-4">
          List of the assigned tenant tasks
        </p>
        <div className="bg-white shadow-lg shadow-cyan-200/50 overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <li key={task._id}>
                <div className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-cyan-600 truncate">
                            {task.taskTitle}
                          </p>

                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <PlusCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="truncate">
                              {task.assignedUseremail
                                ? "Individual"
                                : "Everyone"}
                            </span>
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <div>
                            <p className="text-sm text-gray-900">
                              Assigned on{" "}
                              <time>
                                {new Date(task.createdAt).getFullYear()}-
                                {new Date(task.createdAt).getMonth()}-
                                {new Date(task.createdAt).getDate()}
                              </time>
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              {(task.sendTask === "Send to individual" &&
                                task.uploadSingleTask?.taskComplete === true) ||
                              (task.sendTask === "Everyone" &&
                                task.uploadAllTasks?.every(
                                  (task) => task.taskComplete === true
                                )) ? (
                                <CheckCircleIcon
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ArrowPathRoundedSquareIcon
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400"
                                  aria-hidden="true"
                                />
                              )}

                              {(task.sendTask === "Send to individual" &&
                                task.uploadSingleTask?.taskComplete === true) ||
                              (task.sendTask === "Everyone" &&
                                task.uploadAllTasks?.every(
                                  (task) => task.taskComplete === true
                                ))
                                ? "completed"
                                : "Not yet completed"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleTaskModal(task)}>
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ManagerTaskModal
        open={openTaskModal}
        setOpen={setOpenTaskModal}
        singletask={singletask}
      />
    </>
  );
};

export default Tasks;
