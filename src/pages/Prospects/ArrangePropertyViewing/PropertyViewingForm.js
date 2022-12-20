import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import DetailsForm from "./FormPageDisplay/DetailsForm";
import PreferencesForm from "./FormPageDisplay/PreferencesForm";
import BookForm from "./FormPageDisplay/BookForm";
import ExtrainfoForm from "./FormPageDisplay/ExtrainfoForm";
import axios from "axios";

const PropertyViewingForm = () => {
  const statusData = ["current", "upcoming", "upcoming", "complete"];
  const [page, setPage] = useState(0);
  const [details, setDetails] = useState(page);
  const [preferences, setPreferences] = useState(page);
  const [extrainfo, setExtraInfo] = useState(page);
  const [book, setBook] = useState(page);
  const [formData, setFormData] = useState({
    propertyName: "Hoiston Villa",
    propertyAddress: "Hamilton Gardens, Glasgow, G12",
    propertyRent: "2345",
    beds: "5",
    baths: "10",
    propertyPic:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    propertyAvailableDate: "11/12/21",
    details: {},
    preferences: {},
    extraInfo: {},
    book: {},
  });

  useEffect(() => {
    if (page === 0) {
      setDetails(0);
      setPreferences(1);
      setExtraInfo(2);
      setBook(2);
    } else if (page === 1) {
      setDetails(3);
      setPreferences(0);
      setExtraInfo(2);
      setBook(2);
    } else if (page === 2) {
      setDetails(3);
      setPreferences(3);
      setExtraInfo(0);
      setBook(2);
    } else if (page === 3) {
      setDetails(3);
      setPreferences(3);
      setExtraInfo(3);
      setBook(0);
    }
  }, [page]);

  const PageDisplay = () => {
    if (page === 0) {
      return <DetailsForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PreferencesForm formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <ExtrainfoForm formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <BookForm formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3500/api/prospects`,
        formData
      );
      if (res.data) {
        alert("data has been posted to prospects");
        console.log(formData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const steps = [
    { id: "01", name: "Details", href: "#", status: statusData[details] },
    {
      id: "02",
      name: "Preferences",
      href: "#",
      status: statusData[preferences],
    },
    { id: "03", name: "Extra Info", href: "#", status: statusData[extrainfo] },
    { id: "04", name: "Book", href: "#", status: statusData[book] },
  ];
  return (
    <>
      <div className=" py-10 bg-gray-50">
        {/* Property Info */}

        <div className=" rounded-md shadow-md  w-1/2 mx-auto bg-white">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="p-0 rounded-t-md"
          />
          <div className=" flex justify-between pt-8 p-5">
            <div className=" space-y-2">
              <p className=" text-lg font-medium">£2,250 pcm</p>
              <p className="text-lg font-medium">
                Hamilton Gardens, Glasgow, G12
              </p>
              <p className="text-lg font-medium">Available: 14/12/22</p>
            </div>
            <div className="">
              <div className=" flex space-x-10">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="h-7 w-7 fill-lime-600"
                  >
                    <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                  </svg>
                  <p className="font-medium text-gray-600">6</p>
                </div>

                <div className="flex items-center space-x-2">
                  <svg
                    className="h-6 w-6 fill-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                  </svg>
                  <p className="font-medium text-gray-600">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto py-10">
          <p className=" font-medium text-center text-xl underline underline-offset-2">
            Let's get to know you a little better first, to ensure we find the
            right property for you
          </p>
        </div>

        {/* Steps */}

        <div className=" max-w-7xl mx-auto pt-5">
          <nav aria-label="Progress">
            <ol className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0 bg-white">
              {steps.map((step, stepIdx) => (
                <li key={step.name} className="relative md:flex md:flex-1">
                  {step.status === "complete" ? (
                    <a
                      href={step.href}
                      className="group flex w-full items-center"
                    >
                      <span className="flex items-center px-6 py-4 text-sm font-medium">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 group-hover:bg-green-800">
                          <CheckIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="ml-4 text-sm font-medium text-gray-900">
                          {step.name}
                        </span>
                      </span>
                    </a>
                  ) : step.status === "current" ? (
                    <a
                      href={step.href}
                      className="flex items-center px-6 py-4 text-sm font-medium"
                      aria-current="step"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-green-600">
                        <span className="text-green-600">{step.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-green-600">
                        {step.name}
                      </span>
                    </a>
                  ) : (
                    <a href={step.href} className="group flex items-center">
                      <span className="flex items-center px-6 py-4 text-sm font-medium">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                          <span className="text-gray-500 group-hover:text-gray-900">
                            {step.id}
                          </span>
                        </span>
                        <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                          {step.name}
                        </span>
                      </span>
                    </a>
                  )}

                  {stepIdx !== steps.length - 1 ? (
                    <>
                      {/* Arrow separator for lg screens and up */}
                      <div
                        className="absolute top-0 right-0 hidden h-full w-5 md:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-full w-full text-gray-300"
                          viewBox="0 0 22 80"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 -2L20 40L0 82"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentcolor"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Display Page */}

        <div className="max-w-4xl mx-auto pt-10 pb-10 border mt-10 p-5 rounded-md  shadow-md bg-white">
          {PageDisplay()}
        </div>

        {/* Buttons */}

        <div className=" max-w-7xl mx-auto">
          <span className="relative z-0 flex rounded-md justify-between mt-8 pb-8">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 shadow-md shadow-amber-800/50 cursor-pointer"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => {
                if (page === steps.length - 1) {
                  handleSubmit();
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 shadow-md shadow-amber-800/50 cursor-pointer"
            >
              <span className="sr-only">Next</span>
              {page === steps.length - 1 ? (
                "Submit"
              ) : (
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default PropertyViewingForm;
