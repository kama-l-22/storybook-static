import bg1 from "../assets/bg1.jpg";
import AwardCard from "./awardCard";
export default function Awards() {
  const awards = [
    { year: "2015", award: "Best Photography of the Year" },
    { year: "2017", award: "Travel Photographer Of The Year" },
    { year: "2022", award: "Magnum Photography Awards" },
    { year: "2023", award: "International Photography Awards" },
  ];
  return (
    <div className="w-full flex flex-col items-start p-10 text-white">
      <h2 className="text-xl font-semibold mb-4">04</h2>
      <h2 className="text-2xl font-semibold mb-4">Awards</h2>
      <h3 className="text-4xl font-bold mb-6">
        Award is a pixel that reflects our ongoing dedication to innovation and
        excellence
      </h3>
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 p-4">
          <ul className="space-y-4">
            {awards.map((award) => (
              <AwardCard
                key={award.year}
                year={award.year}
                award={award.award}
              />
            ))}
          </ul>
        </div>
        <div className="w-1/2 p-4">
          <img
            src={bg1}
            alt="A Quiet Afternoon in the Countryside"
            className="rounded-lg shadow-lg"
          />
          <h4 className="text-lg font-medium mt-4">
            A Quiet Afternoon in the Countryside
          </h4>
          <p className="text-sm text-gray-400 mt-2">
            As the sun gently descends in the western sky, casting a warm golden
            glow upon the rolling hills and meadows, the countryside settles
            into a tranquil serenity.
          </p>
        </div>
      </div>
    </div>
  );
}
