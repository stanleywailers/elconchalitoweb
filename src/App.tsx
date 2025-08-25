import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/home";
import LocationPage from "./pages/location";
import MenuPage from "./pages/menu";

import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<MenuPage />} path="/menu" />
      <Route element={<LocationPage />} path="/location" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
