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
          <h1 className="font-semibold text-slate-600 text-center md:text-start md:ml-20 text-3xl md:text-5xl pt-20 ">
            Take the QuizMaster quiz test !
          </h1>
        </div>
        <div className="grid md:grid-cols-2 mx-7 gap-5 mt-16  md:mx-20 pb-20">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
