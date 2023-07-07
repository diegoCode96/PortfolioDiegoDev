import { motion } from "framer-motion";
import "./App.css";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Nav from "./components/Nav";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <Nav />
      <header
        id="home"
        className=" w-full min-h-screen grid sm:grid-cols-[1fr_1fr] place-items-center "
      >
        <div className="mr-10 sm:col-[2] mt-16 sm:mt-0 relative -z-10">
          <img className="absolute" src="/images/Ellipse.png" alt="" />
          <img
            className="object-cover animate-spin-slow w-[18rem] sm:w-[28rem]"
            src="/images/Image.png"
            alt=""
          />
        </div>
        <article className="text-[#fff] mx-5 sm:mx-10 sm:row-[1] ">
          <motion.h2 initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }} className="text-[30px] sm:text-[50px] sm:font-bold leading-8 sm:leading-tight mb-10">
            {/* <span className="text-[#9BA4ED]">Hi! </span>I'am a  */}
            <span className="text-[#9BA4ED] uppercase"> frontend
              developer</span>
          </motion.h2>
          <p className=" font-normal leading-4 mb-5 text-sm sm:text-base ">
            Welcome to my portfolio! I'm a passionate frontend developer with
            expertise in React, JavaScript, HTML, and CSS. With a strong
            foundation in these technologies, I have created engaging and
            interactive user interfaces for various web applications.
          </p>

        </article>
        </header> 
      <Projects />
      <Information />
      <Footer />
    </>
  );
}

export default App;
