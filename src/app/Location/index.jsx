import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import LocationForm from "@/components/Form";
import Alert from "@/components/Alert";
import LocationCard from "@/components/LocationCard";

const initData = [
  {
    id: 1,
    title: "Headquarters",
    address: "3763 W. Dallas St.",
    contact: {
      name: "Hellena John",
      job: "Software Tester",
      email: "georgia.young@example.com",
      phone: "7878787878",
    },
  },
  {
    id: 2,
    title: "Headquarters",
    address: "3763 W. Dallas St.",
    contact: {
      name: "Hellena John",
      job: "Software Tester",
      email: "georgia.young@example.com",
      phone: "7878787878",
    },
  },
  {
    id: 3,
    title: "Headquarters",
    address: "3763 W. Dallas St.",
    contact: {
      name: "Hellena John",
      job: "Software Tester",
      email: "georgia.young@example.com",
      phone: "7878787878",
    },
  },
];

const Location = () => {
  const [data, setData] = useState([...initData]);
  const [selectedData, setSelectedData] = useState(null);
  const [alert, setAlert] = useState("");
  const [action, setAction] = useState("");

  const clickHandler = (item) => {
    reset();
    if (!selectedData || selectedData?.id !== item.id) {
      setSelectedData(item);
    } else {
      setSelectedData(null);
    }
  };

  useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(""), 3000);
    }
  }, [alert]);

  const deleteHandler = (event) => {
    event.preventDefault();
    setData((prev) => [...prev].filter((item) => item.id !== selectedData?.id));
    setSelectedData(null);
    setAlert("DELETE");
  };

  const onSubmit = (values) => {
    if (action === "add") {
      setData((prev) => [...prev, { ...values }]);
    } else if (action === "edit") {
      setData((prev) =>
        [...prev].map((item) =>
          item.id === values.id ? { ...item, ...values } : { ...item }
        )
      );
    }
    setSelectedData(null);
    setAlert(action === "add" ? "ADD" : "EDIT");
    setAction("");
  };

  const reset = () => {
    setAlert("");
    setAction("");
  };

  return (
    <div className="bg-background w-screen h-screen flex flex-col items-center overflow-scroll">
      {alert ? <Alert type={action} onClose={reset} /> : null}
      <div
        className={
          "w-full max-w-[318px] mt-40 flex flex-col items-center justify-center"
        }
      >
        <p className={"text-primary text-title font-roboto font-light"}>
          Offices
        </p>
        <div className={"flex flex-col gap-6 w-full"}>
          <button
            className={`h-14 bg-primary flex justify-between items-center w-full rounded-lg px-4 mt-12 drop-shadow-3xl ${
              action === "add" ? "hidden" : ""
            }`}
            onClick={() => setAction("add")}
          >
            <p className={"text-base text-grayLight font-normal font-roboto"}>
              Add New Location
            </p>
            <GoPlus className={"text-xl"} />
          </button>
          {action === "add" ? (
            <LocationForm
              action={action}
              data={selectedData}
              onClose={setAction}
              onSubmit={onSubmit}
            />
          ) : null}
          {data.map((item, index) =>
            action === "edit" && selectedData?.id === item.id ? (
              <LocationForm
                action={action}
                data={selectedData}
                onClose={setAction}
                onSubmit={onSubmit}
              />
            ) : (
              <LocationCard
                data={item}
                selectedData={selectedData}
                changeAction={setAction}
                onDelete={deleteHandler}
                onClick={clickHandler}
                key={Math.floor(Math.random() * 100)}
              />
            )
          )}
          <div className={"flex flex-col items-center justify-center gap-2"}>
            <p className={"text-gray text-base font-normal"}>
              This project is for test purpose only.
            </p>
            <p
              className={"text-primary font-normal text-xs leading-3 uppercase"}
            >
              www.dogandponystudios.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
