// import React from "react";
// import { useInView } from "react-intersection-observer";
// import CountUp from "react-countup";

// const HomePage = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div className="flex items-center justify-center h-screen m-0 bg-cover bg-center bg-no-repeat bg-[url('/Back.png')]">
//       <div className="flex items-center text-4xl font-bold text-white">
//         <div className="flex items-center justify-center mr-2 animate-fadeInScale">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="40"
//             height="40"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-layers"
//           >
//             <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
//             <polyline points="2 17 12 22 22 17"></polyline>
//             <polyline points="2 12 12 17 22 12"></polyline>
//           </svg>
//         </div>
//         <span className="letter animate-fadeInScale delay-100">p</span>
//         <span className="letter animate-fadeInScale delay-200">a</span>
//         <span className="letter animate-fadeInScale delay-300">t</span>
//         <span className="letter animate-fadeInScale delay-400">h</span>
//         <span className="letter animate-fadeInScale delay-500">f</span>
//         <span className="letter animate-fadeInScale delay-600">i</span>
//         <span className="letter animate-fadeInScale delay-700">n</span>
//         <span className="letter animate-fadeInScale delay-800">d</span>
//         <span className="letter animate-fadeInScale delay-900">e</span>
//         <span className="letter animate-fadeInScale delay-1000">r</span>
//       </div>

//       <div className="flex flex-col min-h-screen m-0">
//         <div className="flex items-center justify-center h-screen m-0 bg-cover bg-center bg-no-repeat bg-[url('/Back.png')]">
//           <div className="flex items-center text-4xl font-bold text-white">
//             <div className="flex items-center justify-center mr-2 animate-fadeInScale">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-layers"
//               >
//                 <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
//                 <polyline points="2 17 12 22 22 17"></polyline>
//                 <polyline points="2 12 12 17 22 12"></polyline>
//               </svg>
//             </div>
//             {["p", "a", "t", "h", "f", "i", "n", "d", "e", "r"].map(
//               (letter, index) => (
//                 <span
//                   key={index}
//                   className={`letter animate-fadeInScale delay-${
//                     (index + 1) * 100
//                   }`}
//                 >
//                   {letter}
//                 </span>
//               )
//             )}
//           </div>
//         </div>

//         <div className="bg-blue-600 text-white py-16 px-4" ref={ref}>
//           <div className="max-w-6xl mx-auto">
//             <h1 className="text-4xl font-bold mb-8">
//               Where Career Takes Flight
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//               {inView && (
//                 <>
//                   <div className="text-center">
//                     <CountUp
//                       end={100}
//                       suffix="k+"
//                       duration={2.5}
//                       className="text-3xl font-bold"
//                     />
//                     <p>Students Registered</p>
//                   </div>
//                   <div className="text-center">
//                     <CountUp
//                       end={50}
//                       suffix="k+"
//                       duration={2.5}
//                       className="text-3xl font-bold"
//                     />
//                     <p>Mentors</p>
//                   </div>
//                   <div className="text-center">
//                     <CountUp
//                       end={238}
//                       suffix="k"
//                       duration={2.5}
//                       className="text-3xl font-bold"
//                     />
//                     <p>Local + Remote Jobs</p>
//                   </div>
//                 </>
//               )}
//             </div>

//             <h2 className="text-2xl font-semibold mb-4">
//               Supported by Ministry of Education
//             </h2>

//             <h3 className="text-xl mb-4">Tech Trends, Jobs + Companies</h3>

//             <p className="text-lg">Learn. Grow. Build your career.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const HomePage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen m-0 p-0">
      <div className="flex items-center justify-center h-screen m-0 p-0 bg-cover bg-center bg-no-repeat bg-[url('/Back.png')]">
        <div className="flex items-center text-4xl font-bold text-white">
          <div className="flex items-center justify-center mr-2 animate-fadeInScale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          {["p", "a", "t", "h", "f", "i", "n", "d", "e", "r"].map(
            (letter, index) => (
              <span
                key={index}
                className={`letter animate-fadeInScale delay-${
                  (index + 1) * 100
                }`}
              >
                {letter}
              </span>
            )
          )}
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Where Career Takes Flight</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {shouldAnimate && (
              <>
                <div className="text-center">
                  <CountUp
                    end={100}
                    suffix="k+"
                    duration={2.5}
                    className="text-3xl font-bold"
                  />
                  <p>Students Registered</p>
                </div>
                <div className="text-center">
                  <CountUp
                    end={50}
                    suffix="k+"
                    duration={2.5}
                    className="text-3xl font-bold"
                  />
                  <p>Mentors</p>
                </div>
                <div className="text-center">
                  <CountUp
                    end={238}
                    suffix="k"
                    duration={2.5}
                    className="text-3xl font-bold"
                  />
                  <p>Local + Remote Jobs</p>
                </div>
              </>
            )}
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Supported by Ministry of Education
          </h2>

          <h3 className="text-xl mb-4">Tech Trends, Jobs + Companies</h3>

          <p className="text-lg">Learn. Grow. Build your career.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
