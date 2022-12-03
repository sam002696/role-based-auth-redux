import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  //   TicketIcon,
  //   LockOpenIcon,
  //   FlagIcon,
  //   AcademicCapIcon,
  TrashIcon,
  EyeIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

const TenantMaintenance = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [tenantReports, setTenantReports] = useState([]);
  const [open, setOpen] = useState(false);
  const [singleTracking, setSingleTracking] = useState({});
  const timeline = [
    singleTracking?.Timeline?.taskOne?.maintenanceReq === true && {
      id: 1,
      content: "Maintenance Request send to",
      target: "Property Manager",
      task: singleTracking?.Timeline?.taskOne?.maintenanceReq,
      date: singleTracking?.Timeline?.taskOne?.createdAt,
      datetime: "2020-09-20",
      icon: ClipboardDocumentCheckIcon,
      iconBackground: "bg-cyan-300",
    },
    singleTracking?.Timeline?.taskTwo?.postJob === true && {
      id: 2,
      content: "Request Accepted and proceed by",
      target: "Property Manager ",
      task: singleTracking?.Timeline?.taskTwo?.postJob,
      date: singleTracking?.Timeline?.taskTwo?.createdAt,
      datetime: "2020-09-20",
      icon: TrashIcon,
      iconBackground: "bg-sky-400",
    },
    singleTracking?.Timeline?.taskThree?.assignJob === true && {
      id: 3,
      content: "Job assigned to contractor by",
      target: "Property Manager",
      task: singleTracking?.Timeline?.taskThree?.assignJob,
      date: singleTracking?.Timeline?.taskThree?.createdAt,
      datetime: "2020-09-22",
      icon: EyeIcon,
      iconBackground: "bg-green-500",
    },
    singleTracking?.Timeline?.taskFour?.completeJob === true && {
      id: 4,
      content: "Advanced to check completion by",
      target: "Property Manager",
      task: singleTracking?.Timeline?.taskFour?.completeJob,
      date: singleTracking?.Timeline?.taskFour?.createdAt,
      datetime: "2020-09-24",
      icon: UserIcon,
      iconBackground: "bg-blue-500",
    },
  ];

  useEffect(() => {
    const handleReportsDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3500/api/reports?email=${currentUser.email}`
        );
        setTenantReports(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, [currentUser.email]);

  const handleTracking = (report) => {
    setOpen(true);
    setSingleTracking(report);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(tenantReports);
  return (
    <>
      <div className="mx-auto max-w-7xl my-8">
        <div className="relative overflow-hidden bg-white mb-12">
          <div className="grid grid-cols-3 gap-10 py-10  xl:px-8">
            <div className="grid grid-cols-1 lg:col-span-2 ">
              <div className=" px-8">
                <div className=" text-center">
                  <h1 className=" font-bold underline underline-offset-4 text-2xl">
                    Maintenance Reports
                  </h1>
                </div>

                {tenantReports.map((report) => (
                  <>
                    <div className=" grid grid-cols-4 my-10 border p-5 border-black bg-indigo-300">
                      <div className=" col-span-1">
                        <p>{report.issueName}</p>
                        <p>{report.email}</p>
                      </div>
                      <div className=" col-span-2">
                        {report?.assignedContractor ? (
                          <>
                            <div className=" py-5 col-span-1">
                              {report?.taskComplete === true
                                ? " The task has been completed"
                                : "Your contractor has been assigned"}
                            </div>
                            <div className=" col-span-1 ">
                              <p>{report.assignedContractor?.contractorName}</p>
                              <p>
                                {report.assignedContractor?.contractorEmail}
                              </p>
                            </div>
                          </>
                        ) : (
                          <div
                            className={`${
                              report?.taskIncomplete === true
                                ? "hidden"
                                : " col-span-1"
                            }`}
                          >
                            <p>Nobody has been assigned</p>
                          </div>
                        )}

                        {report?.taskIncomplete === true && (
                          <div className=" col-span-1">Task Incomplete</div>
                        )}
                      </div>
                      <div className="col-span-1">
                        <button
                          onClick={() => handleTracking(report)}
                          className="mt-2 flex-shrink-0 inline-block px-3 py-2 bg-white text-xs font-medium text-gray-700 border-2 border-gray-700 rounded-lg"
                        >
                          Tracking
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div
              className={`${
                open ? "grid grid-cols-1 lg:col-span-1 " : "hidden"
              }`}
            >
              <div className="mx-auto max-w-2xl pb-20">
                <div className="mx-auto max-w-2xl lg:max-w-none mb-12">
                  <h2
                    id="testimonial-heading"
                    className="text-2xl text-center font-semibold tracking-wider text-cyan-700"
                  >
                    Progress of Maintenance Request{" "}
                  </h2>
                </div>
                <div className="flow-root">
                  <ul className="-mb-8">
                    {timeline.map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-8">
                          {eventIdx !== timeline.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  event.iconBackground,
                                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                )}
                              >
                                {/* <event.icon
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                /> */}
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm text-gray-500">
                                  {event.content}{" "}
                                  <a
                                    href={event.href}
                                    className="font-medium text-gray-900"
                                  >
                                    {event.target}
                                  </a>
                                </p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                {event.date && (
                                  <time>
                                    {new Date(event.date).getFullYear()}-
                                    {new Date(event.date).getMonth()}-
                                    {new Date(event.date).getDate()} :{" "}
                                    {new Date(event.date).toLocaleTimeString()}
                                  </time>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantMaintenance;
