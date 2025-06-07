import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recommendation = ({ currentBlogId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch("https://bullwork-backend.onrender.com/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();

        const currentIndex = data.findIndex(
          (blog) => blog._id === currentBlogId || blog.id === currentBlogId
        );

        // Pick next two blogs after current one; fallback to first two if current not found
        const recs =
          currentIndex !== -1
            ? data.slice(currentIndex + 1, currentIndex + 3)
            : data.slice(0, 2);

        setRecommendations(recs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentBlogId]);

  if (loading)
    return <p className="text-center my-10">Loading recommendations...</p>;
  if (error)
    return (
      <p className="text-center my-10 text-red-600">Error: {error}</p>
    );
  if (recommendations.length === 0)
    return <p className="text-center my-10">No recommendations available.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Recommended Blogs
      </h2>

      {/* Flex container with gap, centered, responsive */}
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {recommendations.slice(0, 2).map(({ _id, id, title, imageUrl }) => (
          <div
            key={_id || id}
            className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white max-w-xs mx-auto sm:mx-0"
            style={{ width: '300px' }}
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <Link
                to={`/blogs/${_id || id}`}
                className="mt-auto text-center text-violet-900 border border-violet-900 px-4 py-2 rounded-3xl hover:bg-violet-900 hover:text-white transition self-start text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
