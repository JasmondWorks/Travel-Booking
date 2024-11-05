import React from "react";
import Navbar from "../components/Navbar";
import SearchBookingForm from "../components/SearchBookingForm";
import Button from "../components/Button";
import { ButtonVariant } from "../constants/types";
import CityCard from "../components/CityCard";

export default function Home() {
  return (
    <div>
      <section
        style={{
          background:
            "brown url(/images/hero-image.jpg) no-repeat center / cover",
        }}
        className="pt-20 pb-48"
      >
        <div className="container">
          <div className="sm:w-[60%] md:w-[50%] lg:w-[40%] px-5 text-white v-space--sm">
            <h1 className="headline">
              Make your travel whishlist, we'll do the rest
            </h1>
            <p className="">Special offers to suit your plan</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="py-5">
            <SearchBookingForm />
            <div className="flex-between -mt-10">
              <div className="v-space--sm">
                <h2 className="h2">Let's go places together</h2>
                <p>
                  Discover the latest offers and news and start planning your
                  next trip with us
                </p>
              </div>
              <Button variant={ButtonVariant.OUTLINE}>See All</Button>
            </div>
          </div>
        </div>
        <img className="w-full" src="/images/places-illustration.jpg" alt="" />
      </section>
      <section className="py-8">
        <div className="container space-y-16">
          <div className="v-space--lg">
            <div className="flex-between">
              <div className="v-space--sm">
                <h2 className="h2">Fall into travel</h2>
                <p>
                  Going somewhere to celebrate this season? Whether you’re going
                  home or somewhere to roam, we’ve got the travel tools to get
                  you to your destination.
                </p>
              </div>
              <Button variant={ButtonVariant.OUTLINE}>See All</Button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1em",
              }}
            >
              <CityCard
                bgImageSrc="/images/london.jpg"
                cityName="London"
                caption="London eye adventure"
                price="600"
              />
              <CityCard
                bgImageSrc="/images/paris3.jpg"
                cityName="Paris"
                caption="A Paris Adventure"
                price="600"
              />
              <CityCard
                bgImageSrc="/images/melbourne.jpg"
                cityName="Melbourne"
                caption="An amazing journey"
                price="600"
              />
              <CityCard
                bgImageSrc="/images/columbia.jpg"
                cityName="Columbia"
                caption="Amazing streets"
                price="600"
              />
            </div>
          </div>
          <div className="v-space--lg">
            <div className="flex-between">
              <div className="v-space--sm">
                <h2 className="h2">Fall into travel</h2>
                <p>
                  Going somewhere to celebrate this season? Whether you’re going
                  home or somewhere to roam, we’ve got the travel tools to get
                  you to your destination.
                </p>
              </div>
              <Button variant={ButtonVariant.OUTLINE}>See All</Button>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 items-center">
              <div className="bg-primary rounded--lg p-5 v-space--lg text-primaryDark">
                <div className="flex-between flex-wrap gap-5 !items-start">
                  <h4 className="h1 !leading-tight">Backpacking Sri Lanka</h4>
                  <div className="text-center flex flex-col bg-white rounded--md p-2">
                    <span className="">From</span>
                    <span className="font-bold text-xl">$700</span>
                  </div>
                </div>
                <p className="pb-20">
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>
                <Button className="w-full" variant={ButtonVariant.LIGHT}>
                  Book Flight
                </Button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                  gridTemplateRows: "repeat(2, 1fr)",
                }}
                className="gap-5 content-start"
              >
                <img
                  className="rounded--lg h-48 object-cover w-full"
                  src="/images/tour-destination-1.jpg"
                  alt="tour destination"
                />
                <img
                  className="rounded--lg h-48 object-cover w-full"
                  src="/images/tour-destination-1.jpg"
                  alt="tour destination"
                />
                <img
                  className="rounded--lg h-48 object-cover w-full"
                  src="/images/tour-destination-1.jpg"
                  alt="tour destination"
                />
                <img
                  className="rounded--lg h-48 object-cover w-full"
                  src="/images/tour-destination-1.jpg"
                  alt="tour destination"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[-70px]">
        <div className="container">
          <div className="bg-primaryLight rounded--lg text-primaryDark p-5 translate-y-[25%] lg:translate-y-[50%] ">
            <div
              className="lg:w-[50%] text-center lg:text-left flex flex-col justify-center v-space
            "
            >
              <h2
                style={{ lineHeight: "1rem !important" }}
                className="h1 !leading-tight"
              >
                Subscribe <br className="hidden lg:block" /> Newsletter
              </h2>
              <div className="flex flex-col space-y-2">
                <span className="text-xl font-bold">The Travel</span>
                <span>
                  Get inspired! Receive travel discounts, tips and behind the
                  scenes stories.
                </span>
                <div className="flex flex-col md:flex-row justify-center lg:justify-normal gap-3">
                  <input
                    type="text"
                    className="bg-white p-3 rounded--sm"
                    placeholder="Your email address"
                  />
                  <Button variant={ButtonVariant.DARK}>Subscribe</Button>
                </div>
              </div>
            </div>
            <svg
              className="lg:absolute mx-auto lg:mx-0 right-5 bottom-0 w-80 h-full lg:w-auto -mb-5 lg:mb-0"
              width={400}
              height={305}
              viewBox="0 0 400 305"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_360_2351)">
                <path
                  d="M157.25 376.763H239.463C240.138 376.763 240.707 374.956 240.707 372.856V121.256C240.707 119.144 240.138 117.35 239.463 117.35H157.25C156.875 117.35 156.6 117.756 156.394 118.4L156.381 118.531C156.381 118.531 156.356 118.544 156.344 118.663C156.094 119.508 155.982 120.388 156.013 121.269V372.869C156.013 374.956 156.569 376.763 157.25 376.763Z"
                  fill="#DFAD92"
                />
                <path
                  d="M194.438 376.763H239.994C240.381 376.763 240.688 374.956 240.688 372.856V121.256C240.688 119.144 240.375 117.35 239.994 117.35H194.444C194.238 117.35 194.081 117.756 193.981 118.4L193.969 118.531C193.969 118.531 193.956 118.544 193.944 118.663C193.803 119.524 193.742 120.396 193.763 121.269V372.869C193.763 374.956 194.063 376.763 194.438 376.763Z"
                  fill="#A4806D"
                />
                <path
                  d="M157.25 268.231H239.438C240.125 268.231 240.694 267.844 240.694 267.388V212.438C240.694 211.975 240.125 211.575 239.438 211.575H157.238C156.943 211.567 156.654 211.647 156.406 211.806L156.369 211.831L156.319 211.869C156.223 211.928 156.143 212.011 156.088 212.109C156.032 212.208 156.002 212.318 156 212.431V267.381C156 267.85 156.544 268.231 157.238 268.231"
                  fill="#A4806D"
                />
                <path
                  d="M133.688 47H63.0188C28.225 47 0 85.575 0 133.144V238.156H70.6688V133.144C70.6688 85.575 98.875 47 133.688 47Z"
                  fill="#7C9C9F"
                />
                <path
                  d="M298.269 47H133.687C98.875 47 70.6875 85.575 70.6875 133.144V238.156H361.294V133.144C361.294 85.575 333.081 47 298.294 47"
                  fill="#112211"
                />
                <path
                  d="M145.312 47H63.0312C28.2313 47 0.03125 85.575 0.03125 133.144V238.156H208.356V133.144C208.356 85.575 180.144 47 145.356 47"
                  fill="#65B599"
                />
                <path
                  d="M399.394 154.987C399.419 155.025 399.569 155.037 399.569 155.075V230.469C399.578 230.736 399.518 231.001 399.394 231.237C399.394 231.237 399.369 231.237 399.369 231.25H399.344C399.262 231.406 399.112 231.544 398.937 231.544H358.119C357.756 231.544 357.475 231.031 357.475 230.4V189.356H233.5C232.144 189.356 230.969 189.112 230.969 188.844V155.006C230.969 154.712 232.144 154.481 233.5 154.481H398.937C399.125 154.481 399.294 154.669 399.394 154.925"
                  fill="#FF8682"
                />
                <path
                  d="M140.426 59H66.5675C35.3409 59 10 95.1164 10 139.668V238H197V139.668C197 95.1164 171.683 59 140.426 59Z"
                  fill="#546869"
                />
              </g>
              <defs>
                <clipPath id="clip0_360_2351">
                  <rect width={400} height={305} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
