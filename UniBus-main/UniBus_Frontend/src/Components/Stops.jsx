import React, { useState } from "react";
import "../CSS/Stops.css";

function Stops({route}) {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div className="routes">
      <h3 className="route-toggle Stop BusNum" onClick={toggleTableVisibility}>
        Route No. {route}
      </h3>
      {isTableVisible && (
        <table className="table route-table" id="routeTable">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Bus Time</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td colSpan="2" className="table-active">
                Piragarhi Chowk
              </td>
              <td>6:40 am</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td colSpan="2" className="table-active">
                Mangol Puri, Police Line
              </td>
              <td>6:50 am</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2" className="table-active">
                Sarashwati Vihar
              </td>
              <td>7:00 am</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td colSpan="2" className="table-active">
                Pitam Pura Metro Station/Madhuvan Chowk
              </td>
              <td>7:08 am</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td colSpan="2" className="table-active">
                Sharda University
              </td>
              <td>8:20 am</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Stops;
