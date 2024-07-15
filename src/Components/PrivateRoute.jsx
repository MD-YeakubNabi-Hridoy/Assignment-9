import { Navigate, Outlet } from "react-router-dom";
import {UseAuthStatus} from "../Hooks/UseAuthStatus";

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = UseAuthStatus();

    if(checkingStatus){
        return <h3 className="h-[81vh] flex justify-center items-center text-2xl font-bold">Loading...</h3>
    }
    return loggedIn ? <Outlet/> : <Navigate to="/login"/>
};

export default PrivateRoute;