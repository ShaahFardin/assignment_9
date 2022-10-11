import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis , YAxis} from "recharts";


const Recharts = ({data}) => {
    const {total, name} = data;
    console.log(total)
    return (
      <div>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey={total} stroke="#8884d8"></Line>
          <CartesianGrid stroke="#ccc"></CartesianGrid>
          <XAxis dataKey={name}></XAxis>
          <YAxis></YAxis>
        </LineChart>
      </div>
    );
};

export default Recharts;