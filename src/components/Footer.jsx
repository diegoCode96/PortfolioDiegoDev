const Footer = () => {
  return (
    <section id="footer" className="text-[#fff] flex justify-center items-center mt-40 mb-20 ">
      <footer className="py-10 px-8 sm:px-[16rem] bg-gray-800/40 rounded-2xl flex flex-col justify-center items-center gap-5">
        <h4 className="text-[30px] sm:text-[30px] font-bold">Contact me!</h4>
        <ul className="flex justify-around">
          <li className="text-3xl mx-2">
            <a href="https://github.com/diegoCode96" target="blank_">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="text-3xl mx-2">
            <a href="https://www.instagram.com/diegopolancojara/" target="blank_">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="text-3xl mx-2">
            <a href="">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="text-3xl mx-2">
            <a href="">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <p>+ 593 963 17 6692</p>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
