import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import {AuthContext} from "../contexts/UserContext";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(loading);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace ></Navigate >;
    };

    return children;

};

export default PrivateRoute;