import React, { useEffect, useState } from "react";
import ContactPage from "./contact";
import { useParams } from "react-router-dom";
import Recommendation from "./recommanded";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://bullwork-backend.onrender.com/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mt-6 mb-4">
          {blog.title}
        </h1>

        {blog.subtitle && (
          <p className="text-lg sm:text-xl text-center mb-4 text-gray-600">{blog.subtitle}</p>
        )}

        <div className="text-sm text-gray-500 text-center mb-6">
          <p>
            Posted on: {new Date(blog.postedOn).toLocaleDateString()} | {blog.readingTime}
          </p>
        </div>

        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded mb-6"
          />
        )}


        {blog.longDescription && (
          <div className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {blog.longDescription}
          </div>
        )}
      </div>

      <Recommendation currentBlogId={id} />

      <section className="bg-gray-200 text-center p-6 sm:p-10">
        <h1 className="text-black text-xl sm:text-2xl font-semibold tracking-widest mb-6">
          JOIN THE BULLWORK FAMILY
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-6 py-3 rounded-lg shadow-lg 
                       hover:brightness-110 transition duration-300 text-sm font-semibold tracking-widest"
          >
            ORDER
          </button>
          <button
            className="border border-black px-6 py-3 rounded-lg shadow-lg 
                       hover:brightness-110 transition duration-300 text-sm font-semibold tracking-widest"
          >
            Book Demo
          </button>
        </div>
      </section>

      <ContactPage />
    </>
  );
}
