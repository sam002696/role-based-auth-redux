import React, { useEffect, useState } from "react";
import Select from "react-select";
import MakeAnimated from "react-select/animated/dist/react-select-animated.cjs";

const options = [
  { value: "modern", label: "modern" },
  { value: "brand new", label: "brand new" },
  { value: "traditional", label: "traditional" },
  { value: "Recently refurbished", label: "Recently refurbished" },
  { value: "Standard condition", label: "Standard condition" },
  { value: "Kitchen/Diner", label: "Kitchen/Diner" },
  { value: "Kitchen", label: "Kitchen" },
  { value: "Living Room", label: "Living Room" },
  { value: "Reception", label: "Reception" },
  { value: "Study/Office", label: "Study/Office" },
  { value: "Utility/Laundry room", label: "Utility/Laundry room" },
  { value: "Private garden", label: "Private garden" },
  { value: "Garage", label: "Garage" },
  { value: "Driveway", label: "Driveway" },
  { value: "Allocated Parking", label: "Allocated Parking" },
  { value: "Permit Parking", label: "Permit Parking" },
  { value: "Dishwasher", label: "Dishwasher" },
  { value: "Washer", label: "Washer" },
  { value: "Dryer", label: "Dryer" },
  { value: "Gas central heating", label: "Gas central heating" },
  { value: "Electric Heating", label: "Electric Heating" },
  { value: "Lift access", label: "Lift access" },
  { value: "Smoke alarms", label: "Smoke alarms" },
  { value: "Swimming Pool", label: "Swimming Pool" },
  { value: "Gym", label: "Gym" },
];
const SetFive = ({ formData, setFormData }) => {
  const [features, setFeatures] = useState([]);
  const [briefDesc, setBriefDesc] = useState({
    briefDesc: "",
  });
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setBriefDesc({ ...briefDesc, [name]: value });
  };
  useEffect(() => {
    setFormData({
      ...formData,
      keyFeatures: features,
      briefDesc: briefDesc,
    });
  }, [features, briefDesc]);
  console.log(features);
  return (
    <>
      <div className=" text-center my-14">
        <h1 className=" font-medium text-2xl text-[#162A43] underline underline-offset-4">
          Property description
        </h1>
      </div>
      <div className="my-14">
        <Select
          options={options}
          onChange={setFeatures}
          components={MakeAnimated()}
          isMulti
          className="w-1/2 mx-auto rounded-md focus:border-cyan-400"
          closeMenuOnSelect={false}
          placeholder="Select some key feautures of the property"
          styles={false}
          isSearchable
        />
      </div>

      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Add brief description of the property
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            onChange={(e) => {
              handleAddressChange(e);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SetFive;
