import classes from "./register.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";



const Register = (props) => {
  
  return (
 
      <div className={classes.container}>
        <AuthForm />
       </div>
    
  );
};

export default Register;
