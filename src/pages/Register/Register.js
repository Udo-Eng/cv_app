import { Fragment, useState } from "react";
import Card from "../../components/UI/Card";
import classes from "./register.module.css";

const Register = () => {
  const [isLoginActive, setLoginActive] = useState(true);
  const [isRegisterActive, setRegisterIsActive] = useState(false);

  const setLoginTabHandler = () => {
    setLoginActive(true);
    if (isRegisterActive) setRegisterIsActive(false);
  };

  const setRegisterTabHandler = () => {
    setRegisterIsActive(true);
    if (isLoginActive) setLoginActive(false);
  };

  const loginClassName = isLoginActive
    ? classes.headerActive
    : classes.headerInActive;

  const registerClassName = isRegisterActive
    ? classes.headerActive
    : classes.headerInActive;

  return (
    <Fragment>
      <div className={classes.container}>
        <Card>
          <div className={classes.form}>
            <div className={classes.header}>
              <div className={loginClassName} onClick={setLoginTabHandler}>
                <h1>Login</h1>
              </div>
              <div
                className={registerClassName}
                onClick={setRegisterTabHandler}
              >
                <h1>Sign up</h1>
              </div>
            </div>
            <form>
              { isRegisterActive && 
                <Fragment>
                  <div className={classes["form-control"]}>
                    <label htmlFor="firstname" >
                      Firstname
                    </label>
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      required={true}
                    />
                  </div>
                  <div  className={classes["form-control"]}>
                    <label htmlFor="lastname" >
                      Lastname
                    </label>
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      required={true}
                    />
                  </div>
                </Fragment>
              }
              <div className={classes["form-control"]}>
                <label htmlFor="email" >
                  Email
                </label>
                <input id="email" name="email" type="email" required={true} />
              </div>
              <div className={classes["form-control"]}>
                <label htmlFor="password" >
                  password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required={true}
                />
              </div>
                <input type="submit" value={ isRegisterActive ? "Sign up" : "Login"} className={classes.btn}/> 
            </form>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Register;
