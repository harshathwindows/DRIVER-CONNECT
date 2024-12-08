import React, { useEffect, useState } from "react";
import DriverDash from "./DriverDash";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDrData } from "../../../ReduxSlices/driverData";
import { setJobPost } from "../../../ReduxSlices/jobPost";

const JobPost = () => {
  const [jobData, setJobData] = useState();
  const dispatch = useDispatch();
  const dataSession = sessionStorage.getItem("userLogin");
  const userLogin = dataSession ? JSON.parse(dataSession) : null;
  const user = userLogin?.user;
  const drData = useSelector((state) => state.driverData.driverData);
  const JopPost = useSelector((state) => state.jobData.JobPost);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userID = drData[0]?.DR_ID;
          const response = await axios.get(
            `http://localhost:9092/driver/${user}`
          );
          const jobres = await axios.get(
            "http://localhost:9092/hire/job/request"
          );
          setJobData(jobres.data);
          dispatch(setDrData(response.data));

          //dispatch(setJobPost({key:"drID",value: userID}))
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      }
    };

    fetchUserData();
  }, [user]);
  const [details, setDetails] = useState(null);

  const ShowMore = (index) => {
    setDetails(index === details ? null : index);
  };
  //console.log(jobData.slice().reverse());
  const style = {
    height: details ? "fit-content" : "",
  };

  return (
    <div className="Dashboard">
      <div className="View">
        {jobData ? (
          jobData.map((req, index) => (
            <div className="status" style={style} key={index}>
              <table>
                <tbody>
                  <tr>
                    <td className="label">START PLACE</td>
                    <td className="data">{req.START_PLACE}</td>
                    <td className="space"></td>
                    <td className="label">END PLACE</td>
                    <td className="data">{req.END_PLACE}</td>
                    <td className="space"></td>
                    <td className="label">TRIP FARE</td>
                    <td className="data">{req.REQ_FARE}</td>
                    <td className="space"></td>
                    <td className="label">START DATE</td>
                    <td className="data">{req.TripStartDate}</td>
                    <td className="space"></td>

                    <td className="data">
                      <button id="buttons">Accept</button>
                    </td>
                  </tr>

                  {details === index && (
                    <tr>
                      <td className="label">START TIME</td>
                      <td className="data">{req.START_TIME}</td>
                      <td className="space"></td>

                      <td className="label">TRIP-TYPE</td>
                      <td className="data">{req.TRIP_TYPE}</td>
                      <td className="space"></td>
                      <td className="label">VEHICLE-TYPE</td>
                      <td className="data">{req.VEHICLE_TYPE}</td>
                      <td className="space"></td>
                      <td className="label">MULTI-DAY</td>
                      <td className="data">{req.MULTI_DAY}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="label">Post Date</td>
                    <td className="data">:{req.POST_DATE}</td>
                    
                    <button id="details" onClick={() => ShowMore(index)}>
                      {details === index ? "Less Details" : "Show More Details"}
                    </button>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No Trip Found</p>
        )}
      </div>
      <DriverDash />
    </div>
  );
};

export default JobPost;
