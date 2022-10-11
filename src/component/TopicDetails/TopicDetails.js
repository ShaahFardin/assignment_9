import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const TopicDetails = () => {
  const TopicDetails = useLoaderData();
  const Details = TopicDetails.data.questions;
  console.log(Details);
  return (
    <div>
      <h1 className="text-5xl m-10 shadow-lg p-5">
        This page contains{" "}
        <span className="underline text-sky-700">{TopicDetails.data.name}</span> quiz
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
