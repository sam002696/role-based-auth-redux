import React, { useEffect, useState } from "react";

import {
  CheckCircleIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useSelector } from "react-redux";
import TaskModal from "./TaskModal";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";

const TenantTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [singletask, setSingleTask] = useState({});
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const sendTask = "Everyone";
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const handleTasksDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3500/api/tasks?useremail=${currentUser.email}&sendTask=${sendTask}`
        );
        setTasks(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleTasksDetails();
  }, [currentUser.email]);

  const handleTaskModal = (task) => {
    setSingleTask(task);
    setOpenTaskModal(true);
  };
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl">
          <div className="my-20 pb-20">
            <p className=" font-semibold text-2xl font-mono text-center text-gray-500 mb-8">
              Tasks Assigned by the Property Manager
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

                                {/* Circle icon / arrow path rounded square icon */}

                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  {(task.sendTask === "Send to individual" &&
                                    task.uploadSingleTask?.taskComplete ===
                                      true) ||
                                  (task.sendTask === "Everyone" &&
                                    task.uploadAllTasks?.find(
                                      (task) =>
                                        task.taskComplete === true &&
                                        task.useremail === currentUser.email
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

                                  {/* Completed / incomplete */}

                                  {(task.sendTask === "Send to individual" &&
                                    task.uploadSingleTask?.taskComplete ===
                                      true) ||
                                  (task.sendTask === "Everyone" &&
                                    task.uploadAllTasks?.find(
                                      (task) =>
                                        task.taskComplete === true &&
                                        task.useremail === currentUser.email
                                    ))
                                    ? "completed"
                                    : "Not yet completed"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          disabled={
                            (task.sendTask === "Send to individual" &&
                              task.uploadSingleTask?.taskComplete === true) ||
                            (task.sendTask === "Everyone" &&
                              task.uploadAllTasks?.find(
                                (task) =>
                                  task.taskComplete === true &&
                                  task.useremail === currentUser.email
                              ))
                          }
                          onClick={() => handleTaskModal(task)}
                          className="disabled:cursor-not-allowed"
                        >
                          <ChevronRightIcon
                            className="h-5 w-5 text-gray-400 "
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
        </div>
      </div>
      <TaskModal
        open={openTaskModal}
        setOpen={setOpenTaskModal}
        singletask={singletask}
      />
    </>
  );
};

export default TenantTasks;
