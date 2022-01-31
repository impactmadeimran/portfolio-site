import React from "react";

const Resume = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      <h1 className="text-center text-2xl uppercase pt-20 font-semibold">
        My Resume
      </h1>
      <div className="max-w-6xl divide-y mx-auto px-10 flex flex-col gap-8 items-center justify-center py-24 ">
        <div className="flex gap-6 md:flex-row flex-col justify-around">
          <div className="flex flex-1 flex-col gap-5">
            <span className="font-semibold text-lg">WEB DESIGNER</span>
            <span>2011 - 2015</span>
          </div>
          <span className="flex-1">
            Vulputate dignissim suspendisse in est ante in nibh mauris. Integer
            quis auctor elit sed. Quis lectus nulla at volutpat diam.
          </span>
        </div>
        <div className="flex gap-6 md:flex-row flex-col justify-around pt-10">
          <div className="flex flex-1 flex-col gap-5">
            <span className="font-semibold text-lg">WEB DESIGNER</span>
            <span>2011 - 2015</span>
          </div>
          <span className="flex-1">
            Vulputate dignissim suspendisse in est ante in nibh mauris. Integer
            quis auctor elit sed. Quis lectus nulla at volutpat diam.
          </span>
        </div>
        <div className="flex gap-6 md:flex-row flex-col justify-around pt-10">
          <div className="flex flex-1 flex-col gap-5">
            <span className="font-semibold text-lg">WEB DESIGNER</span>
            <span>2011 - 2015</span>
          </div>
          <span className="flex-1">
            Vulputate dignissim suspendisse in est ante in nibh mauris. Integer
            quis auctor elit sed. Quis lectus nulla at volutpat diam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
