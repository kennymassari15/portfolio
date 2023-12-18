import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

import { WorkExperience } from "./WorkExperience";
import HackReactor from "../../public/hackReactor.png";
import UTA from "../../public/uta.png";
import BSWH from "../../public/bswh.svg"
import COOP from "../../public/co-op.png"
import AH from "../../public/AH.svg"

export const Portfolio = ({ skills }: { skills: string[] }) => {
  return (
    <div className="p-5 my-5 bg-white rounded-lg shadow-lg">
      <div className="boldTitle">About Me</div>
      <div className="text-justify">
        My strong curiosity of technology has driven me to explore various IT
        domains such as Networking, AI, Cyber Security, Cloud, and Software
        Development. This journey has brought me to the realization that my true
        passion lies in building applications. With its versatile nature and
        ever-changing environment, software engineering presents a new and
        exciting challenge day to day. My diverse technological background and
        desire for an exhilarating challenge enables me to make valuable
        contributions on any team or organization.
      </div>
      <div className="boldTitle">Resume</div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2">
        <div className="m-2">
          <div className="flex items-center pb-3 gap-x-3">
            <div className="p-2 bg-blue-400 rounded-full">
              <BriefcaseIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="text-xl font-semibold">Experience</div>
          </div>
          <div className="flex flex-col gap-y-3">
            <WorkExperience
              logo={AH}
              title="IT Support"
              company="Advent Health"
              location="Burleson"
              duration="Oct 2023 - Present"
            />
            <WorkExperience
              logo={COOP}
              title="System Analyst"
              company="Coop Solutions"
              location="Fort Worth"
              duration="Sept 2019 - April 2022"
            />
            <WorkExperience
              logo={BSWH}
              title="IT Support"
              company="BaylorScott&White"
              location="Dallas"
              duration="Jun 2019 - Sept 2019"
            />
          </div>
        </div>
        <div className="m-2">
          <div className="flex items-center pb-3 gap-x-3">
            <div className="p-2 bg-blue-400 rounded-full">
              <AcademicCapIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="text-xl font-semibold">Education</div>
          </div>
          <div className="flex flex-col gap-y-3">
            <WorkExperience
              logo={HackReactor}
              title="Hack Reactor"
              company="Software Engineering"
              duration="Dec 2022 - May 2023"
            />
            <WorkExperience
              logo={UTA}
              title="University of Texas at Arlington"
              company="Broadcasting"
              location="Arlington"
              duration="2018 - 2020"
            />
          </div>
        </div>
      </div>
      <div className="boldTitle">Skills</div>
      <ul>
        <li className="skillsGroup">
          {skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </li>
      </ul>
    </div>
  );
};
