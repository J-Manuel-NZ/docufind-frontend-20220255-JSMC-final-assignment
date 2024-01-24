"use client"
import {createContext, useState, useContext, useEffect, useMemo} from 'react';


const AppContext = createContext({});

export function AppWrapper({children}) {
  const [userData, setUserData] = useState(
    () => JSON.parse(window.localStorage.getItem('userData')) || null
  );
    
  useEffect(() => {
    // Update localStorage when userData changes
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <AppContext.Provider value={{ userData, updateUserData}}>
        {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}