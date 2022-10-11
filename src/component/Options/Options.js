import React from "react";

const Options = ({ option, selectedAnswer }) => {
  return (
    <div>
      <p
        className=" m-3 p-2 text-xl hover:bg-gray-200 hover:shadow-lg hover:rounded-lg "
        onClick={() => selectedAnswer(option)}
      >
        {option}
      </p>
    </div>
  );
};

export default Options;
