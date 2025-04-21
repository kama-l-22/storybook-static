import logo from "../assets/logo.png";
import CommonButton1 from "./commonbutton1";
export default function Header({
  navlist = ["Home", "Gallery", "Contact"],
}: {
  readonly navlist: readonly string[];
}) {
  return (
    <div className="flex justify-between items-center w-270 h-13 mt-6">
      <div className="py-12">
        <div className="w-20 h-20 overflow-hidden">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="py-12">
        <ul
          className="heroBackground flex gap-15 items-center rounded-full p-2 pl-10 pr-10 w-110"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "white",
          }}
        >
          {navlist.map((item, index) => (
            <li
              key={index + "k"}
              className="w-1/4 pr-6 hover:text-[#2c2a26] cursor-pointer transition-colors duration-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <CommonButton1
          text="LET'S TALK→"
          bg="bg-yellow-400"
          textColor="text-black"
          border="rounded-full"
          hover="bg-yellow-300"
          px="4"
          py="2"
        ></CommonButton1>
      </div>
    </div>
  );
}
