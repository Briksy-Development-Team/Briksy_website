import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
// import { profileData } from '../data/profileDummydata'
import Contact from '../pages/landing/contact/Contact'
import Footer from '../pages/landing/footer/Footer'

const MainLayout = () => {
    // const MainLayout = ({ dark, setDark }: any) => {

    return (
        // <div className={`min-h-screen ${dark ? "bg-black text-white" : "bg-zinc-50 text-black"}`}>
        <div>
            {/* <Navbar
                dark={dark}
                setDark={setDark}
                avatar={profileData.seeker.avatar}
                name={profileData.seeker.name}
            /> */}
            <Navbar

            />

            <Outlet />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainLayout