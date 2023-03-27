import classes from './appsidebarnav.module.css';
import {Link}  from 'react-router-dom';


const AppSideBarNav = (props) => {
     const {title,children,link} = props;
     return (
      <Link to={link} ><li   className={classes.navItem}>{children}<p className={classes.title}>{title}</p></li></Link>
        
     );
}

export default AppSideBarNav;