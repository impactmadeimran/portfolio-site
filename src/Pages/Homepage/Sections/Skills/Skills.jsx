import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Skills = () => {
  return (
    <div className="w-full ">
        <h1 className="text-center text-2xl uppercase pt-20 font-semibold">
        My Skills
      </h1>
      <div className="lg:max-w-7xl flex md:flex-row flex-col gap-10  mx-auto py-20 px-10 ">
        <div className="flex-1 flex flex-col gap-10">
          <div className=" grid grid-cols-1 ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircleIcon className="h-8 w-8" />
                <h1 className="uppercase">ReactJs</h1>
              </div>
              <span>
                Building and maintaining simple front-end responsive Javascript applications with Reactjs
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-1 ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircleIcon className="h-8 w-8" />
                <h1 className="uppercase">Tailwindcss</h1>
              </div>
              <span>
                Creating and designing responsive and mobile-first websites faster and better with Tailwindcss
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-1 ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircleIcon className="h-8 w-8" />
                <h1 className="uppercase">Javascript</h1>
              </div>
              <span>
               Opmitizing the behaviour and performance of web applications with Javascript and also allowing the incorporation of third party libraries
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className=" grid grid-cols-1 ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircleIcon className="h-8 w-8" />
                <h1 className="uppercase">Redux </h1>
              </div>
              <span>
                Managing and centralization state of applications built with libraries such as React and other front-end libraries
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-1 ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircleIcon className="h-8 w-8" />
                <h1 className="uppercase">nodejs</h1>
              </div>
              <span>
                Building and structuring cross-platform back-end applications with Nodejs using Javascript
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-1 ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircleIcon className="h-8 w-8" />
                <h1 className="uppercase">sql</h1>
              </div>
              <span>
                Managing, querying, storing and performing operations on relational databases using SQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
