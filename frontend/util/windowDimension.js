import { useState, useEffect } from "react";

function getWindowDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension);

  useEffect(() => {
    const handleResize = () => setWindowDimension(getWindowDimension());
    console.log("before clean up",windowDimension)
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("in clean up function", windowDimension)
      window.addEventListener("resize", handleResize)
    }
  }, []);

  return windowDimension;
};
