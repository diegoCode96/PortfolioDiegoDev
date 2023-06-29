const Information = () => {
  return (
    <>
      <section id="about" className=" grid sm:grid-cols-[1fr_1fr] place-items-center px-8 gap-5 mt-[10rem] mb-[5rem] relative">
      <img className="absolute top-[20rem] sm:top-[5rem] sm:w-[40rem] sm:h-[40rem] sm:left-42 sm:z-10 " src="/images/Ellipse.png" alt="" />
        <article className="text-[#fff] sm:col-[2] sm:row-[1] sm:mx-0  ">
        
          <h2 className="text-[30px] sm:text-[45px] leading-8 sm:leading-tight sm:font-medium mb-5 ">
            <span className="text-[#9BA4ED] ">Last landing </span> and website
            projects
          </h2>
          <p className="text-sm sm:text-base font-normal leading-4 mb-5 ">
          In my recent projects, I have had the opportunity to work on some exciting landing pages and websites that showcase my frontend development skills. These projects have allowed me to demonstrate my proficiency in React, JavaScript, HTML, and CSS while creating captivating and user-friendly interfaces.
          </p>
        </article>
        <div className=" sm:col-[1] ">
          <img
            className="object-cover] "
            src="/images/png1.png"
            alt=""
          />
        </div>
      </section>

      <section className=" w-full grid sm:grid-cols-[1fr_1fr] place-items-center px-8 gap-5 ">
        <article className="text-[#fff] sm:row-[1] sm:mx-0">
          <h2 className="text-[30px] sm:text-[45px] leading-8 sm:leading-tight sm:font-medium mb-5 ">
            <span className="text-[#9BA4ED] ">Build </span>  a whole new world
          </h2>
          <p className="text-sm sm:text-base font-normal leading-4 mb-5 ">
          I believe in the transformative potential of technology and its ability to shape the way we interact with the digital realm. Every line of code I write is an opportunity to mold a unique and seamless user experience. By combining my technical skills with a keen eye for design, I aim to craft visually stunning interfaces that not only captivate users but also enhance their overall journey.
          </p>
        </article>
        <div className=" sm:col-[2]">
          <img
            className="object-cover "
            src="/images/png4.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};
export default Information;
