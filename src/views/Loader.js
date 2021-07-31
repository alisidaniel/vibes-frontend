import React, { Component } from "react";
// @ts-ignore
import Lottie from "react-lottie";
import animationData from "../assets/lottie/9379-loader.json";

const PageLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={500} width={500} />;
};

export default PageLoader;
