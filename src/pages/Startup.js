import React from "react";
import Slider from "react-slick";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterTwo from "../common/footer/FooterTwo";
import CircleProgressTwo from "../elements/progressbar/CircleProgressTwo";
import AdvanceTabOne from "../elements/advancetab/AdvanceTabOne";
import TeamOne from "../elements/team/TeamOne";
import ServiceOne from "../elements/service/ServiceOne";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import Copyright from "../common/footer/Copyright";

// var BlogListData = BlogClassicData.slice(0, 3);

const teamData = [
  {
    image: "bazil.jpeg",
    name: "Bazil Ali",
    designation: "CEO",
    location: "Lahore, Punjab",
    description: "Building next-gen software",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "team-02.jpg",
    name: "Haider",
    designation: "App Developer",
    location: "Bangladesh",
    description:
      "Yes, I am a product designer. I have a passion for product design.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
];

const BannerData = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    title: "Where Innovation <br /> Meets Affordability",
    description:
      "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    title: "Where Innovation <br /> Meets Affordability",
    description:
      "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.",
  },
];

const Startup = () => {
  return (
    <>
      <SEO title="CodeBox || Home" />
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small btn-icon round"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <Slider
          className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow"
          {...BannerActivation}
        >
          {BannerData.map((data, index) => (
            <div key={index} className="single-slide">
              <div
                className="height-950 bg-overlay bg_image"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`,
                }}
              >
                <div className="container">
                  <div className="row row--30 align-items-center">
                    <div className="col-lg-12">
                      <div className="inner text-center">
                        <h1
                          className="title display-one"
                          style={{ fontSize: "70px" }}
                          dangerouslySetInnerHTML={{ __html: data.title }}
                        ></h1>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        ></p>
                        <div className="button-group mt--30">
                          <a
                            className="btn-default btn-large round"
                            target="_blank"
                            href="/"
                          >
                            Get started now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* End Slider Area  */}

        <Separator />
        <div className="rwt-elements-area rn-section-gap">
          <div className="container">
            <div className="row mb--25">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Experience"
                  title="25+ years work Experience"
                  description=""
                />
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 mt--10">
              <CircleProgressTwo />
            </div>
          </div>
        </div>

        <Separator />
        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Working Process"
                  title="Our Working Process."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--50">
                <TimelineTwo />
              </div>
            </div>
          </div>
        </div>

        <Separator />
        {/* <div className="rwt-elements-area rn-section-gap">
          <div className="container-fluid plr--30">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Portfolio"
                  title="Our Completed Project!"
                  description=""
                />
              </div>
            </div>
            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay" />
          </div>
        </div>
        <Separator /> */}

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
                  description=""
                />
              </div>
            </div>
            <ServiceOne
              serviceStyle="service__style--1 icon-circle-style with-working-process"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-advance-tab-area rn-section-gap">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Why Choose CodeBox?"
                  title="Here's the Magic Formula"
                  description=""
                />
              </div>
            </div>
            <AdvanceTabOne />
          </div>
        </div>
        {/* End Elements Area  */}

        {/* Start Elements Area  */}
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Experts."
                  title="Our Expert Team."
                  description=""
                />
              </div>
            </div>
            <TeamOne
              column="col-lg-6 col-md-6 col-12 mt--30"
              teamStyle="team-style-default"
              teamData={teamData}
            />
          </div>
        </div>
        {/* End Elements Area  */}

        <FooterTwo />
        <Copyright />
      </main>
    </>
  );
};

export default Startup;
