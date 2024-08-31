import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Pathfinder Logo"
            width={150}
            height={50}
          />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
          <Link href="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
      <div className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold"></Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/guidance"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Guidance
              </Link>
              <Link
                href="/explore"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Explore
              </Link>
              <Link
                href="/mentor"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Mentor
              </Link>
              <Link
                href="/participate"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Participate
              </Link>
              <Link
                href="/chat"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
