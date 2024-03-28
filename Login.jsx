import React, { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import palnilogo from "./palnicompanylogo.png";



export const Login = () => {
  const [data, setData] = useState([]);
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
 // const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/9444c449-fadb-44c7-90b5-12e0f8ca4209');
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Check if data is an array and contains the entered credentials
    if (data.length && data.some(item => item.mailid === mailId && item.password === password)) {
     // setIsLoggedin(true);
      // Navigate to another component (replace '/dashboard' with your desired path)
      navigate('/dashboard');
    } else {
      //setIsLoggedin(false);
      alert("Incorrect credentials");
    }
  }

  return (
    <div className="login-page-container">
      <div className="main-container">
        <div className="heading-section">
          <img src={palnilogo} className="company-logo" height="80" width="100" alt="companylogo"/>
          <h3 className="employee-portal-heading">EMPLOYEE LOGIN</h3>
        </div>
        <form className="login-form-container" onSubmit={submitHandler}>
          <label htmlFor="mail">Mail-Id</label>
          <input
            type="text"
            id="mail"
            name="mailId"
            placeholder="Enter your Mail-id"
            onChange={e=>setMailId(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            onChange={e=>setPassword(e.target.value)}
          />
          <button className="button" name="submit" type="submit">
            <strong>LOGIN</strong>
          </button>
          <Link to="/signup" className="signup-button">
            Register?
          </Link>
        </form>
      </div>
    </div>
  );
};


