import React from "react";
import Button from "./Button";

const Card = ({ title, description, image, url }) => (
  <div className="border border-gray-300 shadow-lg bg-white overflow-hidden transition-transform transform hover:scale-105 duration-300">
    {image ? (
      <img src={image} alt={title} className="w-full h-52 object-cover" />
    ) : (
      <div className="w-full h-52 bg-gray-300 flex items-center justify-center text-gray-600">
        No Image Available
      </div>
    )}
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button className="mt-4 w-full">Read More</Button>
      </a>
    </div>
  </div>
);

export default Card;
