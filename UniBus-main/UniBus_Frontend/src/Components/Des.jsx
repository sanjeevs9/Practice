import React from "react";
import "../CSS/Des.css";

function Des() {
  return (
    <div className="container-lg Hero2" id="scnd">
      <div className="row justify-content-center">
        <div className="col-md-5 text-center text-md-start">
          <img
            className="HeroImg"
            src="https://www.shardauniversity.uz/attachments/infrastructure_images/Transport.jpg"
            alt="Sharda logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="col-md-7 text-center text-md-start">
          <>
            <h1 className="fw-bold text-center">Transportation Facilities </h1>
            <p>
              Sharda University situated in Greater Noida is well-connected with
              the national capital. It offers transport facility to its students
              and faculty members on very nominal charges. The buses ply on
              different routes of Delhi, Noida and other NCR areas to pick and
              drop the students. Our Bus drivers are highly qualified and are
              licensed by the RTO to drive college buses to ensure the full
              safety of both the students & staff members.
            </p>
            <p>
              The students are spared from the difficulty of commuting to the
              University by public transport. The transport facility is also a
              significant contributor of inculcating an element of punctuality
              among the students. Bus Facility is also available for students &
              faculty members for industrial visits, field trips and other
              academic activities.
            </p>
            <div id="contact">
              <div className="contentBox2 border-bottom">
                <h5>Concern Person</h5>
                <h8>Mr. Raju Kumar</h8>
              </div>
              <div className="contentBox2 border-bottom">
                <h5>Contact No</h5>
                <h8>+91-7217657011</h8>
              </div>
              <a className="row justify-content-end m-2" id="coordinatorList" href="https://www.sharda.ac.in/attachments/common_files/Transportation-Cordinators-Contact-no.pdf" target="_blank">
                Bus coordinators list 2023-24
              </a>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Des;
