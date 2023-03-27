import { Fragment, useState,useContext } from "react";
import Card from "../UI/Card";
import classes from "./authform.module.css";
import { createUser, loginUser } from "../../api/auth";
import  AuthContext from '../../context/user-auth-context';
import {useNavigate} from 'react-router-dom';
// import SimpleReactValidator from 'simple-react-validator';



//Create helper function to validate inputs

const isEmailValid = (email) => {
  return email.includes("@");
};

const isInputValid = (text) => {
  if (typeof text === "string") {
    return text.trim().length > 0;
  }
};

const passwordIsNotWeak = (password) => {
  if (typeof password === "string") {
    return password.trim().length > 6;
  }
};


// let validator = new  SimpleReactValidator();

// this.validator.message('title', this.state.title, 'required|email')



const AuthForm = (props) => {

  // Acessing the userAuthContext passed in via the provider
  const AuthCtx = useContext(AuthContext);


  const navigate = useNavigate();

  // HEADER UI STATES
  const [isLoginActive, setLoginActive] = useState(true);
  const [isRegisterActive, setRegisterIsActive] = useState(false);

  // UI State Handler function
  const setLoginTabHandler = () => {
    setLoginActive(true);
    if(isRegisterActive) setRegisterIsActive(false);
  };

  const setRegisterTabHandler = () => {
    setRegisterIsActive(true);
    if(isLoginActive) setLoginActive(false);
  };

  const loginClassName = isLoginActive
    ? classes.headerActive
    : classes.headerInActive;

  const registerClassName = isRegisterActive
    ? classes.headerActive
    : classes.headerInActive;

  // FORM INPUT STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {

    event.preventDefault();


    let loginInputsAreValid = isEmailValid(email) && passwordIsNotWeak(password);
    let registerInputsAreValid = loginInputsAreValid && isInputValid(firstName) && isInputValid(lastName);


    let user;


    if(loginInputsAreValid && isLoginActive) {

      user = { email, password, firstName, lastName };

      let response = await loginUser(user);
      
      // The time in milliseconds that it would take the token to expire.
      let expirationTime = new Date().getTime() + (+response.expires * 1000 * 86400);

      AuthCtx.login(response.token,expirationTime,+response.expires);

      // Navigate to the dashboard

      navigate("/dashboard");


    } else if (isRegisterActive && registerInputsAreValid) {

      user = { email, password, firstName, lastName };

      let response = await createUser(user);

    
      let expirationTime = new Date().getTime() + (+response.expires * 1000 * 86400);

      AuthCtx.login(response.token,expirationTime,+response.expires);

      navigate("/");

    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
      
    
       
  };

  return (
    <Card>
      {/* 
               FORM HEADER BEGINING
       */}
      <div className={classes.form}>
        <header className={classes.header}>
          <div className={loginClassName} onClick={setLoginTabHandler}>
            <h1>Login</h1>
          </div>
          <div className={registerClassName} onClick={setRegisterTabHandler}>
            <h1>Sign up</h1>
          </div>
        </header>
        {/* 
                BEGINING OF AUTH FORM 
            */}
        <form onSubmit={onSubmitHandler}>
          {isRegisterActive && (
            <Fragment>
              <div className={classes["form-control"]}>
                <label htmlFor="firstname">Firstname</label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={firstName}
                  required={true}
                  onChange={onFirstNameChangeHandler}
                />
              </div>
              <div className={classes["form-control"]}>
                <label htmlFor="lastname">Lastname</label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  required={true}
                  value={lastName}
                  onChange={onLastNameChangeHandler}
                />
              </div>
            </Fragment>
          )}
          <div className={classes["form-control"]}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              required={true}
              onChange={onEmailChangeHandler}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required={true}
              onChange={onPasswordChangeHandler}
              value={password}
            />
          </div>
          <input
            type="submit"
            value={isRegisterActive ? "Sign up" : "Login"}
            className={classes.btn}
          />
        </form>
      </div>
    </Card>
  );
};

export default AuthForm;
