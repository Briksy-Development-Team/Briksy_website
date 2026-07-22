import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
import Footer from '../components/footer/Footer';
import AppPreview from '../components/appreview/AppPreview';

const MainLayout = () => {
    const [mode, setMode] = useState<"collapsed" | "search" | "ai">("collapsed");
    const location = useLocation();
    const hasHero = location.pathname === '/' || location.pathname === '/home';

    return (
        <div>
            <Navbar mode={mode} setMode={setMode} hasHero={hasHero} />
            <Outlet context={{ mode, setMode }} />
            <AppPreview />
            <Footer />

        </div>
    )
}

export default MainLayout