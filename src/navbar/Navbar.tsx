import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"

interface NavbarProps {
    avatar?: string
    name?: string
}

const NAV_LINKS = [
    { label: "Properties", path: "/" },
    { label: "Find Builders", path: "/properties" },
    { label: "How it Works", path: "/support" },
    { label: "About", path: "/about" },
]

const Navbar = ({ avatar, name }: NavbarProps) => {
    const location = useLocation()
    const navigate = useNavigate()

    const { user, isAuthenticated, logout } = useAuth()

    const displayName = user?.name ?? name ?? "User"

    return (
        <nav
            className="
                fixed top-0 left-0 w-full z-50
                   backdrop-blur-xs
            "
        >
            <div
                className="
                    flex items-center justify-between
                    border-b border-white/20 
                    py-7  px-12
                "
            >

                <Link
                    to="/"
                    className="
                        text-black text-5xl
                        font-light tracking-tight
                        no-underline
                    "
                >
                    briksy<span className="text-red-500 ">.</span>
                </Link>

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex items-center gap-6
                            px-6 py-4
                            rounded-lg
                            bg-black/50
                            backdrop-blur-lg
                        "
                    >
                        {NAV_LINKS.map((item) => {
                            const isActive = location.pathname === item.path

                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`
                                        text-lg no-underline font-medium    
                                        transition-all duration-300
                                        hover:text-white
                                        ${isActive
                                            ? "text-white"
                                            // : "text-zinc-300"
                                            : "text-white"

                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>

                    <Link
                        to="/login"
                        className="
                            px-5 py-4
                            rounded-lg
                            bg-[#2C3F24]
                            text-white text-lg  font-medium
                            no-underline
                            transition-all duration-300
                        "
                    >
                        Book a Visit
                    </Link>
                </div>
            </div>

            {/* {avatar && isAuthenticated && (
                <Link to="/profile">
                    <img
                        src={avatar}
                        alt={displayName}
                        className="
                            w-8 h-8 rounded-full
                            object-cover cursor-pointer
                            ring-2 ring-zinc-700
                            ring-offset-2 ring-offset-black
                        "
                    />
                </Link>
            )} */}

            {/* {isAuthenticated ? (
                <button
                    type="button"
                    onClick={async () => {
                        await logout()
                        navigate("/login", { replace: true })
                    }}
                    className="
                        py-1 px-3 rounded-4xl
                        text-white
                        hover:bg-white hover:text-black
                        transition-all duration-200
                        cursor-pointer
                    "
                >
                    {displayName}
                </button>
            ) : (
                <Link
                    to="/login"
                    className="
                        py-1 px-3 rounded-4xl
                        text-white no-underline
                        hover:bg-white hover:text-black
                        transition-all duration-200
                    "
                >
                    Login
                </Link>
            )} */}
        </nav>
    )
}

export default Navbar