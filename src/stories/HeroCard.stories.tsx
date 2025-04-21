import HeroCard from "../component/heroCard";

export default {
  title: "Components/HeroCard",
  component: HeroCard,
  argTypes: {
    heroPhoto: { control: "text" },
    des: { control: "text" },
    camera: { control: "text" },
  },
};

export const Default = (args: any) => <HeroCard {...args} />;
Default.args = {
  heroPhoto: "https://via.placeholder.com/150",
  des: "Sample Description",
  camera: "Sample Camera",
};