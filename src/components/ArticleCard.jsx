/* eslint-disable react/prop-types */
function ArticleCard({ url, image, title, desc }) {
  return (
    <a
      href={url}
      className="flex  max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg  hover:shadow-lg"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={image}
        className=" h-[160px] rounded-b-xl rounded-t-lg "
        alt=""
      />

      <div className="flex flex-col gap-y-2 p-4">
        <h2 className=" text-2xl font-semibold text-accentColor">{title}</h2>
        <p className=" text-base font-medium text-white">{desc}</p>
      </div>
    </a>
  );
}

export default ArticleCard;
