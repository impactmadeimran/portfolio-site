import React from "react";
import IG from "../../../../assets/instagram.png";
import Twitter from "../../../../assets/twitter.png";

const About = () => {
  return (
    <div className="w-full ">
      <div className="lg:max-w-7xl flex flex-col gap-6 lg:flex-row mx-auto py-32 px-8 ">
        <div className="flex flex-col flex-1 gap-4 ">
          <span className="text-base">About Me</span>
          <span className="text-3xl ">I'm a front-end web developer</span>
        </div>
        <div className="flex-1 flex flex-col gap-8 text-xl">
          <span>
            My name is Imran Odoi Yemoh, I am a front-end web developer. I am
            currently acquiring a Bachelors degree in Information Technology
            from Ghana Communications Technology University (GCTU). I have
            interests in reading, coding and engaging in outdoor physical
            activities. I am great with English and Ga.I am also familiar with
            the basic front end languages and I am quite adept in programming
            and mark-up languages and have over 2 years experience in building
            front end applications.
          </span>
          <span>
            In a few years to come, I see myself as one of the team players who
            are going revolutionize coding In Africa and get Africans more
            invested in it rather just being users.
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
