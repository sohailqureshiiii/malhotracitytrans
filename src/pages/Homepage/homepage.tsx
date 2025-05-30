"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import localFont from "next/font/local";
import TeamsImg from "../../../public/group.svg";
import ExperienceImg from "../../../public/quality.svg";
import SuccessImg from "../../../public/growth.svg";
import BackgroundImage from "../../../public/car-rental-wallpaper.jpg";
import ServiceImage from "../../../public/Professional-Transport.webp";
import Image from "next/image";
import ServiceComponent from "../../Components/FetureComponents/ServiceComponent";
import Link from "next/link";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Homepage = () => {
  const [show, setShow] = useState(false);
  // FAQ----
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  // ----- Animation ----

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Malhotracitytrans | Smart Employee Transportation Solutions"
        />
        <meta
          name="description"
          content="Malhotracitytrans offers reliable, safe, and efficient employee transportation solutions. Explore our tech-enabled corporate shuttle services and on-demand cabs."
        />
        <meta
          name="keywords"
          content="Employee Transportation, Corporate Shuttle, On-Demand Cabs, Safe Commutes, Corporate Mobility Solutions, Malhotracitytrans"
        />
      </Head>
      <div style={myFont.style}>
        <Navbar />
        {/* ------------- Section one -----------  */}
        <div>
          <Image
            src={BackgroundImage}
            alt=""
            className="Backround-image-for-home-aifdsj"
          />

          <div className="displayflexat-ns ">
            <div className="header-layout-at-main-section">
              <div className="special-padding-nd-top-senkjc">
                <h1
                  data-aos="fade-up"
                  className="headr-for-webste-in-trensport-nalhotra"
                  style={myFont.style}
                >
                  Your Journey <br />
                  Our Priority
                </h1>
                <div className="flx-indc-aikjdna">
                  <p className="para-cete-rherd-aloknowa" data-aos="fade-up">
                    Welcome to Malhotra CityTrans Pvt Ltd, we specialize in
                    providing safe, reliable, and efficient transportation
                    solutions for corporate employees. Our advanced Employee
                    Transportation Management system ensures seamless travel
                    experiences, enhancing productivity while prioritizing
                    employee safety and convenience.
                  </p>
                </div>
                <div className="flx-indc-aikjdna spamcieb-betwwedkj">
                  <Link href={"/contactus"}>
                    <button
                      style={myFont.style}
                      className="button-for-cntct-us-sonf"
                      data-aos="fade-up"
                    >
                      Contact Us
                    </button>
                  </Link>
                  <Link href={"/aboutus"}>
                    <button
                      className="btn-frrr-knw-mre-at-sdjn"
                      data-aos="fade-up"
                      style={myFont.style}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div>
          <div className="bur-colr-section-at-ssecound-sct  mrgin-tp-sjcnskc">
            <div className="displayflexat-ns " style={myFont.style}>
              <div className="header-layout-at-main-section ">
                <p className="section-main-hdr-fr-wht-sec" data-aos="fade-up">
                  {" "}
                  Hello! Welcome to
                </p>
                <h1 className="hone-section-at-rodn-skk" data-aos="fade-up">
                  Malhotra CityTrans
                </h1>
              </div>{" "}
            </div>
          </div>
          <div className="displayflexat-ns" style={myFont.style}>
            <div className="header-layout-at-main-section padding-ionlude-for-mobile-view-sds">
              <div className="flx-nin-two-compo-at-sbic">
                <div className="widht-for-para-section-at-secound-sect">
                  <p
                    className="first-para-at-schl-sectio-sjkdjs"
                    data-aos="fade-up"
                  >
                    Welcome to Malhotracitytrans, your trusted partner in smart
                    corporate transportation solutions since 2007. Previously
                    known as Malhotra Tours and Travels, we have grown into a
                    leading provider of seamless, safe, and efficient employee
                    transport services, tailored to businesses of all sizes. Our
                    fleet includes all types of vehicles, from BMWs and Mercedes
                    to deluxe and outstation travel options, ensuring comfort
                    and reliability. We proudly serve clients like Digicoption
                    India Pvt Ltd, Jabil India Ltd, and Carraro India Ltd,
                    providing nationwide corporate transport solutions,
                    including Mathaly packages and all-India travel services.
                    With a strong commitment to reliability and innovation, we
                    aim to transform corporate transportation, offering advanced
                    fleet solutions that maximize efficiency, reduce costs, and
                    enhance workforce productivity. At Malhotracitytrans, we
                    believe transportation should never be a challenge for
                    businesses or employees. Our goal is to make corporate
                    commuting effortless, allowing employees to focus on their
                    work while we take care of their travel needs. Through
                    continuous innovation, advanced technology, and an
                    unwavering commitment to excellence, we are shaping the
                    future of employee transportation—one safe and reliable ride
                    at a time.
                  </p>
                </div>
                <div className="third-left-top-minus-sect" style={myFont.style}>
                  <div className="back-rnd-white-at-left-section">
                    <p className="fc-facts-for-ajdksn" data-aos="fade-up">
                      Achievements So Far
                    </p>
                    <div className="diply-cemntr-at-sction-for-whitelisb">
                      <div
                        className="color-line-at-center-of-left-section"
                        data-aos="fade-up"
                      ></div>
                    </div>
                    <div data-aos="fade-up">
                      <p className="number-achienved-by-shools-sdjk">100%</p>
                      <p className="secound-line-of-sleft-sdide">Work Done!</p>
                      <p className="para-at-side-ltions"></p>
                    </div>
                    <div data-aos="fade-up">
                      <p className="number-achienved-by-shools-sdjk">100%</p>
                      <p className="secound-line-of-sleft-sdide">
                        Staff Guarantee
                      </p>
                      <p className="para-at-side-ltions"></p>
                    </div>
                    <div data-aos="fade-up">
                      <p className="number-achienved-by-shools-sdjk">100%</p>
                      <p className="secound-line-of-sleft-sdide">
                        Safety & Security
                      </p>
                      <p className="para-at-side-ltions"></p>
                    </div>
                    <div data-aos="fade-up">
                      <p className="number-achienved-by-shools-sdjk">145+</p>
                      <p className="secound-line-of-sleft-sdide">
                        Professional Team
                      </p>
                      <p className="para-at-side-ltions"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns back-wgite-firian">
          <div className="header-layout-at-main-section">
            <div
              className="extra-tp-marg-insdj"
              style={myFont.style}
              data-aos="fade-up"
            >
              <p className="third-para-header-at-ijnck" data-aos="fade-up">
                Why Choose Malhotracitytrans?
              </p>
              <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr frgtfg-whjdjwe-sfnjk">
                Safe, Reliable, and Efficient
              </h1>
              <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr frgtfg-whjdjwe-sfnjk">
                Transportation Solutions
              </h1>
            </div>
            <div className="efioefkls-esolk-dsk " style={myFont.style}>
              {" "}
              <div className="flx-section-wihtjd extra-tp-marg-insdj">
                <div
                  className="flx-with-img-and-hdr-and-para"
                  data-aos="fade-up"
                >
                  <div className="flx-fr-im-of-hwye-dis">
                    <div className="border-for-backgrnd-img-left">
                      <Image
                        src={TeamsImg}
                        width={50}
                        height={50}
                        alt="Demandscoop"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="hdr-at-three-section-of-why">
                      Safe & Secure Rides
                    </h5>
                    <p className="para-at-three-section-of-why-choose-us">
                      GPS-tracked cabs with trained and verified drivers.
                    </p>
                  </div>
                </div>
                <div
                  className="flx-with-img-and-hdr-and-para"
                  data-aos="fade-up"
                >
                  <div className="flx-fr-im-of-hwye-dis">
                    <div className="border-for-backgrnd-img-left">
                      <Image
                        src={ExperienceImg}
                        width={50}
                        height={50}
                        alt="Demandscoop"
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h5 className="hdr-at-three-section-of-why">
                      On-Time, Every Time
                    </h5>
                    <p className="para-at-three-section-of-why-choose-us">
                      Punctual pickups and drop-offs with real-time tracking.
                    </p>
                  </div>
                </div>
                <div
                  className="flx-with-img-and-hdr-and-para"
                  data-aos="fade-up"
                >
                  <div className="flx-fr-im-of-hwye-dis">
                    {" "}
                    <div className="border-for-backgrnd-img-left">
                      <Image
                        src={SuccessImg}
                        width={50}
                        height={50}
                        alt="Demandscoop"
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h5 className="hdr-at-three-section-of-why">
                      Cost-Effective & Scalable
                    </h5>
                    <p className="para-at-three-section-of-why-choose-us">
                      Customizable solutions to fit your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        {/* ------- FAQ SECTION -------  */}
        <div
          className="displayflexat-ns extra-tp-paddidng-insdj back-wgite-firian"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section">
            <h4 className="section-header-at-home-page-view" data-aos="fade-up">
              FREQUENTLY ASKED QUESTION
            </h4>
            <div className="width-large-at-vos" data-aos="fade-up"></div>
            <h4 className="got-ques-header-at-faqs" data-aos="fade-up">
              Got Questions ? We've Got Answers.{" "}
            </h4>
            <div>
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                data-aos="fade-up"
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq1(!faq1)}
              >
                <p className="white-txt-at-faq-sect">
                  What services does Malhotracitytrans offer?
                </p>
                {faq1 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq1 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  We provide a range of corporate transportation solutions,
                  including scheduled employee shuttle services, on-demand cabs,
                  corporate carpooling, real-time tracking, and automated
                  scheduling. Our services are designed to ensure safe,
                  reliable, and cost-effective commutes for employees.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq2(!faq2)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  How does the real-time tracking system work?
                </p>
                {faq2 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq2 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Our vehicles are equipped with GPS tracking, allowing
                  employees and employers to monitor rides in real-time.
                  Employees receive live updates on arrival times, routes, and
                  driver details, ensuring a safe and transparent commuting
                  experience.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq3(!faq3)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  How do you ensure employee safety during travel?
                </p>
                {faq3 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq3 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Safety is our top priority. Our fleet includes verified and
                  trained drivers, live tracking, emergency panic buttons, and
                  24/7 customer support. We also implement route optimization
                  and regular vehicle maintenance to enhance travel security.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq4(!faq4)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  Can we customize transportation plans based on our company’s
                  needs?
                </p>
                {faq4 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq4 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Yes! We offer customized transportation plans tailored to your
                  business requirements, including shift-based commutes,
                  specific pickup and drop-off locations, and flexible
                  scheduling to match your employees' work hours.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq5(!faq5)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  How can my company partner with Malhotracitytrans?
                </p>
                {faq5 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq5 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Getting started is easy! Simply contact us via phone, email,
                  or our website, and our team will work with you to assess your
                  transportation needs, create a tailored plan, and ensure a
                  smooth onboarding process.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
            </div>
          </div>{" "}
        </div>
        <Footer />
      </div>{" "}
    </>
  );
};
export default Homepage;
