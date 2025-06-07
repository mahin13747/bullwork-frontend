import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog({ limit }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://bullwork-backend.onrender.com/blogs");
        const data = await res.json();
        setBlogs(limit ? data.slice(0, limit) : data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, [limit]);

  return (
    <section className="w-full px-4 py-12 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center uppercase tracking-widest mt-5 mb-10">
        Read Our Blogs
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(({ id, title, description, imageUrl }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">{title}</h3>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {description}
              </p>

              <Link
                to={`/blogs/${id}`}
                className="mt-auto text-sm text-violet-900 border border-violet-900 px-4 py-2 rounded-3xl hover:bg-violet-900 hover:text-white transition self-start"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
