import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex justify-between p-5 bg-sky-900 text-white">
      <div className="ml-10 text-2xl flex items-center ">
        
        <DocumentCheckIcon className="w-10 h-10 mr-2"></DocumentCheckIcon> QuizMaster
      </div>
      <div className="menu mr-10">
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
