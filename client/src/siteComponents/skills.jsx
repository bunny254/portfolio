import React, { useState } from "react";

const Skills = () => {
  const skills = [
    { name: "Javascript", percentage: 90 },
    { name: "React.js", percentage: 85 },
    { name: "Node.js", percentage: 75 },
    { name: "MySQL", percentage: 70 },
    { name: "Laravel", percentage: 60 },
    { name: "Git", percentage: 60 },
    { name: "REST", percentage: 50 },
    { name: "MongoDB", percentage: 50 },
    { name: "AWS", percentage: 45 },
    { name: "Python", percentage: 30 },
    // Add more skills as needed
  ];
  const [visibleSkills, setVisibleSkills] = useState(4);

  const loadMoreSkills = () => {
    setVisibleSkills(visibleSkills + 4);
  };

  return (
    <div>
      {/*Mobile View*/}
      <div className="sm:flex xl:hidden">
        <div className="mt-4 p-4">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 text-center">
            Skills and Technologies
          </h2>
          <div className="space-y-2">
            {skills.slice(0, visibleSkills).map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between dark:text-white">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
                  <div
                    className="h-2 bg-gray-800 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
            {visibleSkills < skills.length && (
              <button
                className="bg-teal-600 rounded px-3 py-1"
                onClick={loadMoreSkills}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
      {/*Desktop View */}
      <div className="hidden xl:grid">
        <div className="p-4 mt-4 ml-16">
          <h2 className="text-3xl text-center font-bold mb-4 text-teal-600">
            Skills and Technologies
          </h2>
          <div className="grid grid-cols-2 gap-4 dark:text-white">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div>
                  <span className="font-semibold">{skill.name}</span>
                  <span className="float-right">{skill.percentage}%</span>
                </div>
                <div className="bg-gray-300 h-2 rounded-full mt-1">
                  <div
                    className="bg-gray-800 h-full rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
