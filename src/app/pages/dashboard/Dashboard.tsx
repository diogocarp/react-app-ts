import { useNavigate } from "react-router-dom"

export const Dashboard = () => {

    const navigate = useNavigate();

    return(
        <div>
        <p>Dashboard</p>
        <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )


}