import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingStart,
  fetchingSuccess,
  fetchingFailure,
} from "../../Redux/tenantPropertySlice";

const TenantProperty = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { tenantPropertyDetails } = useSelector(
    (state) => state.tenantPropertyDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleTenantDetails = async () => {
      dispatch(fetchingStart());
      try {
        const res = await axios.get(
          `http://localhost:3500/api/properties?name=${currentUser.username}`
        );
        dispatch(fetchingSuccess(res.data));
      } catch (err) {
        dispatch(fetchingFailure(err));
      }
    };
    handleTenantDetails();
  }, [currentUser.username, dispatch]);

  console.log(tenantPropertyDetails);
  return (
    <>
      <div className=" text-center">
        <p> property type : {tenantPropertyDetails?.propertyType}</p>
        {tenantPropertyDetails?.tenantDetails
          .filter((user) => user.username === currentUser.username)
          .map((filteredPerson) => (
            <>
              <li>{filteredPerson.username}</li>
              <li>{filteredPerson.address}</li>
              <li>{filteredPerson.documents}</li>
            </>
          ))}
      </div>
    </>
  );
};

export default TenantProperty;
