import logo from "./assets/cursor.png";
import bachir3 from "./assets/bachir3.png";
import Deskshore01 from "./assets/Deskshore01.png";
import Deskshore02 from "./assets/Deskshore02.png";
import Deskshore03 from "./assets/Deskshore03.png";
import Smartclean01 from "./assets/Smartclean01.png";
import Smartclean02 from "./assets/Smartclean02.png";
import Smartclean03 from "./assets/Smartclean03.png";
import Gpggranit01 from "./assets/Gpggranit01.png";
import Gpggranit02 from "./assets/Gpggranit02.png";
import Gpggranit03 from "./assets/Gpggranit03.png";
import Alloavocat01 from "./assets/Alloavocat01.png";
import Alloavocat02 from "./assets/Alloavocat02.png";
import {Phone, Linkedin, Mail, Up} from "./assets/phone.js";
import "./App.css";
import { ButtonPrimary, ButtonSecondary } from "./Button";

function App() {
  return (
    <div className="bg-lightest" id="top-page">
      <div className="my-navbar flex sticky top-0 px-6 md:px-20 justify-between py-2 bg-lightest z-10">
        <img src={logo} alt="logo" className="h-12" />
        <ButtonSecondary text="Contact" to="#contact"/>
      </div>
      <div className="flex flex-col bg-lightest pe-0 items-center md:flex-row w-full justify-between">
        <div className="flex flex-col gap-4 py-12 px-6 md:px-20">
          <h3 className="">Hi, I'm a UX designer from Casablanca</h3>
          <p>I'm passionate about UI design and design systems</p>
          <div className="flex flex-col md:flex-row gap-4">
            <ButtonPrimary text="Contact" to="#contact" />
            <ButtonSecondary text="See projects" to="#projects" />
          </div>
        </div>
        <img src={bachir3} alt="logo" className="object-contain h-96" />
      </div>
      <div className="flex flex-col bg-white gap-6 px-6 py-12 md:px-20 md:flex-row justify-between" id="projects">
        <div className="md:sticky md:top-20 h-full md:w-1/2">
          <h3 className="mb-2">Deskshore</h3>
          <p>a financial management platform that helps companies streamline accounting tasks and improve financial decision-making</p>
         
        </div>
        <div className="flex flex-col md:w-1/2 gap-12">

        <img src={Deskshore01} alt="logo" className="object-contain" />
        <img src={Deskshore02} alt="logo" className="object-contain" />
        <img src={Deskshore03} alt="logo" className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col bg-lightest gap-6 px-6 py-12 md:px-20 md:flex-row justify-between">
        <div className="md:sticky md:top-20 h-full md:w-1/2">
          <h3 className="mb-2">Smartclean</h3>
          <p>Revolutionizing Waste Management with SmartClean: SaaS to help companies optimize their vehicle and employee management, streamline activities, and improve overall efficiency</p>
         
        </div>
        <div className="flex flex-col md:w-1/2 gap-12">

        <img src={Smartclean01} alt="logo" className="object-contain" />
        <img src={Smartclean02} alt="logo" className="object-contain" />
        <img src={Smartclean03} alt="logo" className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col bg-white gap-6 px-6 py-12 md:px-20 md:flex-row justify-between">
        <div className="md:sticky md:top-20 h-full md:w-1/2">
          <h3 className="mb-2">GPG Granit</h3>
          <p>Providing an easier way to find the perfect monument for your loved ones. Explore the GPG Granit marketplace, where both businesses and individuals can browse a wide range of funerary monuments with ease</p>
         
        </div>
        <div className="flex flex-col md:w-1/2 gap-12">

        <img src={Gpggranit01} alt="logo" className="object-contain" />
        <img src={Gpggranit02} alt="logo" className="object-contain" />
        <img src={Gpggranit03} alt="logo" className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col bg-lightest gap-6 px-6 py-12 md:px-20 md:flex-row justify-between">
        <div className="md:sticky md:top-20 h-full md:w-1/2">
          <h3 className="mb-2">Allo avocat</h3>
          <p>Get Legal Advice Anytime, Anywhere.Connect with nearby lawyers, schedule sessions, and get advice online. With this intuitive platform, you can get the legal help you need on your schedule, from the comfort of your own home</p>
         
        </div>
        <div className="flex flex-col md:w-1/2 gap-12">

        <img src={Alloavocat01} alt="logo" className="object-contain" />
        <img src={Alloavocat02} alt="logo" className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col bg-white gap-6 px-6 py-12 md:px-20 justify-center" id="contact">
        <div className="gap-4 ">
          <h3 className="mb-2 text-center">Let's connect</h3>
          <p className="text-center">Feel free to reach out to me</p>
         
        </div>
        <div className="flex flex-col gap-6">
<div className="flex justify-center gap-2">
        <Phone />
        <a href="tel:212-654115866" className="text-primary font-bold underline align-middle">(212) 654-115866</a>
  </div>
<div className="flex justify-center gap-2">
        <Linkedin />
        <a href="https://linkedin.com/in/bachircherrat/" target="_blank" rel="noreferrer" className="text-primary font-bold underline align-middle">linkedin.com/in/bachircherrat/</a>
  </div>
<div className="flex justify-center gap-2">
        <Mail />
        <a href="mailto:cherratbachir@gmail.com" className="text-primary font-bold underline align-middle">cherratbachir@gmail.com</a>
  </div>
        </div>
      </div>
      <a href="#top-page" className="flex fixed bottom-8 right-8 w-16 h-16 bg-darkest text-white items-center justify-center rounded-full drop-shadow-lg hover:drop-shadow-xl hover:bg-opacity-90" id="top"><Up/></a>
    </div>
  );
}

export default App;
