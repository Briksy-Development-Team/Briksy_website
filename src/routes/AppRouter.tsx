import { Route, Routes } from "react-router-dom";
// import Profile from '../pages/profile/Profile'
import Home from "../pages/landing/Home";
import Login from "../pages/auth/login/Login";
import MainLayout from "./MainLayout";
import SignUp from "../pages/auth/signup/SignUp";
import Forgot from "../pages/auth/forgot/Forgot";
import ProtectedRoute from "./ProtectedRoute";
import Terms from "../pages/landing/terms/Terms";
import Pricing from "../pages/landing/subscription/Pricing";
// import HomeA from "../pages/home/Home";
import SearchPage from "../pages/searchresult/SearchPage";
import Error from "../components/error/Error";
import Coming from "../components/coming/Coming";

const AppRouter = () => {
    // const AppRouter = ({ dark, setDark }: AppRouterProps) => {

    return (
        // <Routes>
        //     <Route element={<MainLayout dark={dark} setDark={setDark} />}>
        //         <Route path='/' element={<Home dark={dark} />} />
        //         <Route path='/terms' element={<Terms dark={dark} />} />
        //         <Route path='/subs' element={<Pricing dark={dark} />} />

        //         <Route element={<ProtectedRoute />}>
        //             <Route path='/profile' element={<Profile dark={dark} />} />
        //         </Route>
        //     </Route>

        //     {/* Routes WITHOUT Navbar */}
        //     <Route path='/login' element={<Login dark={dark} />} />
        //     <Route path='/register' element={<SignUp dark={dark} />} />
        //     <Route path='/forgot' element={<Forgot dark={dark} />} />

        // </Routes>

        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/terms" element={<Terms />} />
                <Route path="/subs" element={<Pricing />} />

                <Route element={<ProtectedRoute />}>
                    {/* <Route path='/profile' element={<Profile />} /> */}
                </Route>

                <Route path="/" element={<Home />} />
                {/* <Route path="/home" element={<HomeA />} /> */}
                <Route path="/result" element={<SearchPage />} />
            </Route>
            <Route path="/error" element={<Error />} />
            <Route path="/coming-soon" element={<Coming />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />
        </Routes>
    );
};

export default AppRouter;
