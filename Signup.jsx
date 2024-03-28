import React,{useState/*,useEffect*/} from 'react'
import {Link} from 'react-router-dom';
import palnilogo from "./palnicompanylogo.png";
import axios from "axios";

export const Signup = () => {

 //const [data, setData] = useState([]);
  const [name,setName] = useState("");
  const [mailId,setMailId] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword,setConfirmpassword] = useState("");


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://mocki.io/v1/9444c449-fadb-44c7-90b5-12e0f8ca4209');
  //       const result = await response.json();
  //       setData(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5050/signup",{name,mailId,password,confirmpassword})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <div className="login-page-container">
    <div className="main-container">
    <div className="heading-section">
        <img src={palnilogo} className="company-logo" alt="companylogo"/>
        <h3 className="employee-portal-heading">EMPLOYEE LOGIN</h3>
    </div>
    <form className="login-form-container" onSubmit={submitHandler}>
    <label htmlFor="employeename">Employee Name</label>
    <input type="text" id="employeename" name="employeename" placeholder="Enter your Name" onChange={e=>setName(e.target.value)}/>
        <label htmlFor="mail">Mail-Id</label>
        <input type="text" id="mail" name="mailId" placeholder="Enter your Mail-id" onChange={e=>setMailId(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your Password" onChange={e=>setPassword(e.target.value)}/>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm your Password" onChange={e=>setConfirmpassword(e.target.value)}/>  
        <button type="submit" className='button' name="submit"><strong>Sign In</strong></button> 
        <Link to="/login" className="signup-button">Login</Link>
    </form>
</div>
    </div>
  )
}
