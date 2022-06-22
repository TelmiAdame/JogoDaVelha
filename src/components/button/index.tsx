import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "submit" | "reset" | "button";
  label: string;
}
const Button = ({ buttonType, label, ...rest }: IButtonProps) => {
  return (
    <button {...rest} type={buttonType} name="clickButton">
      {label}
    </button>
  );
};

export default Button;
