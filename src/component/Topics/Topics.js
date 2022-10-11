import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import './Topics.css'

const Topics = () => {
  const loadTopics = useLoaderData();
  const topics = loadTopics.data;
  console.log(topics);
  return (
    <div className="forest">
      <div>
        <div>
          <h1 className="text-start font-semibold text-slate-600 ml-20 text-5xl pt-20 ">
            Take the QuizMaster quiz test !
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16  mx-20 pb-20">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
