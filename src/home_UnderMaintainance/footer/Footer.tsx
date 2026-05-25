import React from "react";
import FooterImg from "../../assest/footer/footer.svg";
import Logo from "../../assest/footer/logo.svg";


const Footer = () => {
    return (
        <footer className="w-full h-[90vh] font-helvetica  overflow-hidden">

            <div className="flex flex-col pt-20  xl:flex-row justify-between ">

                {/* LEFT SIDE */}
                <div className="xl:w-[45%] flex flex-col pl-16   justify-evenly">


                    <div className="w-full">
                        <img src={Logo} alt="" className="w-full" />
                    </div>

                    {/* LINKS */}
                    <div className="flex gap-28  flex-wrap">

                        {/* COLUMN 1 */}
                        <div className="">
                            <h4 className="text-[#2C3F24]  font-medium text-sm tracking-wider mb-4">
                                Platform
                            </h4>

                            <ul className="flex flex-col gap-[0.9rem] text-[1rem] tracking-wide text-[#222222]">
                                <li>Property Search</li>
                                <li>Find Builders</li>
                                <li>For Agencies</li>
                                <li>For Agents</li>
                                <li>Subscription Plans</li>
                            </ul>
                        </div>

                        {/* COLUMN 2 */}
                        <div>
                            <h4 className="text-[#2C3F24] font-medium text-sm tracking-wider mb-4">
                                Resources
                            </h4>

                            <ul className="flex flex-col gap-[0.9rem] text-[1rem] tracking-wide text-[#222222]">
                                <li>About Brisky</li>
                                <li>How We Verify</li>
                                <li>Featured Listings</li>
                                <li>For Contractors</li>
                                <li>Financing</li>
                            </ul>
                        </div>

                            <div>
                            <h4 className="text-[#2C3F24] font-medium text-sm tracking-wider mb-4">
                                Contact
                            </h4>

                            <ul className="flex flex-col gap-[0.9rem] text-[1rem] tracking-wide text-[#222222]">
                                <li>Call Us</li>
                                <li>Email Us</li>
                                <li>Help Centre</li>
                            </ul>
                        </div>

                    </div>

                    <div className=" border-t-2 border-[#88867A]  pt-5 flex flex-wrap items-center justify-between gap-4">

                        <p className="text-[#6B6B6B] text-[0.9rem]">
                            © 2026 Brisky Pty Ltd
                        </p>

                        <div className="flex gap-7 text-[#6B6B6B] text-[0.9rem]">
                            <span>Terms</span>
                            <span>Privacy</span>
                            <span>Compliance</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="xl:w-[55%]  flex justify-end">
                    <img
                        src={FooterImg}
                        alt="footer"
                        className="w-full w-full object-contain"
                    />
                </div>

            </div>
        </footer>
    );
};

export default Footer;