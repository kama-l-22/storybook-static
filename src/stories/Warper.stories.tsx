import Warper from "../component/warper";

export default {
  title: "Components/Warper",
  component: Warper,
  argTypes: {
    flex: { control: "text" },
    flexWrap: { control: "text" },
    justifyContent: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    bgcover: { control: "text" },
    bgposition: { control: "text" },
  },
};

export const Default = (args: any) => (
  <Warper {...args}>
    <div style={{ color: "white" }}>Content inside Warper</div>
  </Warper>
);
Default.args = {
  flex: "flex",
  flexWrap: "flex-wrap",
  justifyContent: "justify-center",
  width: "100%",
  height: "100%",
  bgcover: "bg-cover",
  bgposition: "bg-center",
};