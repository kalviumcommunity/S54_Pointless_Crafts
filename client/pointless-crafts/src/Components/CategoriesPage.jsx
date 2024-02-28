import React from "react";
import { Card, Image, Label } from "daisyui";
import { useState } from "react";

export const CategoriesPage = () => {
  const categoriesArray = [
    {
      categoryName: "Kitchen Catastrophes",
      categoryImageUrl:
        "https://drippingquills.com/uploads/default/original/3X/c/4/c40b06d00724933f1e9df7dc326a5099fd035017.jpeg",
      categoryDescription:
        "Pointless hacks related to cooking and kitchen utensils.",
    },
    {
      categoryName: "DIY Disasters",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription:
        "Crafts and projects that are more likely to fail than succeed.",
    },
    {
      categoryName: "Home Hoaxes",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription: "Pointless home improvement and organization hacks.",
    },
    {
      categoryName: "Gadget Gimmicks",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription:
        "Absurd hacks involving electronic gadgets and devices.",
    },
    {
      categoryName: "Crafty Comedy",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription: "Silly and impractical crafting ideas.",
    },
    {
      categoryName: "Beauty Blunders",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription: "Pointless beauty and grooming hacks.",
    },
    {
      categoryName: "Pet Peeves",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription: "Ridiculous pet-related hacks and DIYs.",
    },
    {
      categoryName: "Outdoor Oddities",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription: "Pointless outdoor and gardening hacks.",
    },
    {
      categoryName: "Travel Troubles",
      categoryImageUrl: "https://i.ytimg.com/vi/KQQ_UlPYUJM/hq720.jpg",
      categoryDescription:
        "Absurd travel and packing hacks that are more trouble than they're worth.",
    },
  ];

  

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto">
          {categoriesArray.map((category, index) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={category.categoryImageUrl}
                  alt={category.categoryName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.categoryName}</h2>
                <p>{category.categoryDescription}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">See more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
