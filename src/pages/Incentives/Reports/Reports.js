import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchingStart, fetchingSuccess } from "../../../Redux/allReportsSlice";
import ReportModal from "./ReportModal";
import ReportUpdateModal from "./ReportUpdateModal";

const Reports = () => {
  const [openModal, setOpenModal] = useState(false);
  const [actionButton, setActionButton] = useState({});
  const [singleReport, setSingleReport] = useState({});
  const [viewContractorBidding, setViewContractorBidding] = useState({});
  const [singleUpdateReport, setSingleUpdateReport] = useState(false);
  const [singleUpdateModalReport, setSingleUpdateModalReport] = useState({});
  const { maintenanceReports } = useSelector(
    (state) => state.maintenanceReports
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleReportsDetails = async () => {
      dispatch(fetchingStart());
      try {
        const res = await axios.get(`http://localhost:3500/api/reports`);
        dispatch(fetchingSuccess(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, [dispatch]);

  const handleReport = (report) => {
    setOpenModal(true);
    setSingleReport(report);
  };

  const handleView = (report) => {
    setViewContractorBidding(report);
    setActionButton({});
  };

  const handleUpdateReport = (report) => {
    setSingleUpdateReport(true);
    setSingleUpdateModalReport(report);
  };

  const handleActionButton = (bidding) => {
    setActionButton(bidding);
  };

  const handleAssignJob = async (reportid, biddingid) => {
    console.log(reportid, biddingid);
    try {
      const res = await axios.put(
        `http://localhost:3500/api/reports/acceptoffer/${reportid}/${biddingid}`
      );
      if (res.data) {
        console.log("job has been assigned!");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeclineJob = async (reportid, biddingid) => {
    console.log(reportid, biddingid);
    try {
      const res = await axios.put(
        `http://localhost:3500/api/reports/declineoffer/${reportid}/${biddingid}`
      );
      if (res.data) {
        console.log("job has been declined!");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCompletedJob = async (reportid, biddingid) => {
    console.log(reportid, biddingid);
    try {
      const res = await axios.put(
        `http://localhost:3500/api/reports/completejob/${reportid}/${biddingid}`
      );
      if (res.data) {
        console.log("Job has been completed!");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleIncompletedJob = async (reportid, biddingid) => {
    console.log(reportid, biddingid);
    try {
      const res = await axios.put(
        `http://localhost:3500/api/reports/incompletejob/${reportid}/${biddingid}`
      );
      if (res.data) {
        console.log("Job has been incompleted!");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(viewContractorBidding?.assignedContractor?.contractorEmail);
  console.log(maintenanceReports);
  return (
    <>
      <div className="max-w-5xl mx-auto py-10">
        <p className="text-center font-semibold text-2xl underline underline-offset-4 pb-5">
          Maintenance Reports
        </p>

        <div className=" grid grid-cols-4  gap-10  justify-center">
          <div className=" col-span-2">
            <div className="mt-5 text-center space-y-3">
              {maintenanceReports?.map((report) => (
                <>
                  <div className=" grid grid-cols-6 justify-center">
                    <button
                      onClick={() => handleReport(report)}
                      disabled={report?.post === true}
                      className="bg-red-100 w-full mx-auto p-4 text-lg font-medium cursor-pointer disabled:cursor-not-allowed col-span-4"
                    >
                      {report.issueName}{" "}
                      <span className=" ml-5 text-red-500">
                        {report.post === true && "Posted"}
                      </span>
                    </button>
                    <button
                      onClick={() => handleUpdateReport(report)}
                      className=" col-span-1 bg-blue-200 -4"
                    >
                      update
                    </button>
                    <button
                      onClick={() => handleView(report)}
                      className=" col-span-1 bg-green-200 -4"
                    >
                      View
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className=" col-span-1 mt-5 ">
            <div>{viewContractorBidding?.issueName}</div>
            {viewContractorBidding?.contracBiddingInfo?.map((bidding) => (
              <>
                <div className=" grid grid-cols-6 justify-center items-center">
                  <div className=" col-span-5 bg-indigo-200 p-5 border-b-2">
                    <h1>{bidding.contractorName}</h1>
                    <h1>{bidding.contractorEmail}</h1>
                    <h1>{bidding.BiddingAmount}</h1>
                    <h1>{bidding.desc}</h1>
                    <h1 className="text-green-600 font-semibold">
                      {bidding.offerDeclined === true && "Job Declined"}
                      {bidding.offerAccepted === true && "Job Assigned"}
                      {bidding.incompletedJob === true && "Job Incompleted!"}
                      {bidding.completedJob === true && "Job Completed!"}
                    </h1>
                  </div>

                  <div className=" col-span-1 bg-yellow-200 py-10">
                    <button
                      onClick={() => handleActionButton(bidding)}
                      className=""
                    >
                      Action
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div
            className={`${
              actionButton?._id && viewContractorBidding
                ? " col-span-1"
                : "hidden"
            } `}
          >
            <>
              <div className=" grid grid-cols-6 justify-center items-center">
                <div className=" col-span-5 bg-indigo-200 p-5">
                  <h1>{actionButton.contractorName}</h1>
                  <h1>{actionButton.contractorEmail}</h1>
                </div>

                <div
                  className={`${
                    actionButton?.offerDeclined === true
                      ? "hidden"
                      : " col-span-5 bg-yellow-200 py-2"
                  }`}
                >
                  <button
                    disabled={
                      actionButton?.offerAccepted === true ||
                      viewContractorBidding?.assignedContractor?.contractorEmail
                    }
                    onClick={() =>
                      handleAssignJob(
                        viewContractorBidding?._id,
                        actionButton?._id
                      )
                    }
                    className=" disabled:cursor-not-allowed"
                  >
                    {actionButton?.offerAccepted === true
                      ? "Job Assigned"
                      : "Assign Job"}
                  </button>
                </div>
                <div
                  className={`${
                    actionButton?.offerAccepted === true
                      ? "hidden"
                      : " col-span-5 bg-red-200 py-2"
                  }`}
                >
                  <button
                    disabled={actionButton?.offerDeclined === true}
                    onClick={() =>
                      handleDeclineJob(
                        viewContractorBidding?._id,
                        actionButton?._id
                      )
                    }
                    className=" disabled:cursor-not-allowed"
                  >
                    {actionButton?.offerDeclined === true
                      ? "Job Declined!"
                      : "Decline Job"}
                  </button>
                </div>
                {actionButton?.offerAccepted === true && (
                  <>
                    <div
                      className={`${
                        actionButton?.incompletedJob === true
                          ? "hidden"
                          : " col-span-5 bg-sky-200 py-2"
                      }`}
                    >
                      <button
                        disabled={actionButton?.completedJob === true}
                        onClick={() =>
                          handleCompletedJob(
                            viewContractorBidding?._id,
                            actionButton?._id
                          )
                        }
                        className=" disabled:cursor-not-allowed"
                      >
                        {actionButton?.completedJob === true
                          ? "Job Completed!"
                          : "Complete"}
                      </button>
                    </div>
                    <div
                      className={`${
                        actionButton?.completedJob === true
                          ? "hidden"
                          : " col-span-5 bg-teal-200 py-2"
                      }`}
                    >
                      <button
                        disabled={actionButton?.incompletedJob === true}
                        onClick={() =>
                          handleIncompletedJob(
                            viewContractorBidding?._id,
                            actionButton?._id
                          )
                        }
                        className=" disabled:cursor-not-allowed"
                      >
                        {actionButton?.incompletedJob === true
                          ? "Job Incomplete!"
                          : "Incomplete"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      </div>

      <ReportModal
        open={openModal}
        setOpen={setOpenModal}
        singleReport={singleReport}
      />

      <ReportUpdateModal
        open={singleUpdateReport}
        setOpen={setSingleUpdateReport}
        singleReportUpdate={singleUpdateModalReport}
      />
    </>
  );
};

export default Reports;
