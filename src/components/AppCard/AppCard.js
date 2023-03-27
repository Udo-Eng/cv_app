import classes from "./appcard.module.css";

const AppCard = (props) => {
    
    return (
        <div className={classes.card} >
            {props.title}
        </div>
    );
}


export default AppCard;