import React from "react";

const WaysToGive = () => {
  return (
    <div className="text-center p-5">
      <h2 className="text-5xl font-extrabold mb-4 font-raleway">
        Ways To Give
      </h2>
      <div className="flex justify-center gap-9">
        <div className="flex-col  justify-items-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
                  <div className="text-center text-2xl font-bold">Give Online</div>
                  <p>Give online through our easy-to-use giving platform.</p>
        </div>
        <div className="flex-col  justify-items-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="text-center text-2xl font-bold">Give Online</div>
        </div>
      </div>
    </div>
  );
};

export default WaysToGive;
