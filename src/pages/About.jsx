import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import tailwind_icon from "../assets/icons/tw-icon.svg";
import python_icon from "../assets/icons/python-5.svg";
function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    python_icon,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Manav Shete | About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className=" xl:order-2">
            <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] "></div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Front-End <br /> React Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Hi, I'm Manav Shete. A passionate Front-end React Developer <br />{" "}
              based in Mumbai,India. 📍
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React and Tailwind. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. I am also a team player who thrives in
              collaborating with cross-functional teams to produce outstanding
              web applications.
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Tech Stack{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

{
  /* <p className="px-8 text-lg font-medium  md:text-xl">
&lt;p&gt; As a Junior Front-End Developer, I possess an impressive
arsenal of skills in HTML, CSS, JavaScript, React and Tailwind. I
excel in designing and maintaining responsive websites that offer a
smooth user experience. My expertise lies in crafting dynamic,
engaging interfaces through writing clean and optimized code and
utilizing cutting-edge development tools and techniques. I am also a
team player who thrives in collaborating with cross-functional teams
to produce outstanding web applications. &lt;/p&gt;
</p> */
}
export default About;
