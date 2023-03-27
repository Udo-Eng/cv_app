import AppHeader from '../../components/AppHeader/AppHeader';
import AppSideBar  from '../../components/AppSideBar/AppSideBar';
import AppHome from '../../components/AppHome/AppHome';
import classes from './dashboard.module.css';
import {Routes,Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import Setting from "../Setting/Setting";
import Vitae from "../Vitae/Vitae";


const DashBoard = (props) => {

    const {user} = props;
    
    console.log(user);


    return (
        <div className={classes["appcontainer"]}>
                    <AppSideBar /> 
                    <div className={classes.appbody}>
                        <AppHeader />

                        {/* FORMAT THE ROUTES FOR DISPLAY */}
                        <Routes>
                            <Route path="/" element={<AppHome />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/builder" element={<Vitae />} />
                            <Route path="/settings" element={<Setting />} />
                        </Routes>
                        
                    </div>
                    
        </div>
    )
}


export default DashBoard;