import classes from "./appsidebar.module.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppSideBarNav from "../AppSideBarNav/AppSideBarNav";

const AppSideBar = () => {
  return (
    <div className={classes.appsidebar}>
      <h3>Dashboard</h3>
      <nav className={classes.nav}>
        <ul>
          <AppSideBarNav title="Dashboard" link="/dashboard">
            <DashboardIcon />
          </AppSideBarNav>
          <AppSideBarNav title="Profile" link="/dashboard/profile">
            <Person2Icon />
          </AppSideBarNav>
          <AppSideBarNav title="Vitae" link="/dashboard/builder">
            <PictureAsPdfIcon />
          </AppSideBarNav>
          <AppSideBarNav title="Settings" link="/dashboardsettings">
            <SettingsIcon />
          </AppSideBarNav>
        </ul>
      </nav>
    </div>
  );
};

export default AppSideBar;
