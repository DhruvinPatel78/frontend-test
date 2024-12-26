import { FaCheck } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const Alert = ({ type, onClose }) => {
  return (
    <div
      className={
        "absolute top-0 left-0 h-20 bg-white w-full z-10 flex justify-between px-5 items-center"
      }
    >
      <p></p>
      <div className={"flex justify-center items-center gap-4"}>
        <FaCheck className={"text-primary text-2xl"} />
        <p className={"text-dark text-xs leading-3 font-normal"}>
          THE LOCATION HAS BEEN {type}
        </p>
      </div>
      <CgClose
        className={"text-gray text-2xl cursor-pointer"}
        onClick={onClose}
      />
    </div>
  );
};

export default Alert;
