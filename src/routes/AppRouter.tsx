import { Route, Routes } from 'react-router-dom'
// import Profile from '../profile/Profile'
import Home from '../home_UnderMaintainance/Home'
import Login from '../login-signup/login/Login'
import MainLayout from './MainLayout'
import SignUp from '../login-signup/signup/SignUp'
import Forgot from '../login-signup/forgot/Forgot'
import ProtectedRoute from './ProtectedRoute'
import Terms from '../home_UnderMaintainance/terms/Terms'
import Pricing from '../home_UnderMaintainance/subscription/Pricing'
import HomeA from '../navbaranimation/HomeA'

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
                <Route path='/' element={<Home />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/subs' element={<Pricing />} />

                <Route path='/nav' element={<HomeA />} />

                <Route element={<ProtectedRoute />}>
                    {/* <Route path='/profile' element={<Profile />} /> */}
                </Route>
            </Route>

            {/* Routes WITHOUT Navbar */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/forgot' element={<Forgot />} />



        </Routes>
    )
}

export default AppRouter
