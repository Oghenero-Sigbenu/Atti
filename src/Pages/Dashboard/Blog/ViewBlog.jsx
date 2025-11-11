import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../../../Components";
import { ArrowLeftIcon } from "@heroicons/react/outline";
const API_BASE_URL = "https://attinaomi.org/api";

export default function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/blog/${id}`);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setBlog(data);
      } else {
        setError("Failed to fetch blog details");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary -600"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl  mx-auto">
          <button
            onClick={onBack}
            className="flex items-center  gap-2 text-primary -600 hover:text-primary  mb-4"
          >
            <Arrow />
            Back to all posts
          </button>
          <div className="bg-red-50 border border-red-200 text-red-700  p-4">
            {error || "Blog not found"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl  mx-auto">
          <button
            onClick={() => navigate("/blog")}
            className="flex w-full  items-center gap-2 text-gray-600 hover:text-primary -700 mb-6"
          >
            <ArrowLeftIcon className="w-8 " />
            Back to all posts
          </button>

          <article className="bg-white  shadow-lg overflow-hidden">
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
            )}

            <div className="p-8">
              <h1 className="text-4xl font-bold text-[#56bff4] mb-4">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
                {blog.createdAt && (
                  <>
                    <span>
                      Created: {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </>
                )}
              </div>

              <div className="prose max-w-none">
                <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                  {blog.content}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
