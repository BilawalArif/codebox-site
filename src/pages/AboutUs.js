import React from "react";
import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderOne from "../common/header/HeaderOne";
import FooterFour from "../common/footer/FooterFour";
import BrandThree from "../elements/brand/BrandThree";
import AboutFour from "../elements/about/AboutFour";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import AboutTwo from "../elements/about/AboutTwo";
import AccordionOne from "../elements/accordion/AccordionOne";

const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" />
      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="7"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient">
                        Our Company's About Details.
                      </span>
                    </h3>
                  </div>
                  <h1 className="title display-one">
                    Where Innovation <br /> Meets Affordability{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="service-area rn-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h3 className="title">
                    Codebox <br /> Your USA Software Talent Partner
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="mb--10">
                  We specialize in connecting businesses with experienced
                  software professionals to help them build and maintain their
                  software applications. Our team of pre-vetted and highly
                  qualified software engineers has expertise in a range of
                  technologies, including web development, mobile development,
                  and cloud computing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Brand Area  */}
        <div className="rwt-brand-area pb--60 pt--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                <BrandThree brandStyle="brand-style-2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        <Separator />

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Services provide for you."
                  description="At code box, we are committed to delivering exceptional service and quality results."
                />
              </div>
            </div>
            <ServiceOne
              serviceStyle="service__style--1 bg-color-blackest radius mt--25"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        {/* <div className="rwt-timeline-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TimelineTwo classVar="no-gradient" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="rn-accordion-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="FAQ's"
                  title="
                  Frequently Asked Questions"
                  description=""
                />
              </div>
            </div>
            <div className="row mt--35 row--20">
              <div className="col-lg-10 offset-lg-1">
                <AccordionOne customStyle="rn-accordion-04" />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <AboutTwo image="./images/about/contact-image.jpg" />

        {/* Start Elements Area  */}
        <div className="rwt-counterup-area pb--100">
          <div className="container mt_dec--30">
            <CounterUpFour
              column="col-lg-3 col-md-6 col-sm-6 col-12"
              counterStyle="counter-style-4"
              textALign="text-center"
            />
          </div>
        </div>
        {/* End Elements Area  */}

        <Separator />

        {/* Start Elements Area  */}
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Corporate Team."
                  title="Corporate Team Member."
                  description=""
                />
              </div>
            </div>
            <TeamFour
              column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
              teamStyle="team-style-three"
            />
          </div>
        </div>
        {/* End Elements Area  */}

        <FooterFour />
      </main>
    </>
  );
};

export default AboutUs;
