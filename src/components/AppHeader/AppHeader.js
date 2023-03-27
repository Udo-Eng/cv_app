import SettingsIcon from '@mui/icons-material/Settings';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import classes from './appheader.module.css';

const AppHeader = () => {

          return (
                  <header className={classes.appheader} >
                          {/* <h3>Search</h3> */}
                          <nav className={classes.appheaderNav}>
                              <div className={classes.avatar}></div>
                              <div>
                                <NotificationsOffIcon />
                              </div>
                              <div>
                                <SettingsIcon />
                              </div>
                          </nav>
                  </header>
        );

}


export default AppHeader;