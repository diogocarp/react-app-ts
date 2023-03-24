import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUserChildren {
  children?: React.ReactNode;
}
interface IUserLogContextData {
  userName: string;
  logout: () => void;
}
export const UserLogContext = createContext<IUserLogContextData>(
  {} as IUserLogContextData
);

export const UserLogProvider: React.FC<IUserChildren> = ({ children }) => {

  const [name, setName] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setName('Lucas')
    }, 600)
  })

  const handleLogout = useCallback(() => {

    console.log("Logout foi executado")
   
    
  },[])

  return (
    <UserLogContext.Provider value={{ userName: name, logout: handleLogout}}>
      {children}
    </UserLogContext.Provider>
  );
};
