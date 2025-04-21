import Contact from "../component/contact";

export default {
  title: "Components/Contact",
  component: Contact,
  argTypes: {
    navlist: { control: "array" },
  },
};

export const Default = (args: any) => <Contact {...args} />;
Default.args = {
  navlist: ["About us", "Our Work", "Awards", "Contact Us", "Blog"],
};