import React from "react";

const Options = ({ option, selectedAnswer }) => {
  return (
    <div>
      <li
        className="cursor-pointer m-3 p-2 text-xl hover:bg-gray-100 hover:shadow-lg hover:rounded-lg hover:text-black "
        onClick={() => selectedAnswer(option)}
      >
        {option}
      </li>
    </div>
  );
};

export default Options;
