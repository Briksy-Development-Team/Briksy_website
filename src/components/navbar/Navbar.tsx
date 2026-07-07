import { Link } from "react-router-dom";
import Logo from "../../assets/logo/briksy.svg";

const NAV_LINKS = [
    { label: "Properties", path: "/" },
    { label: "Find Builders", path: "/properties" },
    { label: "How it Works", path: "/support" },
    { label: "About", path: "/about" },
];

const Navbar = () => {
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
                    <img src={Logo} alt="" />
                </Link>

                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex items-center gap-6
                            px-6 py-4
                            rounded-lg
                            bg-black/30
                            backdrop-blur-lg
                        "
                    >
                        {NAV_LINKS.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`
                                        text-lg font-semibold no-underline font-medium    
                                        transition-all duration-300
                                        hover:text-white
                                        ${isActive
                                            ? "text-white"
                                            : // : "text-zinc-300"
                                            "text-white"
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        to="/login"
                        className="
                            px-5 py-4
                            rounded-lg
                            bg-white
                            text-[#342511] text-lg  font-medium
                            no-underline
                            transition-all duration-300
                        "
                    >
                        Book a Visit
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
