import "./App.css";
import Header from "./component/header";
import Hero from "./component/hero";
import bg1 from "./assets/bg1.jpg";
import Warper from "./component/warper";
import OverExpertiseBox from "./component/overExpertiseBox";
import Commonbutton1 from "./component/commonbutton1";
import AboutUs from "./component/aboutUs";
import Contact from "./component/contact";
import OurWork from "./component/ourWork";
import Awards from "./component/Awards";

import photo1 from "./assets/ourExpertPhoto1.jpg";
import photo2 from "./assets/ourExpertPhoto2.jpg";

function App() {
  return (
    <div className="  flex flex-wrap justify-center  bg-black">
      <Warper
        flex="flex"
        flexWrap="flex-wrap"
        justifyContent="justify-around"
        bgcover="bg-cover"
        bgposition="bg-center"
        width="90%"
        height="150"
        marginBottom="10"
        style={{ backgroundImage: `url(${bg1})` }}
        marginTop="10"
        border="rounded-xl"
      >
        <Header navlist={["Home", "Gallery", "Contact"]} />
        <Hero />
      </Warper>

      <Warper
        flex="flex"
        flexWrap="flex-wrap"
        justifyContent="justify-between"
        width="90%"
        height="100%"
        marginBottom="0"
      >
        <AboutUs />
      </Warper>
      <Warper
        flex="flex"
        flexWrap="flex-wrap"
        justifyContent="justify-around"
        width="90%"
        height="180"
        marginBottom="10"
      >
        <div className="w-full flex flex-col items-start p-10 text-white">
          <h2 className="text-xl font-semibold mb-4">02</h2>
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold mb-6">
            When moments captured every dream crafted into beautiful reality
          </h3>
          <div className="flex flex-wrap w-full">
            <OverExpertiseBox
              bgimage={photo1}
              location="Madurai, India"
              text="Duck Pond in Madurai, India"
            ></OverExpertiseBox>
            <OverExpertiseBox
              bgimage={photo2}
              location="Gunidy Chennai, India"
              text="Dearly Departed in Gunidy, Chennai"
            ></OverExpertiseBox>
          </div>

          <Commonbutton1
            text="See all →"
            bg="bg-white"
            textColor="text-black"
            border="rounded-full"
            hover="bg-gray-200"
            mt="6"
            px="6"
            py="2"
          ></Commonbutton1>
        </div>
      </Warper>
      <Warper
        flex="flex"
        flexWrap="flex-wrap"
        justifyContent="justify-around"
        width="90%"
        height="180"
        marginBottom="20"
      >
        <OurWork />
      </Warper>
      <Warper
        flex="flex"
        flexWrap="flex-wrap"
        justifyContent="justify-around"
        width="90%"
        height="180"
        marginBottom="10"
      >
        <Awards />
      </Warper>
      <Warper
        flex="flex"
        flexWrap="flex-wrap"
        justifyContent="justify-around"
        width="90%"
        height="80"
        marginBottom="20"
      >
        <Contact navlist={["Home", "Gallery", "Contact Us"]} />
      </Warper>
    </div>
  );
}

export default App;
