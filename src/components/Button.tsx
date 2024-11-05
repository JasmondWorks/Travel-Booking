import { Link } from "react-router-dom";
import { ButtonVariant } from "../constants/types";
interface Props {
  variant: ButtonVariant;
  className?: string;
  isButton?: boolean;
  isRoundedSm?: boolean;
  children: React.ReactNode;
}

export default function Button({
  isButton = true,
  className = "",
  variant,
  children,
  isRoundedSm = false,
}: Props) {
  const classNames = `px-5 white-space-nowrap ${
    isRoundedSm ? "rounded--sm" : "rounded--md"
  } py-3 rounded font-semibold text-center inline-block 
  ${
    variant === ButtonVariant.OUTLINE ? "!text-black border-2 border-primary" : ""
  }
  ${variant === ButtonVariant.PRIMARY ? "bg-primary !text-black" : ""}
  ${variant === ButtonVariant.DARK ? "bg-primaryDark text-white" : ""}
  ${variant === ButtonVariant.LIGHT ? "bg-white text-primaryDark" : ""}
  `;

  if (isButton)
    return (
      <button className={`whitespace-nowrap ${classNames} ${className}`}>
        {children}
      </button>
    );

  return (
    <Link to="#" className={`whitespace-nowrap ${classNames} ${className}`}>
      {children}
    </Link>
  );
}
