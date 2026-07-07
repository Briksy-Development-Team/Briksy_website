// // import React from "react";
// import Logo from "../../assets/footer/logo.svg";
// import { Link } from "react-router-dom";


// const Footer = () => {
//     return (
//         <footer className="w-full xl:h-[90vh] px-[5%] xl:px-0 font-helvetica  overflow-hidden">

//             <div className="flex flex-col pt-20  xl:flex-row justify-between  ">

//                 <div className="xl:w-[45%] flex flex-col xl:pl-16   justify-evenly">


//                     <div className="w-full">
//                         <img src={Logo} alt="" className="w-full" />
//                     </div>

//                     <div className="flex xl:gap-28 gap-10 py-8 xl:pt-0  ">

//                         <div className="">
//                             <h4 className="text-primary  font-medium text-[0.75rem] xl:text-[1rem] tracking-wider mb-4">
//                                 Platform
//                             </h4>

//                             <ul className="flex flex-col gap-2 xl:gap-[0.9rem] text-[0.75rem] xl:text-[0.8125rem] tracking-wide text-[#222222]">
//                                 <li>Property Search</li>
//                                 <li>Find Builders</li>
//                                 <li>For Agencies</li>
//                                 <li>For Agents</li>
//                                 <li><Link to='/subs'>Subscription Plans</Link></li>
//                             </ul>
//                         </div>

//                         {/* COLUMN 2 */}
//                         <div>
//                             <h4 className="text-primary font-medium text-[0.75rem] xl:text-[1rem] tracking-wider mb-4">
//                                 Resources
//                             </h4>

//                             <ul className="flex flex-col gap-2 xl:gap-[0.9rem] text-[0.75rem] xl:text-[0.8125rem] tracking-wide text-[#222222]">
//                                 <li>About Brisky</li>
//                                 <li>How We Verify</li>
//                                 <li>Featured Listings</li>
//                                 <li>For Contractors</li>
//                                 <li>Financing</li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h4 className="text-primary font-medium text-[0.75rem] xl:text-[1rem] tracking-wider mb-4">
//                                 Contact
//                             </h4>

//                             <ul className="flex flex-col gap-2 xl:gap-[0.9rem] text-[0.75rem] xl:text-[0.8125rem] tracking-wide text-[#222222]">
//                                 <li>Call Us</li>
//                                 <li>Email Us</li>
//                                 <li>Help Centre</li>
//                             </ul>
//                         </div>

//                     </div>

//                     <div className=" border-t border-yellowgray-50/40     pt-2 flex flex-wrap xl:items-center justify-between gap-4">

//                         <p className="text-[#6B6B6B] text-[0.75rem]">
//                             © 2026 Brisky Pty Ltd
//                         </p>

//                         <div className="flex flex-col xl:flex-row text-end xl:gap-7 text-[#6B6B6B] text-[0.8rem]">
//                             <Link to="/terms">Terms</Link>
//                             <Link to="/terms">Privacy</Link>
//                             <Link to="/terms">Compliance</Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE IMAGE */}
          

//             </div>
//         </footer>
//     );
// };

// export default Footer;