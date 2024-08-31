import React from "react";
import { competitionsData } from "../data/competitionsData";

const CompetitionsSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Upcoming Competitions
      </h1>
      <div className="space-y-6">
        {competitionsData.map((competition, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">{competition.title}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Date:</strong> {competition.date}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Type:</strong> {competition.type}
            </p>
            <a
              href={competition.href}
              className="text-blue-600 hover:underline"
            >
              Register: {competition.href}
            </a>
            <p className="text-gray-600">{competition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionsSection;
