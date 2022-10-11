import React from "react";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;
  return (
    <div> 
      <div className="border  bg-sky-50 rounded-md shadow-lg p-10 flex items-center">
        <img className="w-40 h-40" src={logo} alt="" />
        <div className="text-start text-xl leading-8 ml-10">
          <p>Subject of Quiz : {name}</p>
          <p>Number of Quiz : {total}</p>
          <button>Take test</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
