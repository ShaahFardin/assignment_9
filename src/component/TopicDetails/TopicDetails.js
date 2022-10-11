import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const TopicDetails = () => {
  const TopicDetails = useLoaderData();
  const Details = TopicDetails.data.questions;
  console.log(Details);
  return (
    <div className="">
      <h1 className="text-5xl p-5">
        This page contains{" "}
        <span className=" text-sky-900 underline">{TopicDetails.data.name}</span> quiz
      </h1>
      <div>
        {Details.map((questions) => (
          <Question key={questions.id} questions={questions}></Question>
        ))}
      </div>
    </div>
  );
};

export default TopicDetails;
