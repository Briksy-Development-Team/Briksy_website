import { Link } from "react-router-dom";
import Contacts from "../../../assets/videos/Contact.mp4";

const badges = ["ABN verification required", "No setup fees", "Cancel anytime"];

const Contact = () => {
    return (
        <div className="w-full px-[5%] font-helvetica  py-10 lg:py-14">
            <div className="w-full bg-[#F0ECE5] rounded-[2rem] px-8  flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="lg:w-[50%] ">
                    <div className="flex flex-wrap gap-3 mb-8">
                        {badges.map((badge) => (
                            <span
                                key={badge}
                                className="bg-white rounded-full px-5 py-2 text-lg text-[#2E2620]"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-[#2E2620] text-[3rem] leading-tight font-medium">
                        Are you a property
                        <br />
                        professional?
                    </h2>

                    <p className="text-[#5C5347] text-[1.125rem] mt-6 max-w-lg">
                        Join <span className="font-semibold text-[#2E2620]">340+</span> verified
                        builders, brokers, and trades on BRISKY. List your services, manage
                        enquiries, and grow your business.
                    </p>

                    <div className="flex items-center gap-4 mt-10">
                        <button className="px-6 py-3 bg-[#342511] text-white rounded-xl text-lg font-medium">
                            List Your Business
                        </button>

                        <Link
                            to="/subs"
                            className="px-6 py-3 border border-[#342511] text-[#342511] rounded-xl text-lg font-medium bg-white"
                        >
                            View Subscription Plans
                        </Link>
                    </div>
                </div>

                <div className="lg:w-[40%] bg-gray-400    flex justify-center">
                    <video
                        src={Contacts}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full  h-auto object-contain"
                    />                </div>
            </div>
        </div>
    );
};

export default Contact;