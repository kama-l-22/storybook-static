import AwardCard from "../component/awardCard";

export default {
  title: "Components/AwardCard",
  component: AwardCard,
  argTypes: {
    year: { control: "text" },
    award: { control: "text" },
  },
};

export const Default = (args: any) => <AwardCard {...args} />;
Default.args = {
  year: "2023",
  award: "Best Photography Award",
};