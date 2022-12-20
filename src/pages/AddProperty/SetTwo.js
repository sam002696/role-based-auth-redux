import React, { useEffect, useState } from "react";

const SetTwo = ({ formData, setFormData }) => {
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
  useEffect(() => {
    setFormData({
      ...formData,
      units: serviceList,
    });
  }, [serviceList]);
  return (
    <>
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
    </>
  );
};

export default SetTwo;
