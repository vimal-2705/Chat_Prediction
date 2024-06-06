import React, { useState } from "react";
import { FaPeopleGroup, FaChessKing, FaUser, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [borderActive, setBorderActive] = useState(1);
  const [loginSection, setLoginSection] = useState(1);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onchange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  var rString = randomString(
    32,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  onsubmit = async () => {
    const logindata = {
      email: state.email,
      password: state.password,
      section: loginSection,
    };

    // const response = await axios.post(
    //   "http://127.0.0.1:5000/api/login",
    //   logindata
    // );

    // const isSuccessful = response.data.isSuccessful;
    // const section = response.data.location;
    // const roll = response.data.roll_no;
    console.log(logindata.email);
    console.log(logindata.password);
    console.log(logindata.section);
    navigate("/home");
    // localStorage.setItem("rollno", roll);
    // localStorage.setItem("token", rString);
    // if (isSuccessful == true && section == 1) {
    //   history.push("/student");
    // } else if (isSuccessful == true && section == 2) {
    //   history.push("/staff");
    // } else if (isSuccessful == true && section == 3) {
    //   history.push("/alumni");
    // } else {
    //   setText("Incorrect Username Or Password !");
    //   if (localStorage.getItem("rollno")) localStorage.removeItem("rollno");
    //   if (localStorage.getItem("token")) localStorage.removeItem("token");
    // }

    // setTimeout(() => {
    //   setText("");
    // }, 3000);
  };

  return (
    <div className="login-page1">
      <div className="login-floating">
        <div className="login-floating-left">
          <h1>
            <span className="login-colored"> Agri</span>culture{" "}
          </h1>
          <div className="login-about-project">
            “True intuitive expertise is learned from prolonged experience with
            good feedback on mistakes.“
          </div>
        </div>
        <div className="login-floating-right">
          <div className="login-right-heading">
            <span className="login-colored"> Log </span> In{" "}
          </div>
          <div className="login-role-container">
            <div className="login-side-heading"> Please select your Role </div>
            <div className="login-roles">
              <div
                className={
                  borderActive === 1 ? "role role2 active-role" : "role role1"
                }
                onClick={() => {
                  setBorderActive(1);
                  setLoginSection(1);
                  setText("");
                }}
              >
                <FaPeopleGroup />
                <div className="login-role-name">User</div>
              </div>
              <div
                className={
                  borderActive === 2 ? "role role2 active-role" : "role role2"
                }
                onClick={() => {
                  setBorderActive(2);
                  setLoginSection(2);
                  setText("");
                }}
              >
                <FaChessKing />
                <div className="login-role-name">Admin</div>
              </div>
              {/* <div
                className={
                  borderActive === 3 ? "role role2 active-role" : "role role3"
                }
                onClick={() => {
                  setBorderActive(3);
                  setLoginSection(3);
                  setText("");
                }}
              >
                <FaPeopleGroup />
                <div className="role-name">Alumini</div>
              </div> */}
            </div>
          </div>
          <div
            className={
              loginSection === 1 ? "student-login log-active" : "student-login"
            }
          >
            <div className="email-section">
              <div className="input-fields">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Username"
                  onChange={onchange}
                ></input>
              </div>
            </div>
            <div className="password-section">
              <div className="input-fields">
                <div className="input-icon">
                  <FaLock />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onchange}
                ></input>
              </div>
            </div>
            <button className="login" onClick={onsubmit}>
              {" "}
              Login{" "}
            </button>
          </div>
          <div
            className={
              loginSection === 2 ? "teacher-login log-active" : "teacher-login"
            }
          >
            <div className="email-section">
              <div className="input-fields">
                <div className="input-icon">
                <FaUser />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Admin Username"
                  onChange={onchange}
                ></input>
              </div>
            </div>
            <div className="password-section">
              <div className="input-fields">
                <div className="input-icon">
                <FaLock />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Admin Password"
                  onChange={onchange}
                ></input>
              </div>
            </div>
            <button className="login" onClick={onsubmit}>
              {" "}
              Login{" "}
            </button>
          </div>
          <p className="login-status"> {text} </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
