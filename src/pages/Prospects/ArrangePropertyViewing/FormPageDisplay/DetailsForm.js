import React, { useEffect, useState } from "react";

const DetailsForm = ({ formData, setFormData }) => {
  const [detailsList, setDetailsList] = useState({
    moveindate: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobile: "",
    address: "",
  });
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetailsList({ ...detailsList, [name]: value });
  };
  useEffect(() => {
    setFormData({
      ...formData,
      details: detailsList,
    });
  }, [detailsList]);
  return (
    <>
      {/* Move in date */}
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          Your preferred move in date
        </h1>
      </div>

      <div className="my-5">
        <label
          htmlFor="moveindate"
          className="block text-sm font-medium text-gray-700"
        >
          Enter date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="moveindate"
            id="moveindate"
            defaultValue={formData?.details.moveindate}
            onChange={(e) => {
              handleDetailsChange(e);
            }}
            className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Personal Information */}

      <div className=" pt-5">
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          Personal information
        </h1>
      </div>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => {
                handleDetailsChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e) => {
                handleDetailsChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              onChange={(e) => {
                handleDetailsChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="tel"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="mobile"
              id="mobile"
              onChange={(e) => {
                handleDetailsChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => {
                handleDetailsChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
