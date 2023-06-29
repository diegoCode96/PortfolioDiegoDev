import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <section className="bg-slate-950 w-full min-h-screen grid sm:grid-cols-[1fr_1fr] place-items-center">
        <div className="mr-10 sm:col-[2]  mt-10 sm:mt-0">
          <img className="object-cover " src="/images/Image.png" alt="" />
        </div>
        <article className="text-[#fff] mx-5 sm:row-[1] -mt-32">
          <h1 className="text-[30px] leading-9 font-bold mb-10">
            <span className="text-[#9BA4ED]">hi! </span>I'am a frontend
            developed.
          </h1>
          <p className="text-sm font-normal leading-4 mb-5">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
          <button className="border-[1px] px-3 py-1 rounded-md">
            Click here
          </button>
        </article>

      </section>
    </>
  );
}

export default App;
