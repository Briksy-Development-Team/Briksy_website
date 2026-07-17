import { useMemo, useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";

import profile from "../../../assets/dummy/dummyp.png";

const tabs = [
  "Electrical",
  "Plumbing",
  "Fencing",
  "Landscapers",
  "Conveyancers",
  "Brokers",
];

const serviceData = {
  Electrical: [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Real estate agent",
      rating: 4.9,
      reviews: 210,
      review: "Incredibly knowledgeable and attentive.",
    },
    {
      id: 2,
      name: "Emily Davis",
      role: "Investment consultant",
      rating: 4.6,
      reviews: 160,
      review: "Exceeded my expectations, very satisfied with the results!",
    },
    {
      id: 3,
      name: "Alex Thompson",
      role: "Financial advisor",
      rating: 4.8,
      reviews: 175,
      review: "Professional and very helpful throughout the process!",
    },
    {
      id: 4,
      name: "David Smith",
      role: "Wealth manager",
      rating: 4.8,
      reviews: 220,
      review: "Absolutely the best experience, highly recommend!",
    },
    {
      id: 5,
      name: "Jessica Lee",
      role: "Insurance agent",
      rating: 4.7,
      reviews: 190,
      review: "Great service, would recommend to anyone!",
    },
    {
      id: 6,
      name: "Sophia Brown",
      role: "Tax advisor",
      rating: 4.7,
      reviews: 185,
      review: "Very thorough and easy to work with.",
    },
  ],

  Plumbing: [
    {
      id: 1,
      name: "Daniel Wilson",
      role: "Master Plumber",
      rating: 4.8,
      reviews: 140,
      review: "Quick service and very professional.",
    },
    {
      id: 2,
      name: "Ryan Miller",
      role: "Pipe Specialist",
      rating: 4.9,
      reviews: 198,
      review: "Solved my issue within an hour.",
    },
    {
      id: 3,
      name: "Chris Walker",
      role: "Emergency Plumber",
      rating: 4.7,
      reviews: 156,
      review: "Highly recommended for urgent work.",
    },
    {
      id: 4,
      name: "Oliver Scott",
      role: "Drain Expert",
      rating: 4.8,
      reviews: 121,
      review: "Affordable and efficient.",
    },
    {
      id: 5,
      name: "Ethan Hall",
      role: "Residential Plumbing",
      rating: 4.6,
      reviews: 102,
      review: "Very friendly staff.",
    },
    {
      id: 6,
      name: "Noah Green",
      role: "Commercial Plumbing",
      rating: 4.9,
      reviews: 233,
      review: "Outstanding workmanship.",
    },
  ],

  Fencing: [
    {
      id: 1,
      name: "Fence Masters",
      role: "Wood Fencing",
      rating: 4.8,
      reviews: 90,
      review: "Excellent quality fencing.",
    },
    {
      id: 2,
      name: "Elite Fence Co.",
      role: "Steel Fencing",
      rating: 4.9,
      reviews: 112,
      review: "Beautiful finish and timely work.",
    },
    {
      id: 3,
      name: "Secure Boundaries",
      role: "Security Fence",
      rating: 4.7,
      reviews: 75,
      review: "Very durable installation.",
    },
    {
      id: 4,
      name: "Perfect Fence",
      role: "Garden Fence",
      rating: 4.6,
      reviews: 88,
      review: "Looks fantastic.",
    },
    {
      id: 5,
      name: "Boundary Experts",
      role: "PVC Fence",
      rating: 4.8,
      reviews: 140,
      review: "Worth every penny.",
    },
    {
      id: 6,
      name: "Classic Fence",
      role: "Decorative Fence",
      rating: 4.7,
      reviews: 100,
      review: "Amazing craftsmanship.",
    },
  ],

  Landscapers: [
    {
      id: 1,
      name: "Liam Carter",
      role: "Landscape Architect",
      rating: 4.9,
      reviews: 284,
      review:
        "Completely transformed our backyard into a beautiful outdoor space.",
    },
    {
      id: 2,
      name: "Olivia Bennett",
      role: "Garden Designer",
      rating: 4.8,
      reviews: 193,
      review: "Creative ideas and attention to every small detail.",
    },
    {
      id: 3,
      name: "Mason Rivera",
      role: "Outdoor Living Expert",
      rating: 4.7,
      reviews: 165,
      review: "Professional team with outstanding landscaping work.",
    },
    {
      id: 4,
      name: "Charlotte Brooks",
      role: "Lawn Care Specialist",
      rating: 4.8,
      reviews: 201,
      review: "Our lawn has never looked this healthy before.",
    },
    {
      id: 5,
      name: "Benjamin Foster",
      role: "Irrigation Consultant",
      rating: 4.6,
      reviews: 144,
      review: "Installed an efficient irrigation system with zero issues.",
    },
    {
      id: 6,
      name: "Amelia Ross",
      role: "Tree & Plant Specialist",
      rating: 4.9,
      reviews: 227,
      review: "Very knowledgeable about plants and garden planning.",
    },
  ],

  Conveyancers: [
    {
      id: 1,
      name: "Nathan Hughes",
      role: "Residential Conveyancer",
      rating: 4.9,
      reviews: 312,
      review: "Made the entire home-buying process stress free.",
    },
    {
      id: 2,
      name: "Grace Turner",
      role: "Property Law Consultant",
      rating: 4.8,
      reviews: 221,
      review: "Excellent communication from start to finish.",
    },
    {
      id: 3,
      name: "Lucas Murphy",
      role: "Settlement Officer",
      rating: 4.7,
      reviews: 168,
      review: "Everything was completed ahead of schedule.",
    },
    {
      id: 4,
      name: "Ella Cooper",
      role: "Title Transfer Specialist",
      rating: 4.8,
      reviews: 192,
      review: "Very organized and transparent throughout the process.",
    },
    {
      id: 5,
      name: "Henry Collins",
      role: "Commercial Conveyancer",
      rating: 4.7,
      reviews: 148,
      review: "Handled complex paperwork with great expertise.",
    },
    {
      id: 6,
      name: "Zoe Richardson",
      role: "Legal Property Advisor",
      rating: 4.9,
      reviews: 265,
      review: "Highly professional and incredibly responsive.",
    },
  ],

  Brokers: [
    {
      id: 1,
      name: "Ethan Parker",
      role: "Mortgage Broker",
      rating: 4.9,
      reviews: 341,
      review: "Found us a loan with an amazing interest rate.",
    },
    {
      id: 2,
      name: "Isabella Reed",
      role: "Commercial Finance Broker",
      rating: 4.8,
      reviews: 206,
      review: "Very transparent and explained every option clearly.",
    },
    {
      id: 3,
      name: "Jack Watson",
      role: "Home Loan Specialist",
      rating: 4.7,
      reviews: 188,
      review: "Quick approvals and excellent customer support.",
    },
    {
      id: 4,
      name: "Harper Bailey",
      role: "Investment Loan Advisor",
      rating: 4.8,
      reviews: 234,
      review: "Helped us secure funding much faster than expected.",
    },
    {
      id: 5,
      name: "Samuel Ward",
      role: "Refinancing Consultant",
      rating: 4.6,
      reviews: 153,
      review: "Saved us a significant amount through refinancing.",
    },
    {
      id: 6,
      name: "Chloe Jenkins",
      role: "Property Finance Expert",
      rating: 5.0,
      reviews: 298,
      review: "Exceptional service and always available to answer questions.",
    },
  ],
};

