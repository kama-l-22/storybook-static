interface OverExpertiseBoxProps {
  readonly bgimage: string;
  readonly location: string;
  readonly text: string;
}

export default function OverExpertiseBox({
  bgimage,
  location,
  text,
}: OverExpertiseBoxProps) {
  return (
    <div className="w-1/2 p-4">
      <img
        src={bgimage}
        alt="Chasing Clouds at Mont Blanc's Pinnacle"
        className="rounded-lg shadow-lg"
        width={"100%"}
        height={"100%"}
      />
      <h4 className="text-lg font-medium mt-4">{text}</h4>
      <p className="text-sm text-gray-400">{location}</p>
    </div>
  );
}
