import PhotoCard from "../component/photoCard";
import Commonbutton1 from "./commonbutton1";

import workPhoto1 from "../assets/workPhoto1.jpg";
import workPhoto2 from "../assets/workPhoto2.jpg";
import workPhoto3 from "../assets/workPhoto3.jpg";

export default function OurWork() {
  return (
    <div className="w-full flex flex-col items-start p-10 text-white">
      <h2 className="text-xl font-semibold mb-4">03</h2>
      <h2 className="text-2xl font-semibold mb-4">Our Work</h2>
      <h3 className="text-4xl font-bold mb-6">
        Explore the artistry and precision behind our portfolio of timeless
        photography
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        Embark on a visual journey through our cherished moments captured with
        creativity and precision. Each image in our portfolio reflects our
        dedication to preserving life's beauty and significance.
      </p>
      <Commonbutton1
        text="Explore More →"
        bg="bg-white"
        textColor="text-black"
        border="rounded-full"
        hover="bg-gray-200"
        mt="4"
        px="6"
        py="2"
      ></Commonbutton1>
      <div className="flex flex-wrap w-full mt-10">
        <PhotoCard bg1={workPhoto1} text="Sample Text" des="Majestic" />
        <PhotoCard
          bg1={workPhoto2}
          text="A Temple's Serene Silhouette"
          des="A tranquil moment captured in the heart of Japan's cultural heritage."
        />
        <PhotoCard
          bg1={workPhoto3}
          text="Moments Framed in Portraits"
          des="Capturing the essence of human emotion and connection through timeless portraits."
        />
      </div>
    </div>
  );
}
