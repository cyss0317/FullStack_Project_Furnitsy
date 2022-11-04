import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="what_is_furnitsy">
        <div>
          <h1>What is Furnitsy?</h1>
        </div>
        <div id="what_is_furnitsy_inner">
          <div id="furnitsy_inner_div">
            <h2>A community doing good</h2>
            <p>
              Furnitsy is a furniture store, where my mother in law buys and
              sells Ashely furnitures.{" "}
            </p>
          </div>
          <div id="furnitsy_inner_div">
            <h2>Sell furnitures to customers</h2>
            <p>
              We sell Ashely furnitures on our website. Whatever you can find on
              this website, you can also find it on actual Ashley furnitures.
            </p>
          </div>
          <div id="furnitsy_inner_div">
            <h2>Peace of mind</h2>
            <p>
              Your privacy is the highest priority of our dedicated team. And if
              you ever need assistance, we are always ready to step in for
              support.
            </p>
          </div>
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
}

export default Footer