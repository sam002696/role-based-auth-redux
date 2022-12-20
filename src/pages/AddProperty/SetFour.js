import React, { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SetFour = ({ formData, setFormData }) => {
  const [imgOne, setFirstImg] = useState();
  const [pictureFirst, setPictureFirst] = useState();
  const [imgSecond, setSecondImg] = useState();
  const [pictureSecond, setPictureSecond] = useState();
  const [imgThird, setThirdImg] = useState();
  const [pictureThird, setPictureThird] = useState();
  const [imgFourth, setFourthImg] = useState();
  const [pictureFourth, setPictureFourth] = useState();

  const [allPictures, setAllPictures] = useState({
    pictureFirst: "",
    pictureSecond: "",
    pictureThird: "",
    pictureFourth: "",
  });

  const onFirstImageChange = (e) => {
    const [file1] = e.target.files;
    setFirstImg(URL.createObjectURL(file1));
    setPictureFirst(file1);
  };
  const onSecondImageChange = (e) => {
    const [file2] = e.target.files;
    setSecondImg(URL.createObjectURL(file2));
    setPictureSecond(file2);
  };
  const onThirdImageChange = (e) => {
    const [file3] = e.target.files;
    setThirdImg(URL.createObjectURL(file3));
    setPictureThird(file3);
  };
  const onFourthImageChange = (e) => {
    const [file4] = e.target.files;
    setFourthImg(URL.createObjectURL(file4));
    setPictureFourth(file4);
  };

  useEffect(() => {
    setAllPictures({
      pictureFirst: pictureFirst,
      pictureSecond: pictureSecond,
      pictureThird: pictureThird,
      pictureFourth: pictureFourth,
    });
  }, [pictureFirst, pictureSecond, pictureThird, pictureFourth]);

  useEffect(() => {
    setFormData({
      ...formData,
      images: allPictures,
    });
  }, [allPictures]);

  const files = [
    {
      name: "IMG_4985o.HEIC",
      size: "3.9 MB",
      source: imgOne,
      current: true,
    },
    {
      name: "IMG_4985h.HEIC",
      size: "3.9 MB",
      source: imgSecond,
      current: true,
    },
    {
      name: "IMG_4985w.HEIC",
      size: "3.9 MB",
      source: imgThird,
      current: true,
    },
    {
      name: "IMG_4985rf.HEIC",
      size: "3.9 MB",
      source: imgFourth,
      current: true,
    },
  ];
  console.log(formData);

  return (
    <>
      <div className="text-center pt-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 mx-auto text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <h3 className="mt-2 text-xl font-medium text-gray-900">
          Choose images from your gallery
        </h3>
        <p className="mt-1 text-lg text-gray-500 pb-8">
          Get started by adding images.
        </p>
        <div className="mt-6 grid grid-cols-4 gap-4">
          <button
            type="button"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset- cursor-pointer"
          >
            <label for="dropzone-file-data-one">
              <input
                type="file"
                name=""
                id="dropzone-file-data-one"
                className="hidden cursor-pointer"
                onChange={onFirstImageChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-gray-500 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="mt-2 block text-sm font-medium text-gray-900">
                Choose a new image
              </span>
            </label>
          </button>
          <button
            type="button"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset- cursor-pointer"
          >
            <label for="dropzone-file-data-two">
              <input
                type="file"
                name=""
                id="dropzone-file-data-two"
                className="hidden cursor-pointer"
                onChange={onSecondImageChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-gray-500 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="mt-2 block text-sm font-medium text-gray-900">
                Choose a new image
              </span>
            </label>
          </button>
          <button
            type="button"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset- cursor-pointer"
          >
            <label for="dropzone-file-data-three">
              <input
                type="file"
                name=""
                id="dropzone-file-data-three"
                className="hidden cursor-pointer"
                onChange={onThirdImageChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-gray-500 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="mt-2 block text-sm font-medium text-gray-900">
                Choose a new image
              </span>
            </label>
          </button>
          <button
            type="button"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset- cursor-pointer"
          >
            <label for="dropzone-file-data-four">
              <input
                type="file"
                name=""
                id="dropzone-file-data-four"
                className="hidden cursor-pointer"
                onChange={onFourthImageChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-gray-500 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="mt-2 block text-sm font-medium text-gray-900">
                Choose a new image
              </span>
            </label>
          </button>
        </div>
        <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Recently viewed
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {files.map((file) => (
              <li key={file.name} className="relative">
                <div
                  className={classNames(
                    file.source
                      ? "ring-2 ring-offset-2 ring-cyan-500"
                      : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500",
                    "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                  )}
                >
                  <img
                    src={file.source ? file.source : null}
                    alt=""
                    className={classNames(
                      file.source ? "" : "group-hover:opacity-75",
                      "object-cover pointer-events-none"
                    )}
                  />
                  {/* <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.name}
                    </span>
                  </button> */}
                </div>
                {/* <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {file.name}
                </p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">
                  {file.size}
                </p> */}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default SetFour;
