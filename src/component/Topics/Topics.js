import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const loadTopics = useLoaderData();
  const topics = loadTopics.data;
  console.log(topics);
  return (
    <div>
      <div>
        <div className="">
          <img
            src="https://img.freepik.com/free-vector/savannah-with-acacia-tree-green-grass-bushes-road-mountains-horizon-concept-travel-safari-trip-vector-cartoon-illustration-african-savanna-landscape_107791-8962.jpg?w=1380&t=st=1665497778~exp=1665498378~hmac=b7fde9f2dbecd5c62973c51990c89c6ac135d46d5672cff3d9186dc7de9a264b"
            alt=""
            className="w-full h-full bg-no-repeat bg-cover bg-fixed"
          />
          <h1 className="text-start ml-20 text-5xl mt-10">
            Take the QuizMaster quiz test and test your knowledge
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-20 mx-20">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
