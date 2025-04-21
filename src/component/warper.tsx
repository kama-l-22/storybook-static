import React from "react";

export default function Warper({
  flex = "",
  flexWrap = "",
  justifyContent = "",
  width = "",
  height = "",
  marginBottom = "",
  children,
  bgcover = "",
  bgposition = "",
  style = {},
  border = "",
  marginTop = "",
}: Partial<{
  flex: string;
  flexWrap: string;
  justifyContent: string;
  width: string;
  height: string;
  marginBottom: string;
  bgcover: string;
  bgposition: string;
  style: React.CSSProperties;
  marginTop: string;
  border: string;
}> & { children: React.ReactNode }) {
  return (
    <div
      className={`${flex} ${flexWrap} ${justifyContent} w-[${width}] h-${height} mb-${marginBottom} ${bgcover} ${bgposition} mt-${marginTop} ${border}`}
      style={style}
    >
      {children}
    </div>
  );
}
