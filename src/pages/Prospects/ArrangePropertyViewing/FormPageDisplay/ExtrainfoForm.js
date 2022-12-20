import React, { useEffect, useState } from "react";

const ExtrainfoForm = ({ formData, setFormData }) => {
  const [extraInfoList, setExtraInfoList] = useState({
    ukBasedGurantor: "",
    adults: "",
    children: "",
    lengthOfStay: "",
    livingArrangement: "",
    reasonForMoving: "",
    currentOccupation: "",
    jobTitle: "",
    householdIncome: "",
    pets: "",
    smoker: "",
    adverseCard: "",
    relevantInfo: "",
  });
  const handleExtraInfoChange = (e) => {
    const { name, value } = e.target;
    setExtraInfoList({ ...extraInfoList, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      extraInfo: extraInfoList,
    });
  }, [extraInfoList]);
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900 pb-5">
          Extra Info
        </h1>
      </div>

      <div className=" grid grid-cols-1 gap-5 pt-5">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Is your combined household annual income more than 30 times the
            monthly rental, or can you provide a UK based guarantor?
          </label>
          <select
            id="ukBasedGurantor"
            name="ukBasedGurantor"
            onChange={(e) => {
              handleExtraInfoChange(e);
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
            How many adults (16 or older) will be living in the property? *
          </label>
          <select
            id="adults"
            name="adults"
            onChange={(e) => {
              handleExtraInfoChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10+</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            How many children (15 or younger) will be living in the property?
          </label>
          <select
            id="children"
            name="children"
            onChange={(e) => {
              handleExtraInfoChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10+</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Intended length of stay in the property?
          </label>
          <select
            id="lengthOfStay"
            name="lengthOfStay"
            onChange={(e) => {
              handleExtraInfoChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Less than 6 months</option>
            <option>More than 6 months</option>
            <option>More than 12 months</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Current Living Arrangement
          </label>
          <select
            id="livingArrangement"
            name="livingArrangement"
            onChange={(e) => {
              handleExtraInfoChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Homeowner</option>
            <option>Renting</option>
            <option>With Relatives</option>
            <option>Other</option>
          </select>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="Max Rent"
            className="block text-sm font-medium text-gray-700"
          >
            Reason for moving
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="reasonForMoving"
              id="reasonForMoving"
              onChange={(e) => {
                handleExtraInfoChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Current Occupation
          </label>
          <select
            id="currentOccupation"
            name="currentOccupation"
            onChange={(e) => {
              handleExtraInfoChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>None</option>
            <option>Self Employed</option>
            <option>Part Time Employed</option>
            <option>Employed</option>
            <option>Contractor</option>
            <option>Pensioner/Retired</option>
            <option>In Receipt of Benefits</option>
            <option>Full-time Student</option>
            <option>Part-time Student</option>
            <option>Part-time Student with Part-time Job</option>
            <option>Full-time Student with Full-time Job</option>
          </select>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Max Rent"
            className="block text-sm font-medium text-gray-700"
          >
            What is your job title?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              onChange={(e) => {
                handleExtraInfoChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="Max Rent"
            className="block text-sm font-medium text-gray-700"
          >
            Total Household Income
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="householdIncome"
              id="householdIncome"
              onChange={(e) => {
                handleExtraInfoChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Pets
          </label>
          <select
            id="pets"
            name="pets"
            onChange={(e) => {
              handleExtraInfoChange(e);
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
            Smoker
          </label>
          <select
            id="smoker"
            name="smoker"
            onChange={(e) => {
              handleExtraInfoChange(e);
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
            Do you have any adverse credit?
          </label>
          <select
            id="adverseCard"
            name="adverseCard"
            onChange={(e) => {
              handleExtraInfoChange(e);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="Max Rent"
            className="block text-sm font-medium text-gray-700"
          >
            Please enter any relevant information you think will support your
            application to rent the property
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="relevantInfo"
              id="relevantInfo"
              onChange={(e) => {
                handleExtraInfoChange(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtrainfoForm;
