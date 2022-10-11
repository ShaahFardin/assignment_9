import React from "react";
import Options from "../Options/Options";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";



const Question = ({ questions }) => {
  const { correctAnswer, id, question, options } = questions;


  const selectedAnswer = (option) => {
    console.log(option);
    if (option === correctAnswer) {
      alert("correct answer");
    } else {
      alert("wrong answer");
    }
  };


  const showAnswer=()=>{
    alert(correctAnswer)
  }

  return (
    <div className="border rounded-xl m-5 bg-gray-100 mt-16  mx-60 shadow-xl text-start p-10 ">
      <div className="flex items-center justify-between">
        <p className="text-2xl my-5 font-semibold">{question}</p>
        <p onClick={showAnswer}>
          <EyeIcon className="h-6 w-6 cursor-pointer"></EyeIcon>
        </p>
      </div>
      <p>
        {options.map((option) => (
          <Options selectedAnswer={selectedAnswer} option={option}></Options>
        ))}
      </p>
    </div>
  );
};

export default Question;
