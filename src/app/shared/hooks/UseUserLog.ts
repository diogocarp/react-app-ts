import { useContext } from "react";
import { UserLogContext } from "../contexts";

export const useUserLog = () => {

    const { userName, logout } = useContext(UserLogContext);
    return { userName, logout };

}