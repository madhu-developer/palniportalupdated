import React, { useState, useEffect/*,useCallback*/ } from 'react';
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { Holidays } from './Holidays';
import palnilogo from "./palnicompanylogo.png";
import person from "./user.png";
import home from "./home.png";
import attendance from "./attendance.png";

export const Dashboard = () => {
  const day = new Date().toLocaleDateString(new Date(), { weekday: 'long' });
  const date = new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  // const [clockIn, setClockIn] = useState(null);
  // const [clockOut, setClockOut] = useState(null);
  // const [status, setStatus] = useState('Clock Out');
 // const [elapsedTime, setElapsedTime] = useState(0);
 // const [time, setTime] = useState(new Date().toLocaleTimeString());

//   const handleClockIn = useCallback(() => {
//     setClockIn(new Date());
//   }, []);

//   const handleClockOut = useCallback(() => {
//   setClockOut(new Date());
// }, []);

  // if (status === 'Clock Out') {
  //   setStatus('Clock In');
  // } else {
  //   setStatus('Clock Out');
  // }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //     if (clockIn && clockOut) {
  //       const elapsedMilliseconds = clockOut - clockIn;
  //       const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  //       setElapsedTime(elapsedSeconds);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [clockIn, clockOut]);
  const [clock,setClock] = useState(new Date());
  ///const [date,setDate] = useState(new Date());

   useEffect(()=>{
    const timerId = setInterval(() => {
      setClock(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
      console.log("Cleanup Function executed")
    }
  },[])

  return (
    <div className="dashboard-container">
      <div className="header-section">
        <div>
          <img src={palnilogo} className="company-logo" alt="companylogo" />
        </div>
        <div className="employee-container">
          <div className="employee-section">
            <img src={person} className="employee-image" alt="employee" height="50" width="50" />
            <div>
              <h1>EMPLOYEE NAME</h1>
            </div>
            <select>
              <option>Profile</option>
              <option>Log Out</option>
            </select>
          </div>
        </div>
      </div>
      <div className="main-body-container">
        <aside className="sidenav-section">
          <Link to="/dashboard">
            <div className="icon-section">
              <img src={home} className="icon" alt="home" />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/me">
            <div className="icon-section">
              <img src={person} className="icon" alt="me" />
              <p>Me</p>
            </div>
          </Link>
          <Link to="/attendance">
            <div className="icon-section">
              <img src={attendance} className="icon" alt="attendance" />
              <p>Attendance</p>
            </div>
          </Link>
        </aside>
        <div className="content">
          <div className="left-side-body">
            <div className="time-and-date-section">
              <h3 className="current-dateandtime-heading">CURRENT DATE & TIME</h3>
              <div className="date-and-day">
                <p>{date}</p>
                <p>{day}</p>
                <p>{clock.toLocaleTimeString()}</p>
              </div>
              {/*<button onClick={handleClockIn}>{status}</button>
      {clockIn && <p>Clock In Time: {clockIn.toLocaleString()}</p>}
      {clockOut && <p>Clock Out Time: {clockOut.toLocaleString()}</p>}
      {elapsedTime > 0 && <p>Elapsed Time: {elapsedTime} seconds</p>}
  <p>Current Time: {time}</p>
              <div>
  <p>{status === 'Clock Out' ? 'Clock In to start working' : `Elapsed Time: ${elapsedTime} seconds`}</p>
  </div>*/}
            </div>
            <div className="holidays-section">
              <div className="holiday-and-view">
                <h1>Holidays</h1>
                <Holidays />
              </div>
              Update Holidays here
            </div>
            <div className="official-links-section">
              <h1>Quick Links</h1>
              <div className="links">
                <a href="https://palni.com/">Palni Official Website</a>
                <a href="https://www.linkedin.com/company/palni-inc/mycompany/">Palni LinkedIn Page</a>
              </div>
            </div>
          </div>
          <div className="right-side-body">
            <h1>Announcements</h1>
            <div className="announcement"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

