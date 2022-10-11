import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="md:flex justify-between items-center  bg-sky-900 text-white">
      <div className="text-2xl flex items-center p-5">
        <DocumentCheckIcon className="w-10 h-10 mr-2"></DocumentCheckIcon>{" "}
        QuizMaster
      </div>
      <div className="menu">
        <Link to="/topics">Topics</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/statistics">Statistics</Link>
      </div>
    </div>
  );
};

export default Header;
