/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { languages, frameworks, databases, tools } from "../constants";

const TechCard = ({ name, logo }) => {
  return (
    <figure
      className={twMerge(
        "relative h-24 w-36 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation flex flex-col items-center justify-center gap-2"
      )}
    >
      <img
        className="h-12 w-12 object-contain"
        width="48"
        height="48"
        alt={`${name} logo`}
        src={logo}
      />
      <figcaption className="text-sm font-medium text-white text-center">
        {name}
      </figcaption>
    </figure>
  );
};

export default function Skills() {
  // Split each category into two halves for alternating marquee directions
  const firstHalfLanguages = languages.slice(0, Math.ceil(languages.length / 2));
  const secondHalfLanguages = languages.slice(Math.ceil(languages.length / 2));

  const firstHalfFrameworks = frameworks.slice(0, Math.ceil(frameworks.length / 2));
  const secondHalfFrameworks = frameworks.slice(Math.ceil(frameworks.length / 2));

  const firstHalfDatabases = databases.slice(0, Math.ceil(databases.length / 2));
  const secondHalfDatabases = databases.slice(Math.ceil(databases.length / 2));

  const firstHalfTools = tools.slice(0, Math.ceil(tools.length / 2));
  const secondHalfTools = tools.slice(Math.ceil(tools.length / 2));

  return (
    <div className="items-start mt-25 md:mt-35 c-space" id="skill">
      <h2 className="text-heading text-center text-3xl font-bold mb-8">Tech Stack</h2>
      
      {/* Languages Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Programming Languages</h3>
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {firstHalfLanguages.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
            {secondHalfLanguages.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
      
      {/* Frameworks Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Frameworks</h3>
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstHalfFrameworks.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
            {secondHalfFrameworks.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
      
      {/* Databases Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Databases</h3>
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstHalfDatabases.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
            {secondHalfDatabases.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
      
      {/* Tools Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Development Tools</h3>
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:22s]">
            {firstHalfTools.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:22s] mt-4">
            {secondHalfTools.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
    </div>
  );
}