"use client";
import React, { useState } from "react";
import { exploreData } from "../data/exploreData";

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedRanking, setSelectedRanking] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "location":
        setSelectedLocation(value || null);
        break;
      case "ranking":
        setSelectedRanking(value ? parseInt(value) : null);
        break;
      case "program":
        setSelectedProgram(value || null);
        break;
    }
  };

  const filterColleges = (colleges: any[]) => {
    return colleges.filter((college) => {
      const matchesSearch = college.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesLocation =
        !selectedLocation || college.location === selectedLocation;
      const matchesRanking =
        !selectedRanking || college.ranking <= selectedRanking;
      const matchesProgram =
        !selectedProgram ||
        exploreData.careerPaths.some(
          (path) =>
            path.pathName === selectedProgram && path.colleges.includes(college)
        );
      return (
        matchesSearch && matchesLocation && matchesRanking && matchesProgram
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Colleges</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for colleges..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
        <button className="bg-blue-500 text-white m-2 self-center p-2 rounded-lg">
          Search
        </button>
      </div>

      <div className="mb-6 flex gap-4">
        <select
          name="location"
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Location</option>
          <option value="Hyderabad, Telangana">Hyderabad, Telangana</option>
          <option value="Tirupati, Andhra Pradesh">
            Tirupati, Andhra Pradesh
          </option>
          <option value="Visakhapatnam, Andhra Pradesh">
            Visakhapatnam, Andhra Pradesh
          </option>
          <option value="Anantapur, Andhra Pradesh">
            Anantapur, Andhra Pradesh
          </option>
          <option value="Guntur, Andhra Pradesh">Guntur, Andhra Pradesh</option>
        </select>

        <select
          name="ranking"
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Ranking</option>
          <option value="10">Top 10</option>
          <option value="50">Top 50</option>
          <option value="100">Top 100</option>
          <option value="200">Top 200</option>
        </select>

        <select
          name="program"
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Program</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Data Science">Data Science</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
      </div>

      <div className="space-y-6">
        {exploreData.careerPaths.map((path, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{path.pathName}</h2>
            <div className="space-y-4">
              {filterColleges(path.colleges).map((college, idx) => (
                <div key={idx} className="bg-white shadow-md rounded-lg p-4">
                  <h3 className="text-xl font-semibold">{college.name}</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Location:</strong> {college.location}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>NIRF Ranking:</strong> {college.ranking}
                  </p>
                  <p className="text-gray-600">{college.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
