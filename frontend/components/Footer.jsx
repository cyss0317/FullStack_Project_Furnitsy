import React from "react";
import { useWindowDimension } from "../util/windowDimension";

const explainations = [
  {
    title: "What is Furnitsy?",
    body: "Furnitsy is a furniture store, where my mother in law buys and sells Ashely furnitures.",
  },
  {
    title: "Sell furnitures to customers",
    body: "We sell Ashely furnitures on our website. Whatever you can find this website, you can also find it on actual Ashley furnitures.",
  },
  {
    title: "Peace of mind",
    body: " Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.",
  },
];
const Footer = () => {
  const { width } = useWindowDimension();

  return (
    <footer>
      <div className="what_is_furnitsy">
        <div>
          <h1>About Furnitsy</h1>
        </div>
        <div id={`${width <= 600 ? "what_is_furnitsy_inner-horizontal" : "what_is_furnitsy_inner-vertical" }`}>
          {explainations.map((obj, key) => (
            <div key={`explaination-${key}`}id="furnitsy_inner_div">
              <h2>{obj.title}</h2>
              <p>{obj.body}</p>
            </div>
          ))}
        </div>
        <div>
          <a
            id="linked-in"
            href="https://www.linkedin.com/in/yun-sung-choi-936142214/"
            target="_blank"
          >
            <img
              src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/LI-Logo.png"
              alt=""
              width="160"
              height="50"
            />
          </a>
          <a id="github" href="https://github.com/cyss0317" target="_blank">
            <img
              src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/Octocat.png"
              alt=""
              width="100"
              height="80"
            />
          </a>
          <form
            action="mailto:cyss0317@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input
              className="submit_to_email"
              type="submit"
              value="Contact Yun Sung Choi"
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
