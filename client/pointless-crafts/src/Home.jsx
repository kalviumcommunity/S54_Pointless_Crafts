import React from "react";
import BannerImg from './assets/home-page.jpeg'

export const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={BannerImg}
            className="max-w-sm rounded-lg lg:max-w-xl shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
            Welcome to Hacky Shenanigans! Laugh, cringe, and learn what not to do with our hilarious collection of internet life hacks!
            </p>
            <button className="btn btn-primary">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
