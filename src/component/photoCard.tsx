import Commonbutton1 from "./commonbutton1";
export default function PhotoCard(
  { bg1, text, des }: { bg1: string; text: string; des?: string } = {
    bg1: "",
    text: "Majestic Creatures of the African Savanna",
    des: "Majestic Creatures of the African Savanna",
  }
) {
  return (
    <div className="w-1/3 p-4">
      <div className="rounded-lg shadow-lg ">
        <img
          src={bg1}
          alt="Majestic Creatures of the African Savanna"
          className="rounded-t-lg"
        />
        <div className="p-4">
          <h4 className="text-lg font-medium">{text}</h4>
          <p className="text-sm text-gray-400 mt-2">{des}</p>
          <Commonbutton1
            text="More Details →"
            bg="bg-white"
            textColor="text-black"
            border="rounded-full"
            hover="bg-gray-200"
            mt="4"
            px="4"
            py="2"
          ></Commonbutton1>
        </div>
      </div>
    </div>
  );
}
