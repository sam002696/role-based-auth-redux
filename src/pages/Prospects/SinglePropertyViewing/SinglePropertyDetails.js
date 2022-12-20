import React from "react";
import { Link } from "react-router-dom";

import tickMark from "../../../Images/Pros/Vector.png";

const posts = [
  {
    title: "277000",
    href: "#",
    category: { name: "Property 1", href: "#" },
    description: "277000",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "457000",
    href: "#",
    category: { name: "Property 2", href: "#" },
    description: "457000",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    title: "897000",
    href: "#",
    category: { name: "Property 3", href: "#" },
    description: "897000",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const SinglePropertyDetails = () => {
  return (
    <>
      <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 lg:min-h-[70vh] ">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="h-full  w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-30"
        />
      </div>

      <div className="bg-[#001427] px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-7xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 p-10 col-span-1 ">
              <div className="text-white text-3xl font-medium font-sans ">
                6391, Elgian St. Selina, Delwar 10299
              </div>
              <p className="text-gray-200 font-normal text-lg">
                Nuova System are proud to bring to the market this stunning
                three bed upper duplex property, situated within a fully
                refurbished townhouse and located in the exclusive Park Circus
                area, AVAILABLE 4TH NOVEMBER, FURNISHED.
              </p>
              <div className="mt-4 grid grid-cols-2 mb-2 ">
                <div className=" col-span-1">
                  <div className=" flex flex-col ">
                    <div className=" flex flex-row  space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="h-7 w-7 fill-white"
                      >
                        <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                      </svg>
                      <p className=" font-medium text-2xl text-gray-200">6</p>
                    </div>
                    <div>
                      <p className=" font-base text-xl text-slate-200 pt-1">
                        Bedrooms
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-span-1">
                  <div className=" flex flex-col ">
                    <div className=" flex flex-row  space-x-2 items-center">
                      <svg
                        className="h-6 w-6 fill-white "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                      </svg>
                      <p className=" font-medium text-2xl text-gray-200">5</p>
                    </div>
                    <div>
                      <p className=" font-base text-xl text-slate-200 pt-1">
                        Bathrooms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-10 col-span-1">
              <div className="space-y-1">
                <div className="text-white text-4xl font-semibold font-sans ">
                  £6,000 pcm
                </div>
                <p className="text-gray-200 font-semibold text-xl">
                  Deposit - £9000
                </p>
                <p className="text-gray-200 font-medium text-md">
                  (EXCLUDES ALL ADDITIONAL BILLS)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-200 font-semibold text-2xl">
                  See this property for real
                </p>
                <p className="text-gray-200 font-medium text-md">
                  Click the link below for more details or directly call one of
                  our friendly agents.
                </p>
              </div>
              <div className="grid grid-cols-5 items-center hover:bg-slate-600">
                <div className=" col-span-2">
                  <Link to="/arrange-property-viewing/1234567">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium  shadow-sm text-white bg-purple-700 hover:bg-cyan-700 "
                    >
                      Arrange a Viewing
                    </button>
                  </Link>
                </div>
                <div className="col-span-3 mx-5">
                  <p className=" text-gray-100 group-hover:text-white text-2xl font-light">
                    014 1234 987
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEE] px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-7xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 p-10 col-span-1 ">
              <div className="text-gray-700 text-3xl font-medium font-sans ">
                Property Description
              </div>
              <p className="text-gray-700 font-normal text-lg">Description</p>
              <p className="text-gray-600 font-normal text-md text-justify">
                Tay Letting are proud to bring to the market this stunning three
                bed upper duplex property, situated within a fully refurbished
                townhouse and located in the exclusive Park Circus area,
                AVAILABLE 4TH NOVEMBER, FURNISHED. Internally the lower level
                accommodation comprises of a superb lounge that overlooks the
                residents gardens and is open plan to an exceptional fully
                integrated and contemporary kitchen with centre island and also
                offers a dining area with views over the private residents
                gardens. There are two good sized double bedrooms located on
                this floor, both with an en-suite shower rooms and both
                benefitting from fitted wardrobes. A utility cupboard and
                cloakroom completes the lower level accommodation. The upper
                level houses a beautiful master bedroom suite with walk in
                wardrobes and a breathtaking fully tiled en-suite four piece
                bathroom, with large walk in shower cubicle with rainfall shower
                and a stand alone bath. A secondary lounge or TV room with pool
                table and a stunning glass cupola comletes the accomodation. The
                property further benefits from underfloor heating throughout,
                double glazed sash and case windows, intruder alarm system,
                secure video entry system and access to the residents private
                pleasure gardens to the front and on street permit parking is
                also available on request via Glasgow City Council. Park Circus
                is ideally located for the City Centre and West End districts
                with its extensive shops, bars, bistros, restaurants and
                amenities. There are excellent public transport services via
                bus, rail and underground which compliment road links to City
                Centre and M8 motorway network. The West End district is a
                trendy, hustle bustle of activity which attracts young
                professionals and families alike. Nearby Byres Road offers
                excellent wonderful selection of boutique shopping, wine bars
                and restaurants. The Finnieston district can be found a short
                distance away, to which a further selection of shops, bars and
                restaurants can be found, to which some have recently featured
                in the Michelin Guide. A host of other West End attractions are
                also within easy reach including Kelvingrove Park, Kelvingrove
                Museum & Art Gallery and Glasgow University. There is also well
                regarded schooling close by at both primary and secondary level.
                Viewing comes highly recommended to appreciated the true quality
                of finish and specification of what is one of the finest
                properties to hit the rental market. Council tax band: F, EPC
                rating: B Landlord Registration Number: 1449903/260/23072.
                Letting Agent Registration Number: 1905058.
              </p>
            </div>

            <div className="space-y-8 p-10 col-span-1 mt-12">
              <div className="text-[#162A43] text-2xl font-medium font-sans mb-10">
                Key Features
              </div>

              <ul className=" space-y-5">
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Double Glazing
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Shower
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Secure Entryphone
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Alarm
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Nice Views
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Furnished
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Council Tax Band F
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Underfloor Heating
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  No Pets
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  On Street Permit Parking
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Private Residents Gardens
                </li>
                <li className="font-normal text-lg text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-2 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Built in wardrobes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}

          <div className="space-y-10 p-12">
            <div className="text-black font-medium text-4xl text-center font-mono tracking-wider">
              <h1 className="leading-snug">More Properties</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-8 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="mt-4 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-7xl">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-56 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-800">
                        <span className=" text-3xl font-semibold ">&#163;</span>
                        {post.title}
                      </p>
                    </a>
                  </div>

                  <div className="mt-4 grid grid-cols-3 mb-2 ">
                    <div className=" col-span-1">
                      <div className=" flex flex-col ">
                        <div className=" flex flex-row  space-x-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            className="h-7 w-7 fill-slate-600"
                          >
                            <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                          </svg>
                          <p className=" font-medium text-2xl text-gray-500">
                            6
                          </p>
                        </div>
                        <div>
                          <p className=" font-base text-xl text-slate-400 pt-1">
                            Bedrooms
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-span-1">
                      <div className=" flex flex-col ">
                        <div className=" flex flex-row  space-x-2 items-center">
                          <svg
                            className="h-6 w-6 fill-slate-600 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                          </svg>
                          <p className=" font-medium text-2xl text-gray-500">
                            5
                          </p>
                        </div>
                        <div>
                          <p className=" font-base text-xl text-slate-400 pt-1">
                            Bathrooms
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-span-1">
                      <div className=" flex flex-col ">
                        <div className=" flex flex-row  space-x-2 items-center ">
                          <svg
                            className="h-7 w-7 fill-slate-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 32C433.7 32 448 46.33 448 64V128C448 145.7 433.7 160 416 160V352C433.7 352 448 366.3 448 384V448C448 465.7 433.7 480 416 480H352C334.3 480 320 465.7 320 448H128C128 465.7 113.7 480 96 480H32C14.33 480 0 465.7 0 448V384C0 366.3 14.33 352 32 352V160C14.33 160 0 145.7 0 128V64C0 46.33 14.33 32 32 32H96C113.7 32 128 46.33 128 64H320C320 46.33 334.3 32 352 32H416zM368 80V112H400V80H368zM96 160V352C113.7 352 128 366.3 128 384H320C320 366.3 334.3 352 352 352V160C334.3 160 320 145.7 320 128H128C128 145.7 113.7 160 96 160zM48 400V432H80V400H48zM400 432V400H368V432H400zM80 112V80H48V112H80z" />
                          </svg>
                          <p className=" font-medium text-2xl text-gray-500">
                            500m
                          </p>
                        </div>
                        <div>
                          <p className=" font-base text-xl text-slate-400 pt-1">
                            Living Area
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-gray-100 group hover:bg-slate-600 pt-5 pb-5 pl-6  gap-x-8">
                  <div className="col-span-2">
                    <div className=" flex flex-row items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className=" text-gray-500 group-hover:text-white text-xl font-light">
                        6391, Elgian St. Selina, Delwar 10299
                      </p>
                    </div>
                  </div>
                  <div className=" col-span-1">
                    <Link to="/single-property-viewing/1234567">
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-2 border border-transparent text-md font-medium shadow-sm text-white bg-[#001427] hover:bg-[#041320] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePropertyDetails;
