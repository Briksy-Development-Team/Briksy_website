import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { profileData } from '../data/profileDummydata'
import Contact from '../home_UnderMaintainance/contact/Contact'
import Footer from '../home_UnderMaintainance/footer/Footer'

const MainLayout = ({ dark, setDark }: any) => {
    return (
        // <div className={`min-h-screen ${dark ? "bg-black text-white" : "bg-zinc-50 text-black"}`}>
        <div>
            <Navbar
                dark={dark}
                setDark={setDark}
                avatar={profileData.seeker.avatar}
                name={profileData.seeker.name}
            />

            <Outlet />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainLayout