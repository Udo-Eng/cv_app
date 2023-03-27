import AuthContext from './user-auth-context';
import {useState} from 'react';


// Setting a Timer Variable
let logoutTimer;


const calculateRemainingTime  = (expirationTime) => {

    const CurrentTime = new Date().getTime();

    const AdjustedTime = new Date(expirationTime).getTime();

    let remainingTime =  AdjustedTime -  CurrentTime;

    // Return the avaliable time remaining in milliseconds.
    return  remainingTime;
}


const retrieveUserToken  =  () => {
    
        const storedToken = localStorage.getItem('token');

        // Retrieve the Future TimeStamp in miliseconds stored in localStorage
        const storedExpirationTime = Number(localStorage.getItem('expirationTime'));
        // const storedTokenValidDays = Number(localStorage.getItem('TokenValidDays'));

        // Obtain the current TimeStamp in milliseconds;
        const currentTime = new Date().getTime();
    
        // The time remaining for the token to expire
        let remainingTime = calculateRemainingTime(storedExpirationTime); 

        // The total time required for the token expire in miliseconds 

        // let totalExpirationTimeInMilliseconds = ( 86400 * 1000 * storedTokenValidDays );

        if(currentTime >= storedExpirationTime ){
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
            return null
        }
    
        return {
            token : storedToken,
            duration: remainingTime
        }
    
}


const UserAuthProvider = (props) => {
        // Getting the initialState value from localStorage 
        let tokenData =  retrieveUserToken()

        let initalToken;

        if(tokenData){
            initalToken = tokenData.token;
        }

     

        const [token,setToken] = useState(initalToken);

        // Use the token state to derive the userIsLoggedIn State
        const userIsLoggedIn = !!token;

        
        const logoutHandler = () => {

            // The most basic Handler is setting toekn to null value 
            setToken(null);

            // Remove the token value for the storage

            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');

            if(logoutTimer){
                clearTimeout(logoutTimer);
              }

        }


        // Create Handler function to login and logout the user
        const loginHandler = (token,expirationTime) => {

            
                setToken(token);
                
                // Setting the  token  value in localStorage 
                localStorage.setItem('token',token);

                localStorage.setItem( 'expirationTime' , expirationTime );


                const remainingTime  = calculateRemainingTime(expirationTime);

                // Setting a Timer to automatically Logout The User After the time set;
                logoutTimer = setTimeout(logoutHandler,remainingTime);

        };


    const contextValue = {
        token : token,
        isLoggedIn : userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default UserAuthProvider;