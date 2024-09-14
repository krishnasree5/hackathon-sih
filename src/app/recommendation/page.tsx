"use client";
import { useRouter } from "next/navigation";

const RecommendationPage = () => {
  if (typeof window !== "undefined") {
    const router = useRouter();
    const searchParams = new URLSearchParams(window.location.search);
    const recommendation = searchParams.get("recommendation");

    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Career Recommendations</h1>
        <div className="p-4 border rounded border-gray-200 bg-gray-50">
          <p className="whitespace-pre-line">{recommendation}</p>
        </div>
        <button
          onClick={() => router.back()}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RecommendationPage;
