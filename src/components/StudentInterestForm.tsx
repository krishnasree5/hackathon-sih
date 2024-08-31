"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const skillsList = [
  "English",
  "Maths",
  "Physics",
  "Biology",
  "Coding",
  "Economics/Finance",
  "Public Speaking",
  "Arts",
  "Sports",
  "Music",
  "Dance",
];

const StudentInterestForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillRatings, setSkillRatings] = useState<{ [key: string]: number }>(
    {}
  );
  const router = useRouter();

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skill = e.target.value;
    setSkills((prev) =>
      e.target.checked ? [...prev, skill] : prev.filter((s) => s !== skill)
    );
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillRatings((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/recommendation", {
        skills: skillRatings,
      });
      const recommendation = response.data.recommendation;
      router.push(
        `/recommendation?recommendation=${encodeURIComponent(recommendation)}`
      );
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-semibold">Select your skills:</h3>
        {skillsList.map((skill) => (
          <div key={skill} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={skill}
              onChange={handleSkillChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label>{skill}</label>
          </div>
        ))}
        {skills.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Rate your skills:</h3>
            {skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <label className="w-1/3">{skill} Rating (0-10):</label>
                <input
                  type="number"
                  name={skill}
                  min="0"
                  max="10"
                  onChange={handleRatingChange}
                  required
                  className="border border-gray-300 rounded px-2 py-1"
                />
              </div>
            ))}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Get Career Recommendations
        </button>
      </form>
    </div>
  );
};

export default StudentInterestForm;
