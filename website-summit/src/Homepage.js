import logo from "./images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import pic from "./images/about.jpg";

function Homepage() {
  const [navbar, setNavbar] = useState(false);
  const scrollToAbout = () => {
    const element = document.getElementById("about-container");
    scroll.scrollTo(element.offsetTop);
  };
  const scrollToEvents = () => {
    const element = document.getElementById("event-container");
    scroll.scrollTo(element.offsetTop);
  };

  const scrollToSpeaker = () => {
    const element = document.getElementById("speaker-container");
    scroll.scrollTo(element.offsetTop);
  };
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Mar 03, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="bg-black bg-opacity-100">
        <div className="bg-cover bg-[url('images/bgggg.jpg')] opacity-90 w-full h-screen">
          <nav className="w-full shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-5  ">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <Link to="/" className="flex items-center">
                    <img
                      src={logo}
                      className="h-10 mr-3 sm:h-20 dark:shadow-gray-800 left-10"
                      alt="IEDC Logo"
                    />
                    <span className="font-bold text-2xl self-center font-semibold whitespace-nowrap dark:text-white">
                      IEDC Summit
                    </span>
                  </Link>

                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth={2}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth={2}
                          onClick={() => setNavbar(false)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 absolute ${
                    navbar
                      ? "top-10 left-0.5 right-1 block"
                      : "hidden top-10 right-10"
                  }`}
                >
                  <ul
                    className={`items-center justify-center space-y-8 md:flex md:space-x-5 md:space-y-0 md:flex pb-5 pt-5 ${
                      navbar ? "bg-black bg-opacity-80 w-screen" : ""
                    }`}
                  >
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <div className="cursor-pointer" onClick={scrollToAbout}>
                        About
                      </div>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <div className="cursor-pointer" onClick={scrollToEvents}>
                        Events
                      </div>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <div className="cursor-pointer" onClick={scrollToSpeaker}>
                        Speakers
                      </div>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <Link to="schedule">Schedule</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className="justify-center items-center ">
          <div class=" lg:pt-2  md:pt-1  mt-20 ">
            <h1 className=" lg:text-2xl dark:text-white relative lg:right-44  sm:right-0 ">
              Asia's <span className="font-bold">largest</span>{" "}
              <span className="text-white">
                summit for aspiring entrepreneur
              </span>
            </h1>
          </div>

          <div className="flex flex-col">
          <h1 className="  mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-7xl md:text-6xl lg:text-8xl dark:text-white mx-auto inline">
            IEDC <span className=" dark:text-orange-600">SUMMIT</span>{" "}
            <span className="text-white">2023</span>
          </h1>
          <h1 className="  mb-4 text-2xl  leading-none tracking-tight text-gray-900 sm:text-3xl md:text-3xl lg:text-3xl dark:text-white m-auto inline">
            Unraveling dimensions uniting perspectives {" "}
          </h1>
          </div>
           

          <center>
            <h4 className=" w-2/3 flex flex-row justify-end text-2xl dark:text-white">
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                ></path>
              </svg>
              Rajagiri School of Engineering and Technology
            </h4>
          </center>

          <div className="lg:pt-20 md:pt-10 sm:pt-20 flex justify-center">
            <div className="">
              <p className="text-1xl font-bold basis-28  leading-none tracking-wider text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                {timerDays}
              </p>
              <span className="text-white">Days</span>
            </div>
            <div className="">
              <p className="text-1xl basis-28 font-bold leading-none tracking-wider text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                {timerHours}
              </p>
              <span className="text-white">Hours</span>
            </div>
            <div className="">
              <p className="text-1xl font-bold basis-28 leading-none tracking-wider text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                {timerMinutes}
              </p>
              <span className="text-white">Minutes</span>
            </div>
            <div className="">
              <p className="text-1xl font-bold basis-28 leading-none tracking-wider text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                {timerSeconds}
              </p>
              <span className="text-white">Seconds</span>
            </div>
          </div>

          <div className=" space-x-28 flex flex-row justify-center pt-10 ">
            <button
              type="button"
              className="tracking-wide w-80 h-14 rounded-full lg:text-lg focus:outline-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-600 rounded-lg sm:text-md font-bold px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900"
            >
              Buy Tickets
            </button>
            <button
              type="button"
              className="tracking-wide  sm:text-md w-80 h-14 text-white hover:text-white border border-white-600 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-white-300 rounded-full lg:text-lg font-bold px-10 lg:py-2.5 text-center mr-10  mb-10 dark:border-white-300 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
            >
              View Schedule
            </button>
          </div>
          </div>
       
        </div>
      <div className="lg:flex md:flex bg-white">
        <div className="lg:w-1/2 lg:pl-10 md:w-1/2 md:pl-8 sm:pl-4 md:pr-4 sm:pr-4 mr-4">
          <div className="text-center  ">
            <div className="text-5xl flex py-7 font-extrabold ">
              <h1 className="lg:pl-10 md:w-1/2 md:pl-8 sm:pl-4">
                ABOUT <span className="text-orange-600"> SUMMIT</span>
              </h1>
            </div>
            <div className="flex">
              <div className="w-10 h-20 mr-5 mt-2 bg-orange-600"></div>
              <p className="text-justify font-normal text-xl ">
                Kerala Startup Mission is organizing the seventh edition of the
                flagship event- IEDC Summit 2023 and we, Rajagiri School of
                Engineering and Technology, heartily welcome you to witness and
                be a part of Asia's largest summit for aspiring student
                innovators and entrepreneurs.
              </p>
            </div>
            <br />
            <p className="ml-7 text-justify font-normal text-xl">
              IEDC Summit is an amalgamation of events from a plethora of
              domains, including technology, entrepreneurship, skill
              development, and so much more. It facilitates as a platform for
              connecting student innovators, industry leaders, and various
              startups in addition to providing an opportunity for them to
              engage and network, and form connections that lasts for a
              lifetime. Meet highly influential entrepreneurs, imbibe from panel
              discussions, expand your horizons in technical knowledge and
              financial literacy.
            </p>
            <br />
            <p className="text-2xl font-bold"> Let's unravel dimensions and unite perspectives together!</p>
          </div>
        </div>
        <div className="lg:pl-10 lg:w-1/2 md:w-1/2 ">
          <img className="pt-10 lg:w-90 " src={pic}></img>
        </div>
      </div>
      </div>
    </>
  );
}

export default Homepage;
