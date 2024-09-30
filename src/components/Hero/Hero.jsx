import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/Calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero_blur"></div>
      <div className="left_h">
        <Header />

        <div className="the_best_add">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero_text">
          <div>
            <span className="stroke_text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              fugiat distinctio modi soluta error animi ratione qui aspernatur
              minima quaerat.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <CountUp start={100} end={140} delay={1} prefix="+" />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <CountUp start={800} end={978} delay={1} prefix="+" />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              <CountUp start={0} end={50} delay={1} prefix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero_buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right_h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart_rate"
        >
          <img src={Heart} alt="Heart Image" />
          <span>Heart rate </span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="hero Image" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero Image Back"
          className="hero_image_back"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="Calories Image" />

          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
