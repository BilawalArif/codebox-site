import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
                alt="About Images"
                style={{ height: "543px", width: "642px" }}
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">Corporate About.</span>
                  </h4>
                  <h2 className="title mt--10">About Our Business.</h2>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    Welcome to Codebox, the leading provider of senior software
                    engineers and software teams to companies in the USA. We
                    specialize in connecting businesses with experienced
                    software professionals to help them build and maintain their
                    software applications.
                  </p>

                  <ul className="list-icon">
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We offer a scalable and cost-effective solution to our
                      clients
                    </li>
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We offer ongoing support throughout the duration of the
                      project
                    </li>
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We manage the onboarding process
                    </li>
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We take pride in the relationships we build with our
                      clients and our team of software professionals.{" "}
                    </li>
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="read-more-btn mt--40">
                    <Link className="btn-default btn-icon" to="/about-us">
                      More About Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
