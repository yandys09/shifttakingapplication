import { FaUser } from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import "./staff.css";
import { useState } from "react";

const Staff = () => {
  const [profile, setProfile] = useState(false);

  const handelProfile = () => {
    setProfile(!profile);
  };

  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">All Shifts</span>

        <div className="staff_profile">
          <FaUser className="profile_icon" />
          <span className="staff_name" onClick={handelProfile}>
            Alok Mondala
          </span>
          {profile && (
            <div className="staff_account">
              <span>My Account</span>
              <span>My Statements</span>
              <span>My Shifts</span>
              <span>Report Incidence</span>
              <span>Log out</span>
            </div>
          )}
        </div>
      </div>
      <div className="staff_main">
        <h3 className="shift_header">My Shifts</h3>

        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>Fri 15</span>
          </div>
          <div className="staff_main_card_info">
            <span className="shift_location_time">
              123 Smith street Sydney, NSW 2000 Australia, 08:00 AM-11:00 AM
            </span>
            <span className="">Duration: 10 hours</span>
          </div>
          <div className="shift_status">
            <span>Pending</span>
          </div>
          <div className="staff_main_card_options">
            <AiOutlineEye size={25} />
          </div>
        </div>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>Fri 15</span>
          </div>
          <div className="staff_main_card_info">
            <span className="shift_location_time">
              123 Smith street Sydney, NSW 2000 Australia, 08:00 AM-11:00 AM
            </span>
            <span className="">Duration: 10 hours</span>
          </div>
          <div className="shift_status">
            <span>Pending</span>
          </div>
          <div className="staff_main_card_options">
            <AiOutlineEye size={25} />
          </div>
        </div>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>Fri 15</span>
          </div>
          <div className="staff_main_card_info">
            <span className="shift_location_time">
              123 Smith street Sydney, NSW 2000 Australia, 08:00 AM-11:00 AM
            </span>
            <span className="">Duration: 10 hours</span>
          </div>
          <div className="shift_status">
            <span>Pending</span>
          </div>
          <div className="staff_main_card_options">
            <AiOutlineEye size={25} />
          </div>
        </div>

        <h3 className="shift_header">Bid Shifts</h3>
        <div className="staff_main_card_unassigned">
          <div className="staff_main_card_date">
            <span>Fri 15</span>
          </div>
          <div className="staff_main_card_info">
            <span className="shift_location_time">
              123 Smith street Sydney, NSW 2000 Australia, 08:00 AM-11:00 AM
            </span>
            <span className="">Duration: 10 hours</span>
          </div>
          <div className="shift_status">
            <span>Pending</span>
          </div>
          <div className="staff_main_card_options">
            <AiOutlineEye size={25} />
          </div>
        </div>
       
       

      </div>
    </div>
  );
};

export default Staff;
