"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type?: "button" | "submit";
  containerStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  type = 'button',
  containerStyles,
  rightIcon,
  textStyles,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
