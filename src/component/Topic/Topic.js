import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;
  return (
    <div>
      <div className="border  bg-sky-600 text-white rounded-md p-10 md:flex items-center">
        <img className="w-40 h-40" src={logo} alt="" />
        <div className="text-start text-xl leading-8 md:ml-10">
          <p>
            Subject of Quiz : <span className="underline"> {name}</span>
          </p>
          <p>Number of Quiz : {total}</p>
          <Link to={`/api/quiz/${id}`}>
            <button className="border bg-white text-black px-6 py-1 rounded-lg mt-5 hover:bg-gray-300">
              Take test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
