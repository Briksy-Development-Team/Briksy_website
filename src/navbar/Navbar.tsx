import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const NAV_LINKS = [
    { label: "Properties", path: "/" },
    { label: "Find Builders", path: "/properties" },
    { label: "How it Works", path: "/support" },
    { label: "About", path: "/about" },
];

const Navbar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs">
            <div className="flex items-center justify-between border-b border-white/20 py-4 px-6 lg:px-12">
                <Link
                    to="/"
                    className="text-5xl font-light tracking-tight no-underline mix-blend-difference"
                >
                    briksy<span className="text-red-500">.</span>
                </Link>

                <div className="hidden lg:flex items-center gap-3">
                    <div className="flex items-center gap-6 px-6 py-3 rounded-lg bg-black/50 backdrop-blur-lg">
                        {NAV_LINKS.map((item) => {
                            // const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-[0.875rem] no-underline font-medium transition-all duration-300 hover:text-white text-white"                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        to="/login"
                        className="px-5 py-3 rounded-lg bg-primary text-white text-[0.875rem] font-medium no-underline transition-all duration-300"
                    >
                        Book a Visit
                    </Link>
                </div>

                <div className="lg:hidden text-white bg-white/15 rounded-full mix-blend-difference z-[60]">
                    <Hamburger toggled={open} toggle={setOpen} size={24} rounded />
                </div>

                <div
                    className={`fixed inset-0 lg:hidden transition-all  duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div
                        className="absolute inset-0 "
                        onClick={() => setOpen(false)}
                    />

                    <div
                        className={`absolute top-0 left-0 h-screen w-screen bg-white border border-white/10
                         transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex flex-col justify-center items-center h-full gap-8">
                            {NAV_LINKS.map((item) => {
                                // const isActive = location.pathname === item.path;

                                return (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        onClick={() => setOpen(false)}
                                        className="text-2xl font-medium no-underline transition-all  duration-300 ">
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="mt-4 px-8 py-4 rounded-lg bg-primary text-white text-lg font-medium no-underline"
                            >
                                Book a Visit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
