import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const loadTopics = useLoaderData();
  const topics = loadTopics.data;
  console.log(topics);
  return (
    <div>
      <h1 className="text-5xl">this is topic : {topics.length}</h1>
      <div>
        <div><h1>Take the QuizMaster quiz test and test your knowledge</h1></div>
        <div className="grid grid-cols-1 gap-4 container mx-auto">
        {
            topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
        }
        </div>
      </div>
    </div>
  );
};

export default Topics;
