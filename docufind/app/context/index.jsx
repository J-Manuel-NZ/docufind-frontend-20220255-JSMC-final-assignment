"use client"
import {createContext, useState, useContext, useMemo} from 'react';

const AppContext = createContext({});

export function AppWrapper({children}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        employeeID: '',
        isAdmin: false,
        userAuthenticated: false,
    });

    const userValue = useMemo(
      () => ({user, setUser}),
      [user, setUser]);

  return (
    <AppContext.Provider value={userValue}>
        {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}