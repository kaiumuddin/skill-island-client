import React from 'react';
import {useLoaderData} from "react-router-dom";

// Single Course
// This is private route  
const CheckOutPage = () => {
    const singleCourse = useLoaderData();
    const {name} = singleCourse;

    return (
        <section className="h-screen mx-auto py-6 bg-white dark:bg-gray-800 dark:text-gray-50" >
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between" >
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left" >Check Out</h1>
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between border-2  dark:border-white" >
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left" >{name}</h1>
            </div>
        </section>
    );
};

export default CheckOutPage;