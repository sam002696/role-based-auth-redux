import React, { useEffect, useState } from "react";

const PreferencesForm = ({ formData, setFormData }) => {
  const [preferencesList, setPreferencesList] = useState({
    maxRent: "",
    maxBeds: "",
    preference: "",
    parking: "",
  });
  const handlePreferencesChange = (e) => {
    const { name, value } = e.target;
    setPreferencesList({ ...preferencesList, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      preferences: preferencesList,
    });
  }, [preferencesList]);
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900 pb-5">
          Your preferences
        </h1>
      </div>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="Max Rent"
            className="block text-sm font-medium text-gray-700"
          >
            Max Rent
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="maxRent"
              id="maxRent"
              onChange={(e) => {
                handlePreferencesChange(e);
              }}
              placeholder="6000"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Max Beds"
            className="block text-sm font-medium text-gray-700"
          >
            Max Beds
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="maxBeds"
              id="maxBeds"
              onChange={(e) => {
                handlePreferencesChange(e);
              }}
              placeholder="3"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Furnished
          </label>
          <select
            id="preference"
            name="preference"
            onChange={(e) => {
              handlePreferencesChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Parking
          </label>
          <select
            id="parking"
            name="parking"
            onChange={(e) => {
              handlePreferencesChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default PreferencesForm;
