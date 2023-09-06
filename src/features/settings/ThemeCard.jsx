/* eslint-disable react/prop-types */

import { useTheme } from "../../context/ThemeContext";

function ThemeCard({ name, publisher, theme, img }) {
  const { changeTheme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center justify-between gap-y-3 bg-mainBg p-4 text-center text-textColor`}
    >
      <span>
        <img src={img} width={100} height={100} alt="" />
      </span>
      <div>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <h4 className="text-base font-medium">{publisher}</h4>
      </div>
      <button
        onClick={() => {
          changeTheme(theme);
        }}
        className=" bg-accentColor px-2 text-lg font-medium"
      >
        Set Color Theme
      </button>
    </div>
  );
}

export default ThemeCard;
