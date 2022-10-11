import React from "react";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;
  return (
    <div>
      <div className="border ">
        <img className="w-40 h-40" src={logo} alt="" />
        <div className="text-start flex justify-between">
          <p>{name}</p>
          <button>Take test</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
