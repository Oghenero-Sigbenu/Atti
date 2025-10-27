import { useEffect, useState } from "react";
import { Layout } from "../../../Components";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://attinaomi.org/api";
export default function BlogList({}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalNumber, setTotalNumber] = useState(0);
  const limit = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API_BASE_URL}/blog?limit=${limit}&page=${page}`
      );
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setBlogs(data.blogs || []);
        setTotalNumber(data.totalNumber || 0);
      } else {
        setError("Failed to fetch blogs");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalNumber / limit);

  const View = (id) => {
    // Navigate to the blog view page
    navigate(`/blog/${id}`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="text-center w-full">
              <h1 className="text-2xl text-center font-bold text-gray-900">
                All Blog Posts
              </h1>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 ">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary -600"></div>
              <p className="mt-4 text-gray-600">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12 bg-white  shadow">
              {/* <DocumentTextIcon className="text-center mx-auto w-12 h-12" /> */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No blog posts available.
              </h3>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => View(blog.id)}
                    className="bg-white  shadow hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    {blog.image && (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold cursor-pointer hover:text-primary text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-white border border-gray-300  hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-gray-700">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300  hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

// View Single Blog Component