const ServiceList = () => {
  const [activeTab, setActiveTab] = useState("Electrical");

  const data = useMemo(
    () => serviceData[activeTab as keyof typeof serviceData],
    [activeTab],
  );

  return (
    <section className="py-20 font-helvetica ">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between lg:items-center items-end">
          <div className="text-center">
            <h2 className="lg:text-[2.75rem] text-[1.875rem] font-medium tracking-tight">
              Explore Our
              Service Providers
            </h2>
          </div>

          <button className="flex items-center   gap-2 text-[#562F00] font-medium">
            View All
            <ArrowUpRight size={24} />
          </button>
        </div>

        <div className="mt-10 flex text-[1rem] flex-wrap sm:justify-start  justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`min-w-[140px] rounded-xl border border-[#DBDAD3] py-2 transition ${activeTab === tab ? "bg-[#242424] text-white" : "bg-white "
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-4  hover:bg-[#E7D0B3] group border border-[#E2CBB3]"
            >
              <div className="flex gap-4">
                <img
                  src={profile}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-[1.25rem] font-medium">{item.name}</h3>

                  <p className="text-[#6B6B6B]  font-medium text-[0.875rem] group-hover:text-black">
                    {item.role} from
                  </p>

                  <div className="mt-2 flex text-[1rem] items-center gap-2">
                    <Star size={18} fill="#ff7a00" stroke="#ff7a00" />

                    <span>{item.rating.toFixed(1)}</span>

                    <span className="text-gray-500">({item.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-[#98928E] group-hover:text-black">Latest review</p>

                <p className="mt-2 italic text-gray-700 group-hover:text-black">"{item.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
