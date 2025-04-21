import React from "react";

export default function Commonbutton1({
  text,
  bg,
  textColor,
  border,
  hover = "",
  pt,
  px,
  py,
  mt,
  onclick = () => {
    alert("Button clicked");
  },
}: Readonly<{
  text: string;
  bg?: string;
  textColor?: string;
  border?: string;
  hover?: string;
  pt?: string;
  px?: string;
  py?: string;
  mt?: string;
  onclick?: () => void;
}>) {
  return (
    <button
      className={`${bg} ${textColor} ${border} shadow-md hover:${hover} pt-${pt} px-${px} py-${py} mt-${mt}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
