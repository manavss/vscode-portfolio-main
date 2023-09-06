import { useTheme } from "../../context/ThemeContext";

function ErrorPage() {
  const { theme } = useTheme();

  return (
    <div
      className={` flex h-[100vh] items-center justify-center theme-${theme} bg-mainBg text-textColor`}
    >
      <p className=" text-2xl font-bold">
        Seems like API hase reached its Limit😢.Try again after an hour.
      </p>
    </div>
  );
}

export default ErrorPage;
