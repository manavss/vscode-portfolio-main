import Chevron from "./icons/SourceControlIcon";
import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import CheckIcon from "./icons/CheckIcon";
import ReactIcon from "./icons/ReactIcon";

function Footer() {
  return (
    <div className="flex h-8 justify-between  bg-bottombarBg px-4 text-lg text-textColor max-sm:text-sm">
      <div className="flex items-center gap-x-3">
        <a
          className="flex items-center hover:bg-bottombarHoverBg"
          href="https://github.com/manavss/"
          target="_blank"
          rel="noreferrer"
        >
          <Chevron />
        </a>
        <div className="flex cursor-pointer gap-x-1 hover:bg-bottombarHoverBg">
          <ErrorIcon />
          <WarningIcon />
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <ReactIcon />
        <CheckIcon />
        <div className=" cursor-pointer hover:bg-bottombarHoverBg">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
