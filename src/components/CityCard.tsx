import Button from "./Button";
import { ButtonVariant } from "../constants/types";

export default function CityCard({
  bgImageSrc = "",
  cityName = "",
  price = "",
  caption=""
}) {
  return (
    <div
      className="rounded--md flex flex-col v-space--sm text-white pt-64 p-5"
      style={{
        background: `rgba(0 0 0 /.25) url(${bgImageSrc}) center / cover`,
        backgroundBlendMode: "darken",
      }}
    >
      <div className="flex-between !items-end">
        <div className="v-space--sm">
          <h4 className="font-bold text-xl">{cityName}</h4>
          <span className="text-sm">{caption}</span>
        </div>
        <span className="font-bold text-2xl">${price}</span>
      </div>
      <Button isRoundedSm variant={ButtonVariant.PRIMARY}>
        Book Flight
      </Button>
    </div>
  );
}
