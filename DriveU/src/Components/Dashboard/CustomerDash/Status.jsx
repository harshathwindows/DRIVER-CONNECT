//import React from 'react'
import { useSelector } from "react-redux";
import "./CDash.css";
import CustomerDash from "./CustomerDash";
import { useEffect, useState } from "react";
import axios from "axios";

const Status = () => {
  const [reqStatus, setReqStatus] = useState();
  const cusData = useSelector((state) => state.userData.customerData);
  const userID = cusData[0]?.CUS_ID;

  useEffect(() => {
    const tripRequest = async () => {
      try {
        if (userID) {
          const response = await axios.get(
            `http://localhost:9092/hire/request/${userID}`
          );
          setReqStatus(response.data);
        }
      } catch (err) {
        console.error(err);
      }
      //console.log(reqStatus);
    };
    tripRequest();
  }, [reqStatus]);

  const canceltrip = (id) => {
    const request = {
      id: "",
    };
    reqStatus
      .filter((req) => req.REQ_ID == id)
      .map((res) => (request.id = res.REQ_ID));
    axios.post("http://localhost:9092/hire/cancelrequest", request);
    console.log(request.id);
    //window.location.reload();
  };
  return (
    <div className="Dashboard">
      <div className="View">
        {reqStatus ? (
          reqStatus.map((req, index) => (
            <div className="status" key={index}>
              <div className="stData">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Start Place</p>
                      </td>
                      <td>
                        <p>:{req.START_PLACE}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>End Place</td>

                      <td>:{req.END_PLACE}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="stData">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Trip Date</p>
                      </td>
                      <td>
                        <p>:{req.TripStartDate}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Trip Time:</p>
                      </td>
                      <td>
                        <p>:{req.START_TIME}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="stData">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Vehicle Type</p>
                      </td>
                      <td>
                        <p>:{req.VEHICLE_TYPE}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Trip Type</p>
                      </td>
                      <td>
                        <p>:{req.TRIP_TYPE}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="stData">
                <table>
                  <tbody>
                    <tr>
                      <td>
                      <p>Trip Fare</p></td>
                      <td><p>:{req.REQ_FARE}</p></td>
                    </tr>
                    <tr>
                      <td><p>Post By</p></td>
                      <td><p>:{req.POST_DATE}</p></td>
                      <td>{(req.REQ_STATUS = "Confirm") ? (
                  <button onClick={() => canceltrip(req.REQ_ID)}>cancel</button>
                ) : (
                  <p>Trip Canceled</p>
                )}</td>
                    </tr>
                    
                  </tbody>
                </table>
                
              </div>
            </div>
          ))
        ) : (
          <div className="status">
            <div className="stData">
              <p>No Request Found</p>
            </div>
          </div>
        )}
      </div>
      <CustomerDash />
    </div>
  );
};

export default Status;
