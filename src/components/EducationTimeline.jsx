/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const EducationTimeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl" id="education">
      <h2 className="text-3xl font-bold mb-12 text-center">My Education</h2>
      
      <div ref={ref} className="relative pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex w-full items-start justify-between gap-6 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 flex justify-center">
              <div
                className={`w-full rounded-lg bg-indigo p-6 shadow-lg ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.institution}
                  </p>
                  {item.grade && (
                    <p className="text-sm font-medium text-emerald-400 mt-1">
                      Grade: {item.grade}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`w-1/2 pl-6 ${
                index % 2 === 1 ? "text-right" : "text-left"
              }`}
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {item.institution}
                </h3>
                {item.achievements && (
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                    <ul className={`space-y-2 ${index % 2 === 1 ? "text-right" : "text-left"}`}>
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute inset-y-0 left-1/2 -ml-[1px]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-indigo/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};