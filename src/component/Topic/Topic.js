import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;
  return (
    <div>
      <div className="border  bg-sky-50 rounded-md shadow-lg p-10 md:flex items-center">
        <img className="w-40 h-40" src={logo} alt="" />
        <div className="text-start text-xl leading-8 md:ml-10">
          <p>Subject of Quiz : {name}</p>
          <p>Number of Quiz : {total}</p>
          <p>id : {id}</p>
          <Link to={`/api/quiz/${id}`}>
            <button className="border bg-sky-700 text-white px-6 py-1 rounded-lg mt-5">
              Take test 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
