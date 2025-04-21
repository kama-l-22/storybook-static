import OverExpertiseBox from "../component/overExpertiseBox";

export default {
  title: "Components/OverExpertiseBox",
  component: OverExpertiseBox,
  argTypes: {
    bgimage: { control: "text" },
    location: { control: "text" },
    text: { control: "text" },
  },
};

export const Default = (args: any) => <OverExpertiseBox {...args} />;
Default.args = {
  bgimage: "https://via.placeholder.com/150",
  location: "Sample Location",
  text: "Sample Text",
};