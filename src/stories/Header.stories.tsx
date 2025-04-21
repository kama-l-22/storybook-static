import Header from "../component/header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    navlist: { control: "array" },
  },
};

export const Default = (args: any) => <Header {...args} />;
Default.args = {
  navlist: ["Home", "Gallery", "Contact"],
};