import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonial.css";
import shirleyImage from "./shirley.png";
import johnImage from "./john.png";
import theoImage from "./theo.png";

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <h2>See, What our Alumni say..</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={shirleyImage} />
            <div className="myCarousel">
              <h3> Priya Singh, MCA 2015-2018</h3>
              <h4>Data Analyst at Accenture</h4>
              <p>
                "MMMUT's MCA program provided a perfect blend of theoretical and
                practical knowledge, helping me develop skills highly valued in
                the industry. I'm proud to be an MMMUT alumnus."
              </p>
            </div>
          </div>

          <div>
            <img src={johnImage} />
            <div className="myCarousel">
              <h3>Rohan Kumar, MCA 2018-2021</h3>
              <h4>Software Engineer at TCS</h4>
              <p>
                {" "}
                "The MCA program at MMMUT laid a strong foundation for my
                career. It equipped me with the skills and confidence to take on
                challenging projects. I'm grateful for the experience."
              </p>
            </div>
          </div>

          <div>
            <img src={theoImage} />
            <div className="myCarousel">
              <h3>Abhishek Mishra, MCA Batch 2012-2015 </h3>
              <h4>Founder, TechSpark Solutions</h4>
              <p>
                "The MCA program at MMMUT instilled in me the courage to pursue
                my entrepreneurial dreams, and the university's incubation
                center helped me turn my startup idea into a reality. I'm
                grateful for the support."
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
