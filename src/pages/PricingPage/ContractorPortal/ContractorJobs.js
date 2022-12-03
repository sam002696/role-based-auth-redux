import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingStart,
  fetchingSuccess,
} from "../../../Redux/contractorJobsSlice";
import BidForJob from "./BidForJob";

const ContractorJobs = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [bidforjob, setBidforjob] = useState(false);
  const [singleJob, setSingleJob] = useState({});
  const { contractorCurrentJobs } = useSelector(
    (state) => state.contractorCurrentJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleReportsDetails = async () => {
      dispatch(fetchingStart());
      try {
        const res = await axios.get(`http://localhost:3500/api/currentJobs`);
        dispatch(fetchingSuccess(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, [dispatch]);

  const handleBidForJob = (job) => {
    setBidforjob(true);
    setSingleJob(job);
  };

  console.log(contractorCurrentJobs, currentUser.email);
  return (
    <>
      <div className="max-w-5xl mx-auto py-10">
        <p className="text-center font-semibold text-2xl underline underline-offset-4 pb-5">
          Contractor Jobs
        </p>

        <div className="mt-5 text-center space-y-3">
          {contractorCurrentJobs?.map((job) => (
            <>
              {/* {job.postBidding === true && ( */}
              <div className=" grid grid-cols-6 justify-center">
                <button className="bg-emerald-100 w-full mx-auto p-4 text-lg font-medium cursor-pointer disabled:cursor-not-allowed flex flex-col items-center col-span-5">
                  <div>{job.issueName}</div>
                  <div>
                    timline :{" "}
                    <span className=" text-green-600"> {job.timeline}</span>
                  </div>

                  <span className=" ml-5 text-red-500">
                    {job.postBidding === true &&
                      job.contractorBiddingEmail.find(
                        (element) => element === currentUser.email
                      ) &&
                      "Applied for the job"}
                  </span>
                </button>

                <button
                  disabled={
                    job.postBidding === true &&
                    job.contractorBiddingEmail.find(
                      (element) => element === currentUser.email
                    )
                  }
                  onClick={() => handleBidForJob(job)}
                  className=" col-span-1 bg-blue-200 disabled:cursor-not-allowed"
                >
                  Bid for the job
                </button>
              </div>
              {/* )} */}
            </>
          ))}
        </div>
      </div>

      <BidForJob
        open={bidforjob}
        setOpen={setBidforjob}
        singleJob={singleJob}
      />
    </>
  );
};

export default ContractorJobs;
