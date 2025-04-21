import heroPhoto1 from "../assets/heroPhoto1.jpg";
import heroPhoto2 from "../assets/heroPhoto2.jpg";
import HeroCard from "./heroCard";
export default function Hero() {
  return (
    <>
      <div className="w-[90%] text-7xl text-stone-50 mt-5">
        Immortalize your cherished memories with elegant photography.
      </div>
      <div className="flex justify-between mt-5 gap-10 w-[90%]">
        <div className="flex flex-wrap gap-5  w-[40%] h-25 mt-25">
          {["Landscape", "Wildlife", "Architectural", "Travel", "Portrait"].map(
            (category) => (
              <button
                key={category}
                style={{
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                }}
                className="rounded-full  h-9 pl-5 pr-5 cursor-pointer"
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="mt-10 w-[50%] h-0 overflow">
          <div className="mt-6 flex flex-nowrap gap-4 h-50">
            <HeroCard
              heroPhoto={heroPhoto1}
              des="Squirel image"
              camera="Shoot with sony a2000"
            />
            <HeroCard
              heroPhoto={heroPhoto2}
              des="Rainbow image"
              camera="Shoot with sony a6000"
            />
          </div>
        </div>
      </div>
    </>
  );
}
