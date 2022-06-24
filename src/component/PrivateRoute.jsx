import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
    //UseState
    const [isExpiredTime, setIsExpiredTime] = useState(true);
    //UseEffect
    useEffect(() => {
        checkExpiryTime();
    }, []);
    //Functions
    const checkExpiryTime = () => {
        // debugger
        if (JSON.parse(localStorage.getItem("pacificadmin"))) {
            setIsExpiredTime(true);
        } else {
            setIsExpiredTime(false);
        }
    };
    return isExpiredTime ? children : <Navigate to="/login" />;
}

export default PrivateRoute;