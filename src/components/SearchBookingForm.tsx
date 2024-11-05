import React from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";
import { IoPaperPlane } from "react-icons/io5";
import { ButtonVariant } from "../constants/types";

export default function SearchBookingForm() {
  return (
    <div className="card v-space--lg !px-6 !py-8 rounded--lg bg-white translate-y-[-30%]">
      <h3 className="h3">Where are you flying?</h3>
      <form className="v-space--lg">
        <div className="flex gap-5 flex-wrap">
          {/* Double select box */}
          <InputField
            className="w-full"
            containerClassName="w-full md:flex-1 md:w-fit"
            legendTitle="From - To"
            placeholder="Lahore-Karachi"
          />
          <InputField
            className="w-full"
            containerClassName="w-full md:w-fit"
            legendTitle="Trip"
            placeholder="Return"
          />
          <InputField
            className="w-full"
            containerClassName="w-full md:flex-1 md:w-fit"
            legendTitle="Depart - Return"
            placeholder="07 Nov 22 - 13 Nov 22"
          />
          <InputField
            className="w-full"
            containerClassName="w-full md:flex-1 md:w-fit"
            legendTitle="From - To"
            placeholder="1 Passenger, Economy"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center md:justify-end ">
          <button className="flex items-center gap-2 font-semibold">
            <FaPlus />
            <span>Add Promo Code</span>
          </button>
          <Button
            variant={ButtonVariant.PRIMARY}
            className="flex items-center gap-2 w-full justify-center md:w-fit"
          >
            <IoPaperPlane />
            <span>Show Flights</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
