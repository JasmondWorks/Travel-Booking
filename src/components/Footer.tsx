import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="grid pt-52 py-20 text-primaryDark bg-primary">
      <div className="container flex flex-col lg:flex-row md:justify-between md:items-start !items-start gap-10 ">
        <div className="v-space">
          <img src="/images/logo-2.png" alt="logo" />
          <div className="flex gap-3 items-center text-2xl">
            <Link to="#">
              <FaFacebook />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaYoutube />
            </Link>
            <Link to="#">
              <AiFillInstagram />
            </Link>
          </div>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
          <div className="v-space">
            <h4 className="h4">Our Destinations</h4>
            <ul className="v-space--sm">
              <li>Canada</li>
              <li>Alaska</li>
              <li>France</li>
              <li>Iceland</li>
            </ul>
          </div>
          <div className="v-space">
            <h4 className="h4">Our Activities</h4>
            <ul className="v-space--sm">
              <li>Northern Lights</li>
              <li>Cruising & sailing</li>
              <li>Multi-activities</li>
              <li>Kayaing</li>
            </ul>
          </div>
          <div className="v-space">
            <h4 className="h4">Travel Blogs</h4>
            <ul className="v-space--sm">
              <li>Bali Travel Guide</li>
              <li>Sri Lanks Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Bali Travel Guide</li>
            </ul>
          </div>
          <div className="v-space">
            <h4 className="h4">About Us</h4>
            <ul className="v-space--sm">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
