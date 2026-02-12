import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("user")

    return isAuth ? <Outlet /> : <Navigate to="/" />;

};

export default ProtectedRoute