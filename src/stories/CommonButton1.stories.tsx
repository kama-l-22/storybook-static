import Commonbutton1 from "../component/commonbutton1";

export default {
  title: "Components/CommonButton1",
  component: Commonbutton1,
  argTypes: {
    text: { control: "text" },
    bg: { control: "text" },
    textColor: { control: "text" },
    border: { control: "text" },
    hover: { control: "text" },
    px: { control: "text" },
    py: { control: "text" },
  },
};

export const Default = (args: any) => <Commonbutton1 {...args} />;
Default.args = {
  text: "Click Me",
  bg: "bg-yellow-400",
  textColor: "text-black",
  border: "rounded-full",
  hover: "bg-yellow-300",
  px: "4",
  py: "2",
};