import React, { useState }from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

// class Login extends React.Component {
//     state = {
//         credentials: {
//             username: "",
//             password: ""

//         }
//     };

const Login = props => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = e => {
    setUserName(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const submitLogin = e => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(window.localStorage.getItem('authToken'))
    const credentials = {
      username: username,
      password: password
    };


    axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      console.log(res.data.payload);
      localStorage.setItem("authToken", res.data.payload);
      props.history.push("/protected");
    })
    .catch(err => { console.log(err); });
  };


    // handleChanges = (e) => {
    //     this.setState({
    //         credentials: {
    //             ...this.state.credentials,
    //             [e.target.name]: e.target.value
    //         }
    //     });
    // };


    // login = (e) => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //       .post("/api/login", this.state.credentials)
    //       .then((res) => {
    //         console.log("ms: login success: res: ", res);
    //         localStorage.setItem("authToken", res.data.payload);
    //         props.history.push("/protected");
    //       })
    //       .catch((err) => {
    //         console.error("ms: login failed: err: ", err.message);
    //         localStorage.removeItem("authToken");
    //       });
    //   };
    
      // render() {
        return (
          <div>
            <form onSubmit={submitLogin}>
              <input
                type="text"
                name="username"
                value={username}
                onChange={userNameHandler}
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={passwordHandler}
              />
              <button>Log in</button>
            </form>
          </div>
        );
      }

    
    export default Login;





