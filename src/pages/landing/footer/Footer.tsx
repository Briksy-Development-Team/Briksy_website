import Logo from "../../../assets/footer/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-[#F8F4EE] font-helvetica">
            {/* Main Container */}
            <div className=" mx-auto px-[5%]  pt-20">

                {/* Top */}
                <div className="flex flex-col lg:flex-row justify-between gap-16">

                    <div className="max-w-md  text-lg text-[#6B6B6B] leading-8">
                        Request time off, get approvals, and keep your whole team in the
                        loop — without leaving the conversation.
                    </div>

                    <div className="flex gap-20 text-lg text-[#555]">
                        <ul className="space-y-4">
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/">Compliance</Link>
                            </li>
                        </ul>

                        <ul className="space-y-4">
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/">Compliance</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20">
                    <img
                        src={Logo}
                        alt="Briksy"
                        className="w-full "
                    />
                </div>
            </div>

            <div className="bg-[#342511] text-[#F8F4EE] ">
                <div className=" mx-[5%]   py-4 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p>© 2026 Brikshy</p>

                    <div className="flex gap-8">
                        <Link to="/terms">Privacy Policy</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;