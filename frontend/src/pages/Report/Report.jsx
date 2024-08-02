import { FaArrowLeft } from "react-icons/fa";
import "./report.css";
import { useState } from "react";

const Report = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="report">
      <span className="myshifts_back">
        <FaArrowLeft />
        Back
      </span>

      <h2 className="report_header">Report Incidence</h2>
      <label htmlFor="">Date of Incidence</label>
      <input type="text" placeholder="01/01/2024" name="date" />
      <label htmlFor="">Time of Incidence</label>
      <input type="text" placeholder="08:00 AM" name="time" />
      <label htmlFor="">Location(e.g, Kitchen, Lounge etc)</label>
      <input type="text" placeholder="Kitchen" name="location" />
      <label htmlFor="">Person completing this form</label>
      <input type="text" placeholder="John Doe" name="personCompletingForm" />
      <label htmlFor="">Address Of Location</label>
      <input
        type="text"
        placeholder="Melbourne, Laura AVENUE"
        name="addressOfLocation"
      />
      <label htmlFor="">Person affected in the incidence</label>
      <input type="text" placeholder="Jane Doe" name="personAffected" />
      <label htmlFor="">
        Where there other person(s) present(witness) at this time of incident?
        Yes, or NO ?
      </label>
      <span>Yes</span>
      <input type="checkbox" onClick={handleShow} />
      <span>No</span>
      <input type="checkbox" />

      {show && (
        <div className="other-people">
          <label htmlFor="">Person 1</label>
          <input type="text" placeholder="John Doe" name="person1" />
          <input type="text" placeholder="+23232323232" name="phone1" />
          <label htmlFor="">Person 2</label>
          <input type="text" placeholder="John Doe" name="person2" />
          <input type="text" placeholder="+23232323232" name="phone2" />
          <label htmlFor="">Person 3</label>
          <input type="text" placeholder="John Doe" name="person3" />
          <input type="text" placeholder="+23232323232" name="phone3" />
        </div>
      )}

      <label htmlFor="">Who was injured(if anyone)</label>
      <input type="text" placeholder="James Roch" name="personInjured" />

      <label htmlFor="">Type of Incidence</label>
      <span>Act of Violence</span>
      <input type="checkbox" />
      <span>Property Damage</span>
      <input type="checkbox" />
      <span>Accident</span>
      <input type="checkbox" />
      <span> Behavioural</span>
      <input type="checkbox" />
      <span>other</span>
      <input type="checkbox" />

      <label htmlFor="">Details of Incidence</label>
      <textarea
        name="whatHappened"
        id=""
        cols="30"
        rows="10"
        placeholder="Describe What happened before the incidence"
      ></textarea>
      <textarea
        name="actualIncident"
        id=""
        cols="30"
        rows="10"
        placeholder="Describe an actual incidence"
      ></textarea>
      <textarea
        name="afterIncidence"
        id=""
        cols="30"
        rows="10"
        placeholder="Describe What happened after the incidence"
      ></textarea>

      <label>Report by</label>
      <input type="text" name="reportBy" />
      <label htmlFor="">Date of report</label>
      <input type="text" name="dateOfReport" />
      <label htmlFor="">Title/Role of person reporting</label>
      <input type="text" name="roleOfPerson" />

      <button className="report_btn">Submit</button>
    </div>
  );
};

export default Report;
