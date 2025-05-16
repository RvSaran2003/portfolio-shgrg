/* eslint-disable react/prop-types */
import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "angular.png",
    "bootstrap.png",
    "firebase.png",
    "flutter.png",
    "framer.jpeg",
    "firebase.png",
    "cplusplus.svg",
    "css3.svg",
    "dotnet.svg",
    "dotnetcore.svg",
    "git.svg",
    "html5.svg",
    "javascript.svg",
    "microsoft.svg",
    "react.svg",
    "sqlite.svg",
    "tailwindcss.svg",
    "vitejs.svg",
    "nextjs.png",
    "typescript.png",
    "webpack.png",
    "nodejs.png",
    "express.png",
    "mongodb.png",
    "postman.png",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
