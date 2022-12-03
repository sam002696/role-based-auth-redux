import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const ManagerTaskModal = ({ open, setOpen, singletask }) => {
  const cancelButtonRef = useRef(null);

  const handleTaskComplete = async (taskid) => {
    try {
      const res = await axios.put(
        `http://localhost:3500/api/taskDocuments/taskComplete/${taskid}`
      );
      if (res.data) {
        console.log("Task has been completed");
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto custom-scrollbar">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-y-auto rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6 lg:p-16">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center underline underline-offset-4"
                      >
                        {singletask.taskTitle}
                      </Dialog.Title>
                      {singletask.sendTask === "Send to individual" ? (
                        <div className="mt-2">
                          <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 flex justify-between">
                              <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                  Applicant Information
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                  Personal details and application.
                                </p>
                              </div>

                              <button
                                onClick={() =>
                                  handleTaskComplete(
                                    singletask.uploadSingleTask?._id
                                  )
                                }
                                disabled={
                                  singletask.uploadSingleTask?.taskComplete ===
                                  true
                                }
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-green-100 px-3 py-2 text-sm font-medium leading-4 text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-green-400 "
                              >
                                {singletask.uploadSingleTask?.taskComplete ===
                                true
                                  ? "Marked Complete!"
                                  : "Mark it complete!"}
                              </button>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900">
                                    {singletask.uploadSingleTask?.username}
                                  </dd>
                                </div>
                                <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Application for
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900">
                                    {singletask.taskTitle}
                                  </dd>
                                </div>
                                <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900">
                                    {singletask.uploadSingleTask?.useremail}
                                  </dd>
                                </div>
                                <div className="sm:col-span-1">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Upload Date
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900">
                                    {new Date(
                                      singletask.uploadSingleTask?.createdAt
                                    ).getFullYear()}
                                    -
                                    {new Date(
                                      singletask.uploadSingleTask?.createdAt
                                    ).getMonth()}
                                    -
                                    {new Date(
                                      singletask.uploadSingleTask?.createdAt
                                    ).getDate()}
                                  </dd>
                                </div>
                                <div className="sm:col-span-2">
                                  <dt className="text-sm font-medium text-gray-500">
                                    About
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900">
                                    Fugiat ipsum ipsum deserunt culpa aute sint
                                    do nostrud anim incididunt cillum culpa
                                    consequat. Excepteur qui ipsum aliquip
                                    consequat sint. Sit id mollit nulla mollit
                                    nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing
                                    reprehenderit deserunt qui eu.
                                  </dd>
                                </div>
                                <div className="sm:col-span-2">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Attachments
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900">
                                    <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                      <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                        <div className="flex w-0 flex-1 items-center">
                                          <PaperClipIcon
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-2 w-0 flex-1 truncate">
                                            {
                                              singletask.uploadSingleTask
                                                ?.uploadDoc
                                            }
                                          </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                          <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Download
                                          </a>
                                        </div>
                                      </li>
                                      <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                        <div className="flex w-0 flex-1 items-center">
                                          <PaperClipIcon
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-2 w-0 flex-1 truncate">
                                            {
                                              singletask.uploadSingleTask
                                                ?.uploadImage
                                            }
                                          </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                          <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Download
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      ) : (
                        singletask.uploadAllTasks?.map((task) => (
                          <>
                            <div className="mt-2">
                              <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6 flex justify-between">
                                  <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                      Applicant Information
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                      Personal details and application.
                                    </p>
                                  </div>

                                  <button
                                    onClick={() => handleTaskComplete(task._id)}
                                    type="button"
                                    disabled={task.taskComplete === true}
                                    className="inline-flex items-center rounded-md border border-transparent bg-green-100 px-3 py-2 text-sm font-medium leading-4 text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-green-400"
                                  >
                                    {task.taskComplete === true
                                      ? "Marked Complete!"
                                      : "Mark it complete!"}
                                  </button>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Full name
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900">
                                        {task.username}
                                      </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Application for
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900">
                                        {singletask.taskTitle}
                                      </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Email address
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900">
                                        {task.useremail}
                                      </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Upload Date
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(task.createdAt).getFullYear()}
                                        -{new Date(task.createdAt).getMonth()}-
                                        {new Date(task.createdAt).getDate()}
                                      </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                      <dt className="text-sm font-medium text-gray-500">
                                        About
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900">
                                        Fugiat ipsum ipsum deserunt culpa aute
                                        sint do nostrud anim incididunt cillum
                                        culpa consequat. Excepteur qui ipsum
                                        aliquip consequat sint. Sit id mollit
                                        nulla mollit nostrud in ea officia
                                        proident. Irure nostrud pariatur mollit
                                        ad adipisicing reprehenderit deserunt
                                        qui eu.
                                      </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Attachments
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900">
                                        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                              <PaperClipIcon
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span className="ml-2 w-0 flex-1 truncate">
                                                {task.uploadDoc}
                                              </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                              <a
                                                href="#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                              >
                                                Download
                                              </a>
                                            </div>
                                          </li>
                                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                              <PaperClipIcon
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span className="ml-2 w-0 flex-1 truncate">
                                                {task.uploadImage}
                                              </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                              <a
                                                href="#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                              >
                                                Download
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ManagerTaskModal;
