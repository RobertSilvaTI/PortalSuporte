import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Login from "../pages/login/login.jsx";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login} />
                <Route path="/home" Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}
