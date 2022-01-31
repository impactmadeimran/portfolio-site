import React from "react";
import IG from '../../../../assets/instagram.png';
import Twitter from '../../../../assets/twitter.png';

const About = () => {
  return (
    <div className="w-full ">
      <div className="lg:max-w-7xl flex flex-col gap-6 lg:flex-row mx-auto py-32 px-8 ">
        <div className="flex flex-col flex-1 gap-4 ">
          <span className="text-base">About Me</span>
          <span className="text-3xl ">I'm a front end web developer</span>
        </div>
        <div className="flex-1 flex flex-col gap-8 text-xl">
          <span>
            Cursus in hac habitasse platea dictumst. Maecenas volutpat blandit
            aliquam etiam erat velit. Morbi tempus iaculis urna id volutpat
            lacus. Pellentesque diam volutpat commodo sed. Massa eget egestas
            purus viverra accumsan in nisl. Sed elementum tempus egestas.
          </span>
          <span>
            Cursus in hac habitasse platea dictumst. Maecenas volutpat blandit
            aliquam etiam erat velit. Morbi tempus iaculis urna id volutpat
            lacus. Pellentesque diam volutpat commodo sed. Massa eget egestas
            purus viverra accumsan in nisl. Sed elementum tempus egestas.
          </span>
          <div className="flex flex-col gap-5">
              <span className="text-2xl">Follow me</span>
              <div className="flex gap-8">
              <img src={IG} alt="instagram" className="h-8 w-8" />
              <img src={Twitter} alt="instagram" className="h-8 w-8" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
