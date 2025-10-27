import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About, Home, Policy } from "./Pages";
import NotFound from "./Pages/NotFound";
import { Executives } from "./Components";
import Contact from "./Pages/ContactUs";
import News from "./Pages/News";
import Gallery from "./Pages/Gallery";
import Financials from "./Pages/Financials";
import Projects from "./Pages/Projects";
import DashboardLayout from "./Pages/Dashboard";
import CreateBlogPost from "./Pages/Dashboard/Blog/CreateBlog";
import SignupPage from "./Pages/Auth/Signup";
import LoginPage from "./Pages/Auth/Login";
import AuthSystem from "./Pages/Auth/Login";
import BlogList from "./Pages/Dashboard/Blog/ViewBlogs";
import ViewBlog from "./Pages/Dashboard/Blog/ViewBlog";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/blog/:id" element={<ViewBlog />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/create-blog" element={<CreateBlogPost />} />
      <Route path="/financials" element={<Financials />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/login" element={<AuthSystem />} />

      {/* The Create User (Signup) Page */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
