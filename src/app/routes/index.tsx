
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Router = () => {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/dashboard" replace />}/>
      </Routes>
    </BrowserRouter>

    )


}