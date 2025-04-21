import Commonbutton1 from "./commonbutton1";
export default function Contact({
  navlist = ["About us", "Our Work", "Awards", "Contact Us", "Blog"],
}: {
  readonly navlist: readonly string[];
}) {
  const addressLines = [
    "Chennai,",
    "Tamilnadu, CH 600097,",
    "India",
    "+91 1234567890",
  ];
  const Copyright = "© Photo Gallery. All rights reserved.";
  return (
    <div className="w-full flex flex-col items-start p-10 text-white bg-black">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <h3 className="text-4xl font-bold mb-6">
            Let’s <span className="text-yellow-400">discuss</span> your vision{" "}
            <span className="text-yellow-400">with us</span>
          </h3>
          <Commonbutton1
            text="LET'S TALK→"
            bg="bg-yellow-400"
            textColor="text-black"
            border="rounded-full"
            hover="bg-yellow-300"
            px="6"
            py="3"
          ></Commonbutton1>
        </div>
        <div className="text-gray-400 mr-20 p-10">
          {addressLines.map((line, index) => (
            <p key={index + "k"} className="mb-2">
              {" "}
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-10 w-full border-t border-gray-600 pt-6 flex justify-between items-center">
        <div className="text-white font-bold">Photo Gallery</div>
        <div className="flex space-x-6 text-gray-400">
          {navlist.map((item, index) => (
            <div key={index + "k"} className="hover:text-white cursor-pointer">
              {item}
            </div>
          ))}
        </div>
        <div className="text-gray-400">{Copyright}</div>
      </div>
    </div>
  );
}
