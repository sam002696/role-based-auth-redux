import React, { useEffect, useState } from "react";

const SetThree = ({ formData, setFormData }) => {
  const [roomsArray, setRoomsArray] = useState([]);
  const [furnished, setFurnished] = useState("");
  const [pets, setPets] = useState("");
  const [propertyLet, setToLet] = useState("");
  const [acceptStudents, setAcceptStudents] = useState("");
  const [featuresAndAppliancesArray, setfeaturesAndAppliancesArray] = useState(
    []
  );

  const [landlordInfo, setLandlordInfo] = useState({
    landlordName: "",
    landlordEmail: "",
    landlordPhone: "",
  });

  const [propertyDetails, setPropertyDetails] = useState({
    propertyFloor: "",
    propertyEstimatedValue: "",
    livingArea: "",
    bedroom: "",
    bathroom: "",
    availabilityDate: "",
    propertyFurnished: "",
    propertyAddress: "",
    councilTaxBand: "",
    petsPermission: "",
    studentsAccept: "",
    toLet: "",
    rooms: "",
    roomsOther: "",
    featuresAndAppliances: "",
    featuresAndAppliancesOther: "",
    externalAreasFacilities: "",
    sharedAreasFacilities: "",
    excludedAreaFacilities: "",
    permitSuppliedBy: "",
    spaceNumber: "",
    permitsPerProperty: "",
    spaceLocation: "",
    entryCode: "",
    remoteFob: "",
    suppliedBy: "",
  });
  const services = [
    { unitName: "", beds: "", baths: "", size: "", marketRent: "" },
  ];
  const [serviceList, setServiceList] = useState(services);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([
      ...serviceList,
      { unitName: "", beds: "", baths: "", size: "", marketRent: "" },
    ]);
  };

  const handleFurnishChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setFurnished(value);
    } else {
      setFurnished(furnished.filter((e) => e !== value));
    }
  };

  const handlePetsChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setPets(value);
    }
  };
  const handleToLetChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setToLet(value);
    }
  };
  const handleStudentsChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setAcceptStudents(value);
    }
  };

  const handleRoomChange = (e) => {
    const value = e.target.name;
    const checked = e.target.checked;
    if (checked) {
      setRoomsArray([...roomsArray, value]);
    }
  };

  const handleFeaturesAppliancesChange = (e) => {
    const value = e.target.name;
    const checked = e.target.checked;
    if (checked) {
      setfeaturesAndAppliancesArray([...featuresAndAppliancesArray, value]);
    } else {
      setfeaturesAndAppliancesArray(
        featuresAndAppliancesArray.filter((e) => e !== value)
      );
    }
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleLandlordInfoChange = (e) => {
    const { name, value } = e.target;
    setLandlordInfo({ ...landlordInfo, [name]: value });
  };

  useEffect(() => {
    setPropertyDetails({
      ...propertyDetails,
      rooms: roomsArray,
      featuresAndAppliances: featuresAndAppliancesArray,
      propertyFurnished: furnished,
      petsPermission: pets,
      studentsAccept: acceptStudents,
      toLet: propertyLet,
    });
  }, [
    roomsArray,
    featuresAndAppliancesArray,
    furnished,
    pets,
    acceptStudents,
    propertyLet,
  ]);

  useEffect(() => {
    setFormData({
      ...formData,
      units: serviceList,
      propertyDetails: propertyDetails,
      landlordInfo: landlordInfo,
    });
  }, [serviceList, propertyDetails, landlordInfo]);

  console.log(propertyDetails);
  // console.log(formData);
  return (
    <>
      {formData?.propertyType === "HMO" ? (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5 text-center mt-14">
            <h1 className=" font-medium text-2xl text-[#162A43] underline underline-offset-4">
              Let's add the units for the property
            </h1>
            <p className="  font-normal text-lg text-[#565151] mt-5 underline underline-offset-4">
              Add all your units below
            </p>
          </div>
          <form className="pt-14 relative pl-20">
            {serviceList.map((singleService, index) => (
              <>
                <div class="grid gap-6 mb-6 lg:grid-cols-7">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      No.
                    </label>
                    <div class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 ">
                      {index}
                    </div>
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Unit Name
                    </label>
                    <input
                      type="text"
                      name="unitName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="unit 1"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Beds
                    </label>
                    <input
                      type="text"
                      name="beds"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="3"
                      onChange={(e) => handleServiceChange(e, index)}
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="company"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Baths
                    </label>
                    <input
                      type="text"
                      name="baths"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="2"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Size
                    </label>
                    <input
                      type="tel"
                      name="size"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="2000"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  <div>
                    <label
                      for="website"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Market Rent
                    </label>
                    <input
                      type="url"
                      name="marketRent"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="$2000.00"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  {serviceList.length !== index && (
                    <div className="mb-5">
                      <label
                        for="website"
                        class="block mb-4 text-sm font-medium text-gray-900 "
                      >
                        Action
                      </label>
                      <button
                        type="button"
                        disabled={serviceList.length - 1 === 0}
                        onClick={() => handleServiceRemove(index)}
                        className=" disabled:cursor-not-allowed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6  text-center"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="red"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {serviceList.length - 1 === index && (
                  <div className=" w-1/6 absolute right-0">
                    <button
                      type="button"
                      onClick={handleServiceAdd}
                      className=" flex flex-row items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#0088A3"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span className="text-cyan-600 underline underline-offset-1 text-lg font-semibold">
                        Add Another Unit
                      </span>
                    </button>
                  </div>
                )}
              </>
            ))}
          </form>
        </div>
      ) : (
        <form>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-5 text-center mt-14">
              <h1 className=" font-medium text-2xl text-[#162A43] underline underline-offset-4">
                Property details
              </h1>
              <p className="  font-normal text-lg text-[#565151] mt-5">
                Add your property details
              </p>
            </div>
            <div className=" mt-8">
              <div className="space-y-6">
                <div>
                  <p className=" text-2xl text-gray-700 font-semibold underline pl-1">
                    Property
                  </p>
                </div>

                {/* Property Floor */}

                <div className="grid grid-cols-3 gap-x-5">
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Property floor (e.g. ground floor)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="propertyFloor"
                        id="propertyFloor"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Property estimated value
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="propertyEstimatedValue"
                        id="propertyEstimatedValue"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <fieldset>
                      <div className="space-x-3 mt-7">
                        <input
                          type="radio"
                          id="furnishChoice1"
                          name="propertyFurnished"
                          value="furnsished"
                          onChange={(e) => handleFurnishChange(e)}
                        />
                        <label for="contactChoice1">Furnished</label>

                        <input
                          type="radio"
                          id="furnishChoice2"
                          name="propertyFurnished"
                          value="unfurnished"
                          onChange={(e) => handleFurnishChange(e)}
                        />
                        <label for="contactChoice2">Unfurnished</label>
                      </div>
                    </fieldset>
                  </div>
                </div>

                {/* Area , bedroom , bathroom */}

                <div className="grid grid-cols-3 gap-x-5">
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Living Area (m<sup>2</sup>)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="livingArea"
                        id="livingArea"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bedrooms
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="bedroom"
                        id="bedroom"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bathrooms
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="bathroom"
                        id="bathroom"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Address */}

                <div className="grid grid-cols-2 gap-x-5 pt-3">
                  <div>
                    <label
                      htmlFor="propertyAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Property address (as registered with local authority)
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="propertyAddress"
                        name="propertyAddress"
                        onChange={(e) => handleDetailsChange(e)}
                        rows={5}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Council Tax band
                    </label>
                    <select
                      id="councilTaxBand"
                      name="councilTaxBand"
                      onChange={(e) => handleDetailsChange(e)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    >
                      <option>Select</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                      <option>F</option>
                      <option>G</option>
                      <option>H</option>
                    </select>
                    <div className=" mt-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Availability date
                      </label>
                      <input
                        type="date"
                        id="availabilityDate"
                        name="availabilityDate"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Landlord info */}

                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  Landlord Info
                </h1>

                <div className="grid grid-cols-3 gap-x-5">
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Landlord name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="landlordName"
                        id="landlordName"
                        onChange={(e) => handleLandlordInfoChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Landlord email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="landlordEmail"
                        id="landlordEmail"
                        onChange={(e) => handleLandlordInfoChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="propertyFloor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Landlord phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="landlordPhone"
                        id="landlordPhone"
                        onChange={(e) => handleLandlordInfoChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Pets */}

                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  Pets
                </h1>

                <div className="grid grid-cols-2 gap-x-2">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="petsYes"
                        name="petsPermission"
                        type="radio"
                        value="I/We would consider allowing tenants to have pets"
                        onChange={(e) => handlePetsChange(e)}
                        className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="petsYes"
                        className="font-medium text-gray-700"
                      >
                        I/We would consider allowing tenants to have pets
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="petsNo"
                        name="petsPermission"
                        type="radio"
                        onChange={(e) => handlePetsChange(e)}
                        value="I/We would not permit any pets within this property"
                        className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="petsNo"
                        className="font-medium text-gray-700"
                      >
                        I/We would not permit any pets within this property
                      </label>
                    </div>
                  </div>
                </div>

                {/* Students */}

                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  Students
                </h1>

                <div className="grid grid-cols-3 gap-x-2">
                  <div className="font-medium text-gray-700 text-sm">
                    Are students accepted?
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="studentsAcceptance"
                        name="studentsAccept"
                        type="radio"
                        value="yes"
                        onChange={(e) => handleStudentsChange(e)}
                        className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="studentsAcceptance"
                        className="font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="studentsAcceptance"
                        name="studentsAccept"
                        type="radio"
                        value="no"
                        onChange={(e) => handleStudentsChange(e)}
                        className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="studentsAcceptance"
                        className="font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* To Let */}

                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  To Let
                </h1>
                <div className="grid grid-cols-3 gap-x-2">
                  <div className="font-medium text-gray-700 text-sm">
                    Can a ‘To Let’ board be used?
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="tolet1"
                        name="toLet"
                        type="radio"
                        value="yes"
                        onChange={(e) => handleToLetChange(e)}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="tolet1"
                        className="font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="tolet2"
                        name="toLet"
                        type="radio"
                        value="no"
                        onChange={(e) => handleToLetChange(e)}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="tolet2"
                        className="font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="pt-20">
                  <p className="text-2xl text-gray-700 font-semibold underline pl-1">
                    Property Details
                  </p>
                </div>

                {/* Rooms */}

                <div>
                  <h1 className="text-xl font-semibold leading-6 text-gray-900">
                    Rooms
                  </h1>
                  <p className=" italic text-lg pt-3">Number as appropriate</p>
                </div>

                <div className="grid grid-cols-4 gap-x-2">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="doublebedroom"
                        aria-describedby="doublebedroom"
                        name="double bedroom"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="doublebedroom"
                        className="font-medium text-gray-700"
                      >
                        Double bedroom
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="livingsittingroom"
                        aria-describedby="livingsittingroom"
                        name="Living/Sitting room"
                        onChange={(e) => handleRoomChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="livingsittingroom"
                        className="font-medium text-gray-700"
                      >
                        Living/Sitting room
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="bathroomwithshower"
                        aria-describedby="bathroomwithshower"
                        name="Bathroom (with shower)"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="bathroomwithshower"
                        className="font-medium text-gray-700"
                      >
                        Bathroom (with shower)
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="showerroom"
                        aria-describedby="Shower room"
                        name="showerroom"
                        onChange={(e) => handleRoomChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="showerroom"
                        className="font-medium text-gray-700"
                      >
                        Shower room
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="singlebedroom"
                        aria-describedby="singlebedroom"
                        onChange={(e) => handleRoomChange(e)}
                        name="Single Bedroom"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="singlebedroom"
                        className="font-medium text-gray-700"
                      >
                        Single bedroom
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="openplankitchen"
                        aria-describedby="openplankitchen"
                        name="Open plan kitchen/Living"
                        onChange={(e) => handleRoomChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="openplankitchen"
                        className="font-medium text-gray-700"
                      >
                        Open plan kitchen/Living
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="bathroomwithbathonly"
                        aria-describedby="bathroomwithbathonly"
                        name="Bathroom (with bath only)"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="bathroomwithbathonly"
                        className="font-medium text-gray-700"
                      >
                        Bathroom (with bath only)
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="seperatewc"
                        aria-describedby="seperatewc"
                        name="Separate WC"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="seperatewc"
                        className="font-medium text-gray-700"
                      >
                        Separate WC
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="boxroom"
                        aria-describedby="boxroom"
                        name="Box room"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="boxroom"
                        className="font-medium text-gray-700"
                      >
                        Box room
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="seperateKitchen"
                        aria-describedby="seperateKitchen"
                        name="Separate kitchen"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="seperateKitchen"
                        className="font-medium text-gray-700"
                      >
                        Separate kitchen
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="ensuiteBathroom"
                        aria-describedby="ensuiteBathroom"
                        name="En-suite bathroomm"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="ensuiteBathroom"
                        className="font-medium text-gray-700"
                      >
                        En-suite bathroom
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="utilityRoom"
                        aria-describedby="utilityRoom"
                        name="Utility room"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="utilityRoom"
                        className="font-medium text-gray-700"
                      >
                        Utility room
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="studyOffice"
                        aria-describedby="studyOffice"
                        name="Study/Office"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="studyOffice"
                        className="font-medium text-gray-700"
                      >
                        Study/Office
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="diningRoom"
                        aria-describedby="diningRoom"
                        name="Dining room"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="diningRoom"
                        className="font-medium text-gray-700"
                      >
                        Dining room
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="enSuiteShowerRoom"
                        aria-describedby="enSuiteShowerRoom"
                        name="En-suite shower room"
                        type="checkbox"
                        onChange={(e) => handleRoomChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="enSuiteShowerRoom"
                        className="font-medium text-gray-700"
                      >
                        En-suite shower room
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="otherSpecify"
                    className="block text-sm font-medium text-gray-700 pb-2 mr-5"
                  >
                    Other (please specify)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="roomsOther"
                      onChange={(e) => handleDetailsChange(e)}
                      id="otherSpecify"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>

                <hr className=" border-1 border-gray-400" />

                {/* Features and Appliances */}

                <div>
                  <h1 className="text-xl font-semibold leading-6 text-gray-900">
                    Features and Appliances
                  </h1>
                </div>
                <div className="grid grid-cols-4 gap-x-2">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="gascentralheating"
                        aria-describedby="gascentralheating"
                        name="Gas central heating"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="gascentralheating"
                        className="font-medium text-gray-700"
                      >
                        Gas central heating
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="whitemeterheating"
                        aria-describedby="whitemeterheating"
                        name="White meter heating"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="whitemeterheating"
                        className="font-medium text-gray-700"
                      >
                        White meter heating
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="electricCentralHeating"
                        aria-describedby="electricCentralHeating"
                        name="Electric central heating"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="electricCentralHeating"
                        className="font-medium text-gray-700"
                      >
                        Electric central heating
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="underFloorHeating"
                        aria-describedby="underFloorHeating"
                        name="Under floor heating"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="underFloorHeating"
                        className="font-medium text-gray-700"
                      >
                        Under floor heating
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="doubleGazing"
                        aria-describedby="doubleGazing"
                        name="Double glazing"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="doubleGazing"
                        className="font-medium text-gray-700"
                      >
                        Double glazing
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="tumbleDryer"
                        aria-describedby="tumbleDryer"
                        name="Tumble dryerr"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="tumbleDryer"
                        className="font-medium text-gray-700"
                      >
                        Tumble dryer
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="dishwasher"
                        aria-describedby="dishwasher"
                        name="Dishwasher"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="dishwasher"
                        className="font-medium text-gray-700"
                      >
                        Dishwasher
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="tv"
                        aria-describedby="tv"
                        name="TV"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="tv" className="font-medium text-gray-700">
                        TV
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="balconyTerrace"
                        aria-describedby="balconyTerrace"
                        name="Balcony/Terrace"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="balconyTerrace"
                        className="font-medium text-gray-700"
                      >
                        Balcony/Terrace
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="privateGarden"
                        aria-describedby="privateGarden"
                        name="Private garden"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="privateGarden"
                        className="font-medium text-gray-700"
                      >
                        Private garden
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="sharedGarden"
                        aria-describedby="sharedGarden"
                        name="Shared Garden"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="sharedGarden"
                        className="font-medium text-gray-700"
                      >
                        Shared Garden
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="washingMachine"
                        aria-describedby="washingMachine"
                        name="Washing machine"
                        type="checkbox"
                        onChange={(e) => handleFeaturesAppliancesChange(e)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="washingMachine"
                        className="font-medium text-gray-700"
                      >
                        Washing machine
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" grid grid-cols-2 gap-5 pt-5">
                  <div className="col-span-1">
                    <label
                      htmlFor="otherFandA"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Other (please specify)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="featuresAndAppliancesOther"
                        onChange={(e) => handleDetailsChange(e)}
                        id="otherFandA"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="otherExternalAreasandFacilities"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Other external areas/facilities included with the let
                      property?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="externalAreasFacilities"
                        id="externalAreasFacilities"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="sharedAreasFacilities"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Any shared areas/facilities included with the let
                      property?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="sharedAreasFacilities"
                        id="sharedAreasFacilities"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="excludedAreaorFacilities"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Any excluded area/facilities?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="excludedAreaFacilities"
                        id="excludedAreaFacilities"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <hr className=" border-1 border-gray-400" />

                {/* Parking */}

                <div>
                  <h1 className="text-xl font-semibold leading-6 text-gray-900">
                    Parking
                  </h1>
                </div>

                <div className=" grid grid-cols-3 gap-5 pt-2">
                  <div className="col-span-1">
                    <label
                      htmlFor="permitSuppliedBy"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Permit supplied by
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="permitSuppliedBy"
                        id="permitSuppliedBy"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="spaceNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Space number
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="spaceNumber"
                        onChange={(e) => handleDetailsChange(e)}
                        id="spaceNumber"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="permitsPerProperty"
                      className="block text-sm font-medium text-gray-700"
                    >
                      No. of permits per property
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="permitsPerProperty"
                        id="permitsPerProperty"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="spaceLocation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Space location
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="spaceLocation"
                        id="spaceLocation"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="entryCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Entry Code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="entryCode"
                        id="entryCode"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-900 ">
                      Remote/Fob required
                    </label>
                    <select
                      id="remoteFob"
                      name="remoteFob"
                      onChange={(e) => handleDetailsChange(e)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    >
                      <option>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Supplied by
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="suppliedBy"
                        id="suppliedBy"
                        onChange={(e) => handleDetailsChange(e)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <hr className=" border-1 border-gray-400" />
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default SetThree;
