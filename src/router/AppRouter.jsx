import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import EmployeesList from "../pages/EmployeeList/EmployeesList"
import NotFound from "../pages/NotFound"
import AppLayout from "../components/AppLayout/AppLayout";

const AppRouter = () => {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/employees-list" element={<EmployeesList/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </AppLayout>
        </Router>
    )
}

export default AppRouter