import React, { useState } from "react";

const SetZero = ({ formData, setFormData }) => {
  const [residential, setResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [singleFamily, setSingleFamily] = useState(false);
  const [multiFamily, setMultiFamily] = useState(false);
  const [condo, setCondo] = useState(false);
  const [townhome, setTownhome] = useState(false);
  const [others, setOthers] = useState(false);
  const [semiDetached, setSemiDetached] = useState(false);
  const [endTerraced, setEndTerraced] = useState(false);
  const [coachHouse, setCoachHouse] = useState(false);
  const [HMO, setHMO] = useState(false);
  const handleResidential = () => {
    setResidential(!residential);
    setFormData({ ...formData, property: "residential" });
  };
  const handleCommercial = () => {
    setCommercial(!commercial);
    setFormData({ ...formData, property: "commercial" });
  };
  const handleSingleFamily = () => {
    setSingleFamily(!singleFamily);
    setFormData({ ...formData, propertyType: "single family" });
  };
  const handleMultiFamily = () => {
    setMultiFamily(!multiFamily);
    setFormData({ ...formData, propertyType: "multi family" });
  };
  const handleCondo = () => {
    setCondo(!condo);
    setFormData({ ...formData, propertyType: "condo" });
  };
  const handleTownHome = () => {
    setTownhome(!townhome);
    setFormData({ ...formData, propertyType: "town home" });
  };
  const handleOthers = () => {
    setOthers(!others);
    setFormData({ ...formData, propertyType: "others" });
  };
  const handleSemiDetached = () => {
    setSemiDetached(!semiDetached);
    setFormData({ ...formData, propertyType: "semiDetached" });
  };
  const handleEndTerraced = () => {
    setEndTerraced(!endTerraced);
    setFormData({ ...formData, propertyType: "endTerraced" });
  };
  const handleCoachHouse = () => {
    setCoachHouse(!coachHouse);
    setFormData({ ...formData, propertyType: "coachHouse" });
  };
  const handleHMO = () => {
    setHMO(!HMO);
    setFormData({ ...formData, propertyType: "HMO" });
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <section className="max-w-5xl mx-auto">
        <div className="space-y-5 text-center mt-16">
          <h1 className=" font-medium text-3xl text-[#162A43]">
            Let's add your property
          </h1>
          <p className="  font-normal text-lg text-[#565151] mt-5">
            Which kind of property do you manage?
          </p>
        </div>
        <div className="relative z-10 p-4 mt-8">
          <div className="flex flex-row space-x-5 justify-center">
            <button
              onClick={handleResidential}
              disabled={commercial === true}
              className={classNames(
                residential ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed"
              )}
            >
              {residential && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 absolute top-5 right-5 "
                  viewBox="0 0 20 20"
                  fill="#00A3A3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}

              <div className="font-medium text-slate-900">
                <svg
                  className="h-12 w-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M243.4 2.587C251.4-.8625 260.6-.8625 268.6 2.587L492.6 98.59C506.6 104.6 514.4 119.6 511.3 134.4C508.3 149.3 495.2 159.1 479.1 160V168C479.1 181.3 469.3 192 455.1 192H55.1C42.74 192 31.1 181.3 31.1 168V160C16.81 159.1 3.708 149.3 .6528 134.4C-2.402 119.6 5.429 104.6 19.39 98.59L243.4 2.587zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM127.1 416H167.1V224H231.1V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V224H127.1V416z" />
                </svg>
              </div>

              <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                Residential
              </div>
            </button>
            <button
              onClick={handleCommercial}
              onChange={() => {
                setFormData({ ...formData, property: "commercial" });
              }}
              disabled={residential === true}
              className={classNames(
                commercial ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed"
              )}
            >
              {commercial && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 absolute top-5 right-5 "
                  viewBox="0 0 20 20"
                  fill="#00A3A3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}

              <div className="font-medium text-slate-900">
                <svg
                  className="h-12 w-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M336 0C362.5 0 384 21.49 384 48V367.8C345.8 389.2 320 430 320 476.9C320 489.8 323.6 501.8 329.9 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272zM576 272C576 316.2 540.2 352 496 352C451.8 352 416 316.2 416 272C416 227.8 451.8 192 496 192C540.2 192 576 227.8 576 272zM352 477.1C352 425.7 393.7 384 445.1 384H546.9C598.3 384 640 425.7 640 477.1C640 496.4 624.4 512 605.1 512H386.9C367.6 512 352 496.4 352 477.1V477.1z" />
                </svg>
              </div>

              <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                Commercial
              </div>
            </button>
          </div>
        </div>
      </section>

      {(residential || commercial) && (
        <section className="max-w-5xl mx-auto">
          <div className="space-y-5 text-center mt-10">
            <p className="  font-normal text-lg text-[#565151] mt-5">
              Which Type Best Describes Your Property?
            </p>
          </div>
          <div className="relative z-10 p-4 mt-8">
            <div className="grid grid-cols-4 gap-8">
              <button
                onClick={handleSingleFamily}
                disabled={
                  multiFamily ||
                  condo ||
                  townhome ||
                  others ||
                  semiDetached ||
                  endTerraced ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  singleFamily ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed"
                )}
              >
                {singleFamily && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Flat
                </div>
              </button>

              <button
                onClick={handleMultiFamily}
                disabled={
                  singleFamily ||
                  condo ||
                  townhome ||
                  others ||
                  semiDetached ||
                  endTerraced ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  multiFamily ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed"
                )}
              >
                {multiFamily && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Detached
                </div>
              </button>

              <button
                onClick={handleCondo}
                disabled={
                  multiFamily ||
                  singleFamily ||
                  townhome ||
                  others ||
                  semiDetached ||
                  endTerraced ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  condo ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed"
                )}
              >
                {condo && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M288 48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192H520V120C520 106.7 530.7 96 544 96C557.3 96 568 106.7 568 120V192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H336C309.5 512 288 490.5 288 464V48zM352 112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368C359.2 64 352 71.16 352 80V112zM368 160C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176C416 167.2 408.8 160 400 160H368zM352 304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM512 400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400zM224 160C224 166 223 171 222 176C242 190 256 214 256 240C256 285 220 320 176 320H160V480C160 498 145 512 128 512C110 512 96 498 96 480V320H80C35 320 0 285 0 240C0 214 13 190 33 176C32 171 32 166 32 160C32 107 74 64 128 64C181 64 224 107 224 160z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Terraced
                </div>
              </button>

              <button
                onClick={handleTownHome}
                disabled={
                  multiFamily ||
                  condo ||
                  singleFamily ||
                  others ||
                  semiDetached ||
                  endTerraced ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  townhome ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed"
                )}
              >
                {townhome && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M280.1 22.03L305.8 4.661C307.1 3.715 308.4 2.908 309.9 2.246C313.1 .7309 316.6-.0029 319.1 0C323.4-.0029 326.9 .7309 330.1 2.246C331.6 2.909 332.9 3.716 334.2 4.661L359 22.03C392.1 45.8 430.8 63.52 470.8 74.42L493.8 80.71C495.6 81.17 497.4 81.83 499 82.68C502.2 84.33 504.1 86.66 507.1 89.43C510.8 94.38 512.7 100.7 511.8 107.2C511.4 109.1 510.6 112.6 509.3 115C507.7 118.2 505.3 120.1 502.6 123.1C498.3 126.3 492.1 128.1 487.5 128H480V184.1L491.7 193.3C512.8 210 536.6 222.9 562.2 231.4L591.1 241.1C592.7 241.6 594.2 242.2 595.7 243C598.8 244.8 601.4 247.2 603.5 249.1C605.5 252.8 606.9 256 607.6 259.6C608.1 262.2 608.2 265 607.7 267.8C607.2 270.6 606.3 273.3 604.1 275.7C603.2 278.8 600.8 281.5 598 283.5C595.2 285.5 591.1 286.9 588.4 287.6C586.8 287.9 585.1 288 583.4 288H544V353.9C564.5 376.7 591.4 393 621.4 400.6C632 403 640 412.6 640 424C640 437.3 629.3 448 616 448H576V480C576 497.7 561.7 512 544 512C526.3 512 512 497.7 512 480V448H352V480C352 497.7 337.7 512 320 512C302.3 512 288 497.7 288 480V448H128V480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480V448H24C10.75 448 0 437.3 0 424C0 412.6 7.962 403 18.63 400.6C48.61 393 75.51 376.7 96 353.9V288H56.55C54.87 288 53.2 287.9 51.57 287.6C48.03 286.9 44.77 285.5 41.96 283.5C39.16 281.5 36.77 278.8 35.03 275.7C33.69 273.3 32.76 270.6 32.31 267.8C31.85 265 31.9 262.2 32.41 259.6C33.07 256 34.51 252.8 36.53 249.1C38.55 247.2 41.19 244.8 44.34 243C45.78 242.2 47.32 241.6 48.94 241.1L77.81 231.4C103.4 222.9 127.2 210 148.3 193.3L160 184.1V128H152.5C147 128.1 141.7 126.3 137.4 123.1C134.7 120.1 132.3 118.2 130.7 115C129.4 112.6 128.6 109.1 128.2 107.2C127.3 100.7 129.2 94.38 132.9 89.43C135 86.66 137.8 84.33 140.1 82.68C142.6 81.83 144.4 81.17 146.2 80.71L169.2 74.42C209.2 63.52 247 45.8 280.1 22.03H280.1zM223.1 128V192H416V128H223.1zM159.1 352H480V288H159.1V352z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Studio
                </div>
              </button>

              <button
                onClick={handleOthers}
                disabled={
                  multiFamily ||
                  condo ||
                  townhome ||
                  singleFamily ||
                  semiDetached ||
                  endTerraced ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  others ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed "
                )}
              >
                {others && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Maisonette
                </div>
              </button>

              <button
                onClick={handleSemiDetached}
                disabled={
                  multiFamily ||
                  condo ||
                  townhome ||
                  singleFamily ||
                  others ||
                  endTerraced ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  semiDetached ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed "
                )}
              >
                {semiDetached && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Semi-detached
                </div>
              </button>

              <button
                onClick={handleEndTerraced}
                disabled={
                  multiFamily ||
                  condo ||
                  townhome ||
                  singleFamily ||
                  others ||
                  semiDetached ||
                  coachHouse ||
                  HMO
                }
                className={classNames(
                  endTerraced ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed "
                )}
              >
                {endTerraced && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  End Terraced
                </div>
              </button>

              <button
                onClick={handleCoachHouse}
                disabled={
                  multiFamily ||
                  condo ||
                  townhome ||
                  singleFamily ||
                  others ||
                  semiDetached ||
                  endTerraced ||
                  HMO
                }
                className={classNames(
                  coachHouse ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed "
                )}
              >
                {coachHouse && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  Coach House
                </div>
              </button>

              <button
                onClick={handleHMO}
                disabled={
                  multiFamily ||
                  condo ||
                  townhome ||
                  singleFamily ||
                  others ||
                  semiDetached ||
                  endTerraced ||
                  coachHouse
                }
                className={classNames(
                  HMO ? "ring-cyan-600 bg-cyan-50" : "ring-gray-600",
                  "pointer-events-auto w-[12rem] rounded-xl bg-white px-3 py-10 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 relative disabled:bg-gray-100 disabled:cursor-not-allowed "
                )}
              >
                {HMO && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute top-5 right-5 "
                    viewBox="0 0 20 20"
                    fill="#00A3A3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                <div className="font-medium text-slate-900">
                  <svg
                    className="h-12 w-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z" />
                  </svg>
                </div>

                <div className="mt-8 font-semibold text-lg text-slate-700 text-center">
                  HMO
                </div>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SetZero;
