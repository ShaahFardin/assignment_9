import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const Question = ({ questions }) => {
  const { correctAnswer, id, question, options } = questions;

  const selectedAnswer = (option) => {
    if (option === correctAnswer) {
      toast("Correct Answer!", { position: toast.POSITION.TOP_LEFT });
    } else {
      toast("Wrong Answer *_*", { position: toast.POSITION.TOP_LEFT });
    }
  };

  const showAnswer = () => {
    toast(correctAnswer);
  };

  return (
    <div className="border rounded-xl m-5 bg-sky-800 text-gray-100 mt-16 md:mx-60  shadow-xl text-start p-10 ">
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
