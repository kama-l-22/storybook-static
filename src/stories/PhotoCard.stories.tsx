import PhotoCard from "../component/photoCard";

export default {
  title: "Components/PhotoCard",
  component: PhotoCard,
  argTypes: {
    bg1: { control: "text" },
    text: { control: "text" },
    des: { control: "text" },
  },
};

export const Default = (args: any) => <PhotoCard {...args} />;
Default.args = {
  bg1: "https://via.placeholder.com/150",
  text: "Sample Photo",
  des: "This is a sample description",
};