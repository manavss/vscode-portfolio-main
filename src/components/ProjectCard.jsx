import Tag from "./Tag";

/* eslint-disable react/prop-types */
function ProjectCard({ img, title, desc, tags, srcCode, demo }) {
  return (
    <div className="flex  max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor hover:shadow-lg">
      <img src={img} className=" h-[160px] rounded-b-xl rounded-t-lg" alt="" />

      <div className="flex flex-col gap-y-2 p-4">
        <h2 className=" text-2xl font-semibold">{title}</h2>
        <p className=" text-base font-medium">{desc}</p>
        <div className="">
          {tags.map((tag) => {
            return <Tag key={tag} tagName={tag} />;
          })}
        </div>
        <div className="space-x-2">
          <a
            href={srcCode}
            className="  px-1 py-1 text-lg font-semibold underline  decoration-accentColor hover:bg-accentColor"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            href={demo}
            className=" px-1 py-1 text-lg font-semibold underline decoration-accentColor hover:border-2 hover:border-accentColor hover:no-underline  "
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
