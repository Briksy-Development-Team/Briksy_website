import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const plans = [
  {
    id: 1,
    title: "Bronze",
    price: "$0",
    
  },
  {
    id: 2,
    title: "Silver",
    price: "$149",
  },
  {
    id: 3,
    title: "Gold",
    price: "$399",
  },
];

const Pricing = () => {
  const container = useRef<HTMLDivElement>(null);
  const [planType, setPlanType] = useState("agency");
  const [active, setActive] = useState(2);

  useGSAP(
    () => {
      gsap.utils.toArray(".pricing-card").forEach((card: any) => {
        const id = Number(card.getAttribute("data-id"));

        const isActive = id === active;

        gsap.to(card, {
          scale: isActive ? 1.05 : 0.96,
          backgroundColor: isActive ? "#24391F" : "#FFFFFF",
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(card.querySelector(".title"), {
          color: isActive ? "#FFFFFF" : "#24391F",
          duration: 0.45,
        });

        gsap.to(card.querySelector(".price"), {
          color: isActive ? "#FFFFFF" : "#24391F",
          duration: 0.45,
        });

        gsap.to(card.querySelector(".button"), {
          backgroundColor: isActive ? "#FFFFFF" : "#24391F",
          color: isActive ? "#24391F" : "#FFFFFF",
          duration: 0.45,
        });

        gsap.to(card.querySelectorAll(".feature"), {
          color: isActive ? "#D8E2D3" : "#666666",
          duration: 0.45,
          stagger: 0.04,
        });
      });
    },
    {
      scope: container,
      dependencies: [active],
    },
  );

  return (
    <section ref={container} className="w-full bg-[#F7F7F4] px-[5%]  py-[15rem]">
      <div className="flex flex-col items-center text-center">

        <p className="uppercase tracking-widest text-[0.85rem] text-[#8A8A84]">
          Subscription Plans
        </p>

        <h1 className="mt-[2rem] text-[#24391F]">

          <span className="block font-inter font-medium text-[8rem] leading-[7.5rem]">
            Simple, transparent
          </span>

          <span className="block font-instrument text-[7rem] leading-[7rem] italic">
            pricing.
          </span>

        </h1>

        <p className="mt-[2.5rem] w-[70%] text-[1.5rem]  text-[#8A8A84]">
          No hidden fees. No surprises. Choose a plan that fits your workflow
          upgrade or downgrade any time. All plans include ABN verification,
          Stripe-managed billing, and access to our full marketplace.
        </p>

      </div>
      <div
        className="
    mt-[3rem]
    inline-flex
    items-center
    p-[0.35rem]
    rounded-full
    border
    border-[#E5E5DE]
    bg-[#F7F7F4]
  "
      >

        {/* AGENCY */}
        <button
          onClick={() => setPlanType("agency")}
          className={`
      px-[2rem]
      py-[0.8rem]
      rounded-full
      text-[1rem]
      transition-all
      duration-300
      ${planType === "agency"
              ? "bg-[#24391F] text-white"
              : "bg-transparent text-[#8A8A84]"
            }
    `}
        >
          Agency
        </button>

        {/* AGENT */}
        <button
          onClick={() => setPlanType("agent")}
          className={`
      px-[2rem]
      py-[0.8rem]
      rounded-full
      text-[1rem]
      transition-all
      duration-300
      ${planType === "agent"
              ? "bg-[#24391F] text-white"
              : "bg-transparent text-[#8A8A84]"
            }
    `}
        >
          Agent
        </button>

      </div>
      {/* CARDS */}
      <div className="mt-[5rem] grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
        {plans.map((plan) => (
          <div
            key={plan.id}
            data-id={plan.id}
            onClick={() => setActive(plan.id)}
            className="
              pricing-card
              rounded-[1.8rem]
              border
              border-[#E5E5DE]
              p-[2rem]
              cursor-pointer
              will-change-transform
            "
          >
            <h2 className="title text-[2.5rem]">{plan.title}</h2>

            <h3 className="price mt-[1rem] text-[4rem] leading-none font-semibold">
              {plan.price}
            </h3>

            {/* FEATURES */}
            <ul className="mt-[2.5rem] flex flex-col gap-[1rem]">
              <li className="feature">✓ Full marketplace access</li>

              <li className="feature">✓ Unlimited listings</li>

              <li className="feature">✓ Analytics dashboard</li>

              <li className="feature">✓ Priority support</li>
            </ul>

            {/* BUTTON */}
            <button
              className="
                button
                mt-[3rem]
                w-full
                py-[1rem]
                rounded-[1rem]
                text-[1rem]
              "
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
