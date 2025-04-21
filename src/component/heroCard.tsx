export default function HeroCard({
  heroPhoto,
  des,
  camera,
}: Readonly<{
  heroPhoto: string;
  des?: string;
  camera?: string;
}>) {
  return (
    <div
      className="w-300 h-35  rounded-lg flex p-2"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.9)",
      }}
    >
      <img
        src={heroPhoto}
        alt="Lonely Life at the Baltimore"
        className="rounded-lg h-30 w-[50%]"
      />
      <div className="w-1/2 h-30 pl-4 pr-4 flex flex-col justify-center">
        <p className="text-stone-50">{des}</p>
        <p className="text-stone-200 text-xs">{camera}</p>
      </div>
    </div>
  );
}
