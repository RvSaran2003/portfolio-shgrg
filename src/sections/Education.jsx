// File: src/components/Astronaut.jsx
import { EducationTimeline } from "../components/EducationTimeline";
import { educationData } from "../constants"; // Adjust the import path as necessary

const Education = () => {
    return (
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <EducationTimeline data={educationData} />
      </div>
    );
  };
  
  export default Education;