import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";



const Statistics = () => {
    const allDatas = useLoaderData();
    const datas = allDatas.data
    console.log(datas);
    return (
      <div>
        <h1 className="text-5xl p-5 font-semibold">Statistics</h1>
        <div className="flex justify-center m-14">
          <LineChart width={600} height={500} data={datas}>
            <Line type="monotone" dataKey="total" stroke="#8884d8"></Line>
            <CartesianGrid stroke="#ccc"></CartesianGrid>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </LineChart>
        </div>
        <h1 className='text-2xl ml-20'>This is a graphical representation of the number of quiz in respective topic</h1>
      </div>
    );
};

export default Statistics;