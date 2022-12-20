import React, { useEffect, useState } from "react";

const BookForm = ({ formData, setFormData }) => {
  const [bookList, setBookList] = useState({
    preferredDay: "",
    preferredTime: "",
  });
  const handleBookChange = (e) => {
    const { name, value } = e.target;
    setBookList({ ...bookList, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      book: bookList,
    });
  }, [bookList]);
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900 pb-5">
          Select a day and time
        </h1>

        <div className=" grid grid-cols-2 gap-5 pt-5">
          <div className="col-span-1">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="preferredDay"
                id="preferredDay"
                onChange={(e) => {
                  handleBookChange(e);
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <div className="mt-1">
              <input
                type="time"
                name="preferredTime"
                id="preferredTime"
                onChange={(e) => {
                  handleBookChange(e);
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="rounded-md bg-yellow-100 p-4 mt-5">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-yellow-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Attention needed
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  To ensure your viewing of this property, you must register. If
                  you do not register, the viewing may not be confirmed. By
                  registering you will be automatically advised of any changes,
                  updates or future viewings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookForm;
