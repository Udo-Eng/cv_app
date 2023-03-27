import classes  from './apphome.module.css';
import AppCard  from '../AppCard/AppCard';


const AppHome = () => {
    return (
        <main className={classes.apphome}>
            <AppCard title="Create CV"/>
            <AppCard title="Create Resume"/>
        </main>
    )
}

export default AppHome;