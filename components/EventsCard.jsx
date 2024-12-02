import Image from "next/image";
import React from "react";

const EventsCard = () => {
  return (
    <div className=" w-full lg:max-w-full md:max-w-full lg:flex justify-center mb-3">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url("/images/bg-image.webp")`,
        }}
        title=""
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl ">
            Prayer and Worship Night
          </div>
          <p className="text-sm text-gray-600 flex items-center mb-2">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              {/* <!-- Clock face --> */}
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="black"
                stroke-width="1"
                fill="white"
              />

              {/* <!-- Hour hand --> */}
              <line
                x1="10"
                y1="10"
                x2="10"
                y2="7"
                stroke="black"
                stroke-width="1.5"
              />

              {/* <!-- Minute hand --> */}
              <line
                x1="10"
                y1="10"
                x2="13"
                y2="10"
                stroke="black"
                stroke-width="1.5"
              />

              {/* <!-- Optional: Second hand (uncomment if needed) --> */}
              <line
                x1="10"
                y1="10"
                x2="7"
                y2="10"
                stroke="red"
                stroke-width="1"
              />
            </svg>
            June 23, 2024 from 6:00 - 7:00pm IST
          </p>
          <p className="text-gray-700 text-base">
            June prayer is moved to the 23rd this month! Join us in the
            sanctuary for a powerful night of worship & prayer.
          </p>
        </div>
        <div className="flex items-center">
          <Image
            className="w-10 h-10 rounded-full mr-4"
            src={"/images/bg-image.webp"}
            width={500}
            height={500}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
