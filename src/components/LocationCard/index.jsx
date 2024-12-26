import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiTrash } from "react-icons/pi";

const LocationCard = ({
  data,
  selectedData,
  changeAction,
  onDelete,
  onClick,
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden flex flex-col w-full bg-white cursor-default drop-shadow-3xl`}
      key={data.id}
    >
      <div
        className={`flex justify-between items-center cursor-pointer p-4 drop-shadow-3xl ${
          selectedData?.id === data.id ? "bg-gray" : "bg-white"
        }`}
        onClick={() => onClick({ ...data })}
      >
        <div className={"flex flex-col"}>
          <p
            className={`text-2xl leading-9 font-bold ${
              selectedData?.id === data.id ? "text-white" : "text-dark"
            }`}
          >
            {data.title}
          </p>
          <p
            className={`text-base font-light ${
              selectedData?.id === data.id ? "text-white" : "text-gray"
            }`}
          >
            {data.address}
          </p>
        </div>
        {selectedData?.id === data.id ? (
          <IoIosArrowUp
            className={`text-xl ${
              selectedData?.id === data.id ? "text-white" : "text-primary"
            }`}
          />
        ) : (
          <IoIosArrowDown
            className={`text-xl ${
              selectedData?.id === data.id ? "text-white" : "text-primary"
            }`}
          />
        )}
      </div>
      {selectedData?.id === data.id ? (
        <div className={"flex flex-col w-full bg-white px-8 py-6 gap-2"}>
          <p className={"text-dark font-bold text-xl leading-4"}>
            {selectedData?.contact?.name}
          </p>
          <p className={"text-dark text-base font-normal"}>
            {selectedData?.contact?.job}
          </p>
          <p className={"text-primary text-base font-normal"}>
            {selectedData?.contact?.email}
          </p>
          <p className={"text-dark text-base font-normal"}>
            {selectedData?.contact?.phone}
          </p>
          <div className={"w-full h-px bg-grayLight"} />
          <div className={"flex justify-between items-center"}>
            <div
              className={
                "flex justify-center items-center gap-2 cursor-pointer"
              }
              onClick={() => changeAction("edit")}
            >
              <MdOutlineModeEdit className={"text-gray text-xl"} />
              <p className={"text-gray text-xs leading-3 font-normal"}>EDIT</p>
            </div>
            <div
              className={
                "flex justify-center items-center gap-2 cursor-pointer"
              }
              onClick={onDelete}
            >
              <PiTrash className={"text-red text-xl"} />
              <p className={"text-red text-xs leading-3 font-normal"}>DELETE</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LocationCard;
