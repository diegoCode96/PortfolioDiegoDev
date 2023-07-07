import { motion } from "framer-motion";
const Projects = () => {
  const linksPro = [
    { name: "pokedex", link: "https://pokedex93.netlify.app", icon: "bowling-ball-outline" },
    { name: "omnifood", link: "https://omnifoodcode.netlify.app", icon: "fast-food-outline"},
    { name: "cart", link: "https://carritodecomprasacademlo.netlify.app/", icon: "cart-outline"},
    { name: "users", link: "https://entregable-04.netlify.app/", icon: "person-add-outline" },
  ];

  return (
    <article id="info"  className="flex justify-center items-center bg-gray-800/40 mx-10 sm:mx-32 sm:p-8 p-6  rounded-lg sm:mt-2 relative">
      <img className="absolute -z-10 sm:right-[40rem] sm:-bottom-[12rem] w-[50rem] h-[50rem]" src="/images/frame2.png" alt="" />
      <ul className="text-[#fff] flex flex-col sm:flex-row  gap-6 sm:gap-10 ">
        {linksPro.map((link) => (
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="rounded-lg overflow-hidden text-xl capitalize"
            key={link.name}       
          >
            
            <a href={link.link} target="blank_" className=" bg-zinc-600/40 sm:w-[10rem] sm:h-[10rem] p-12 text-center flex flex-col justify-center items-center">
              <p className="mb-5 text-3xl "><ion-icon name={link.icon}></ion-icon></p>
              {link.name}
            </a>
            
          </motion.li>
        ))}
      </ul>
    </article>
  );
};
export default Projects;
