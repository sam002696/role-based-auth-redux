import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import axios from "axios";

const TaskModal = ({ open, setOpen, singletask }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [formList, setFormList] = useState({
    username: currentUser?.username,
    useremail: currentUser?.email,
    uploadDoc: "",
    uploadImage: "",
  });
  const handleImageChange = (e) => {
    const image = e.target.files[0].name;
    setFormList({ ...formList, uploadImage: image });
  };

  const handleDocument = (e) => {
    const document = e.target.files[0].name;
    setFormList({ ...formList, uploadDoc: document });
  };

  const handleSendTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3500/api/taskDocuments/${singletask._id}`,
        formList
      );
      if (res.data) {
        console.log("data has been sent");
        console.log(formList);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const cancelButtonRef = useRef(null);
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {singletask.taskTitle}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eius aliquam laudantium explicabo pariatur iste
                          dolorem animi vitae error totam. At sapiente aliquam
                          accusamus facere veritatis.
                        </p>
                      </div>
                    </div>

                    <form>
                      <div className="mt-2">
                        <div className=" grid grid-cols-2 gap-5 pt-5">
                          <div className="col-span-1">
                            <label
                              htmlFor="fullname"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Full Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="username"
                                id="username"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                defaultValue={currentUser?.username}
                                readOnly
                                // onChange={(e) => {
                                //   handleFormChange(e);
                                // }}
                              />
                            </div>
                          </div>

                          <div className="col-span-1">
                            <label
                              htmlFor="requiredExperience"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <div className="mt-1">
                              <input
                                type="email"
                                name="useremail"
                                id="useremail"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                defaultValue={currentUser?.email}
                                readOnly
                                // onChange={(e) => {
                                //   handleFormChange(e);
                                // }}
                              />
                            </div>
                          </div>
                          <div className="col-span-1">
                            <label
                              htmlFor="uploadDoc"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Upload Document
                            </label>
                            <div className="mt-1">
                              <input
                                type="file"
                                accept="application/pdf"
                                name="uploadDoc"
                                id="uploadDoc"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                onChange={(e) => {
                                  handleDocument(e);
                                }}
                              />
                            </div>
                          </div>

                          <div className="col-span-1">
                            <label
                              htmlFor="timeline"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Upload Image
                            </label>
                            <div className="mt-1">
                              <input
                                type="file"
                                accept="image/*"
                                name="uploadImage"
                                id="uploadImage"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm "
                                onChange={(e) => {
                                  handleImageChange(e);
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <input
                          type="submit"
                          onClick={(e) => handleSendTask(e)}
                          value="Send"
                          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-indigo-600 px-4 py-2 text-base font-medium shadow-sm hover:bg-indigo-800  sm:col-start-1 sm:mt-4 sm:text-sm text-white cursor-pointer"
                        ></input>
                      </div>
                    </form>
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

export default TaskModal;
