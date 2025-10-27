import { useState, useEffect } from "react";
import DashboardLayout from "..";

const API_BASE_URL = "https://attinaomi.org/api";

// Icon Components
const DocumentTextIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const PhotographIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const PencilIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

// Blog List Component
function BlogList({
  onCreateNew,
  onViewBlog,
  onEditBlog,
  onDeleteBlog,
  token,
}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalNumber, setTotalNumber] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API_BASE_URL}/blog?limit=${limit}&page=${page}`
      );
      const data = await response.json();

      if (response.ok) {
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

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                All Blog Posts
              </h1>
              <p className="text-gray-600 mt-1">
                {totalNumber} {totalNumber === 1 ? "post" : "posts"} total
              </p>
            </div>
            <button
              onClick={onCreateNew}
              className="flex items-center gap-2 px-4 py-2 bg-primary -600 text-white  hover:bg-primary -700 transition-colors"
            >
              <PlusIcon />
              Create New Post
            </button>
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
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No blog posts yet
              </h3>
              <p className="mt-2 text-gray-600">
                Get started by creating your first blog post
              </p>
              <button
                onClick={onCreateNew}
                className="mt-4 px-4 py-2 bg-primary -600 text-white  hover:bg-primary -700"
              >
                Create Post
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {blog.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => onViewBlog(blog.id)}
                          className="flex items-center gap-1 text-primary -600 hover:text-primary -700 font-medium"
                        >
                          <EyeIcon />
                          View
                        </button>

                        <div className="flex gap-2">
                          <button
                            onClick={() => onEditBlog(blog)}
                            className="p-2 text-gray-600 hover:text-primary -600 hover:bg-primary -50 rounded transition-colors"
                          >
                            <PencilIcon />
                          </button>
                          <button
                            onClick={() => onDeleteBlog(blog.id)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </div>
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
    </DashboardLayout>
  );
}

// View Single Blog Component
function ViewBlog({ blogId, onBack, token }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const fetchBlog = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/blog/${blogId}`);
      const data = await response.json();

      if (response.ok) {
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
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary -600 hover:text-primary -700 mb-4"
          >
            <ArrowLeftIcon />
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
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary -600 hover:text-primary -700 mb-6"
          >
            <ArrowLeftIcon />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
                <span>ID: {blog.id}</span>
                {blog.createdAt && (
                  <>
                    <span>•</span>
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
    </DashboardLayout>
  );
}

// Create/Edit Blog Component
function BlogEditor({ onBack, onSave, editingBlog, token }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(editingBlog?.image || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blog data when editing
  useEffect(() => {
    if (editingBlog && editingBlog.id) {
      fetchBlog();
    }
  }, [editingBlog]);

  const fetchBlog = async () => {
    if (!editingBlog || !editingBlog.id) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/blog/${editingBlog?.id}`);
      const data = await response.json();

      if (response.ok) {
        setFormData({
          title: data?.title || "",
          content: data?.content || "",
          image: null,
        });
      } else {
        setError("Failed to fetch blog details");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setError("Title and content are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const url = editingBlog
        ? `${API_BASE_URL}/blog/${editingBlog.id}`
        : `${API_BASE_URL}/blog`;

      const method = editingBlog ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        onSave(data.message || "Blog saved successfully!");
      } else {
        setError(data.message || "Failed to save blog");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-primary -600 hover:text-primary -700 mb-4"
              >
                <ArrowLeftIcon />
                Back to all posts
              </button>
              <h1 className="text-3xl font-bold text-gray-900">
                {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
              </h1>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 ">
              {error}
            </div>
          )}

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="space-y-6">
              <div className="bg-white  shadow p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title..."
                  className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary -500 focus:border-transparent outline-none"
                />
              </div>

              <div className="bg-white  shadow p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write your blog content..."
                  rows="16"
                  className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary -500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div className="bg-white  shadow p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <PhotographIcon />
                  Featured Image
                </h3>

                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-[300px] object-cover "
                    />
                    <button
                      onClick={() => {
                        setImagePreview(null);
                        setFormData((prev) => ({ ...prev, image: null }));
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white  hover:bg-red-600"
                    >
                      <XIcon />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300  cursor-pointer hover:border-primary -500 hover:bg-primary -50 transition-colors">
                    <PhotographIcon />
                    <span className="mt-2 text-sm text-gray-600">
                      Click to upload image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={onBack}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700  hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-primary -600 text-white  hover:bg-primary -700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Saving..."
                    : editingBlog
                    ? "Update Post"
                    : "Create Post"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

// Main App
export default function BlogManagementSystem() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const token = localStorage.getItem("token");
  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };
  const handleDeleteBlog = async (blogId) => {
    if (!confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/blog/${blogId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        showSuccessMessage("Blog deleted successfully!");
        setCurrentView("list");
      } else {
        alert("Failed to delete blog");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      {successMessage && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white  shadow-lg">
          {successMessage}
        </div>
      )}

      {currentView === "list" && (
        <BlogList
          onCreateNew={() => {
            setEditingBlog(null);
            setCurrentView("editor");
          }}
          onViewBlog={(id) => {
            setSelectedBlogId(id);
            setCurrentView("view");
          }}
          onEditBlog={(blog) => {
            setEditingBlog(blog);
            setCurrentView("editor");
          }}
          onDeleteBlog={handleDeleteBlog}
          token={token}
        />
      )}

      {currentView === "view" && (
        <ViewBlog
          blogId={selectedBlogId}
          onBack={() => setCurrentView("list")}
          token={token}
        />
      )}
      {currentView === "editor" && (
        <BlogEditor
          onBack={() => setCurrentView("list")}
          onSave={(message) => {
            showSuccessMessage(message);
            setCurrentView("list");
          }}
          editingBlog={editingBlog}
          token={token}
        />
      )}
    </div>
  );
}
