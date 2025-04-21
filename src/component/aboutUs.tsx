import Commonbutton1 from "./commonbutton1";
export default function AboutUs() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full text-white">
      <div className="w-1/3 p-6">
        <h2 className="text-xl font-semibold mb-4">01</h2>
        <h3 className="text-4xl font-bold mb-6">About Us</h3>
        <p className="text-sm text-gray-400">
          We ardently strive to encapsulate life's most precious moments,
          weaving a tapestry of artistry and a hint of enchanting magic with the
          timeless essence of the human experience.
        </p>
      </div>
      <div className="w-2/3 p-6">
        <h2 className="text-5xl font-bold mb-6">
          Photography is driven by a deep passion for{" "}
          <span className="text-yellow-400">capturing life’s</span> most{" "}
          <span className="text-yellow-400">precious moments</span> with
          artistry and a touch of magic
        </h2>

        <Commonbutton1
          text="LEARN MORE→"
          px={"6"}
          py="3"
          bg="yellow-400"
          textColor="black"
          border="rounded-full"
          hover="bg-yellow-300"
        />
      </div>
    </div>
  );
}
