import React from "react";
import delivery from "../assets/img/delivery.png";
import heroBg from "../assets/img/heroBg.png";
import i1 from "../assets/img/i1.png";

function HomeContainer() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen overflow-x-hidden"
      id="home"
    >
      <div className="flex-1  flex-col items-start mt-20 justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 w-fit rounded-full">
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
          className="bg-gradient-to-br text-2xl font-semibold text-white  from-orange-500 to-orange-600 w-full px-14 py-4 rounded-lg hover:shadow-lg mt-10 transition-all ease-in-out duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 relative flex items-center">
        <img src={heroBg} className=" ml-auto  h-[650px]" alt="" />
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 px-32 py-4">
          <div className="w-190 p-4 bg-cardOverview backdrop-blur-md rounded-3xl flex flex-col ite justify-center">
            <img src={i1} className="w-40 -mt-20 " />
            <p className="m-auto text-lg font-semibold text-gray-500 mt-4 ">
              Ice Cream
            </p>
            <p className=" m-auto text-sm my-3 text-gray-400">
              Chocklet and venila
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
