import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import react from "../assets/reactjs.png";
import node from "../assets/node.png";
import mongo from "../assets/mongodb.jpg";
import express from "../assets/express.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      title: "Java",
    },
    {
      id: 2,
      logo: python,
      title: "Python",
    },
    {
      id: 3,
      logo: react,
      title: "React",
    },
    {
      id: 4,
      logo: node,
      title: "Node",
    },
    {
      id: 5,
      logo: mongo,
      title: "MongoDB",
    },
    {
      id: 6,
      logo: express,
      title: "Express",
    },
  ];

  return (
    <div name='Portfolio' className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-12 my-16">
      <div>
        <h1 className="text-3xl font-bold text-center mb-5">Portfolio</h1>
        <span className="block text-center underline font-semibold text-lg">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
          {cardItem.map(({ id, logo, title }) => (
            <div
              className="w-full border-2 rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-24 h-24 mb-4 rounded-full border-2"
                alt={title}
              />
              <div>
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
