import React, { createContext, useState } from "react";

export const setUser = (userDetails) => {
    const currentUser = {
        name: userDetails.name,
        email: userDetails.email,
        employeeID: userDetails.employeeID,
        isAdmin: userDetails.isAdmin,
        userAuthenticated: true
    }
    return currentUser;
}

