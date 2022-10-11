import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reacts = () => {
    const TopicDetails = useLoaderData();
    console.log(TopicDetails)
    return (
        <div>
            <h1 className='text-5xl'>This page will containe : {TopicDetails.data.name}</h1>
        </div>
    );
};

export default Reacts;