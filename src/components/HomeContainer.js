import React from "react";
import delivery from "../assets/img/delivery.png";
import heroBg from "../assets/img/heroBg.png";

function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen overflow-x-hidden" id="home">
      <div className="flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-sm text-orange-500 font-semibold">
            Fastest Delivery
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden">
            <img
              src={delivery}
              alt="dev"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide  md:text-[3.5rem]">
          The Fastest Delivery in{" "}
          <span className="text-orange-500 text-[3rem]  md:text-[5rem]">
            Your city.
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque,exercitationem praesentium
          nihil. Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-500 to-orange-600 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center ">
        <img
          src={heroBg}
          className=" ml-auto  h-[650px]"
          alt=""
        />
      </div>
    </section>
  );
}

export default HomeContainer;
