import { IoAirplane, IoBedSharp } from "react-icons/io5";
import Button from "./Button";
import { ButtonVariant } from "../constants/types";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="py-4 md:py-0">
      <div className="container flex flex-wrap lg:flex-row items-center justify-center sm:justify-between gap-y-5 gap-x-16">
        <Link
          to="/"
          className="md:order-1 w-full md:w-fit text-center flex lg:block justify-center lg:justify-normal"
        >
          <img src="/images/logo-1.png" alt="logo" />
        </Link>
        <nav>
          <ul className="list-none flex items-center gap-8 border-b">
            <li className="py-5 border-b-4 flex items-center gap-1 font-semibold border-primary">
              <IoAirplane />
              <span>Find Flight</span>
            </li>
            <li className="py-5 border-b-4 flex items-center gap-1 font-semibold border-transparent">
              <IoBedSharp />
              <span>Find Stays</span>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-8 md:order-2">
          <Link to="#" className="link">
            Login
          </Link>
          <Button variant={ButtonVariant.DARK}>Sign up</Button>
        </div>
      </div>
    </div>
  );
}
