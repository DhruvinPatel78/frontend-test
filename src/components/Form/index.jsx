import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const LocationForm = ({ action, data, onClose, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field cannot be empty"),
    name: Yup.string().required("This field cannot be empty"),
    title: Yup.string().required("This field cannot be empty"),
    job: Yup.string().required("This field cannot be empty"),
    phone: Yup.string().required("This field cannot be empty"),
    address: Yup.string().required("This field cannot be empty"),
  });

  const formik = useFormik({
    initialValues: {
      id: data?.id || Math.floor(Math.random() * 1000),
      title: data?.title || "",
      address: data?.address || "",
      name: data?.contact?.name || "",
      job: data?.contact?.job || "",
      email: data?.contact?.email || "",
      phone: data?.contact?.phone || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit({
        id: values.id,
        title: values.title,
        address: values.address,
        contact: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          job: values.job,
        },
      });
    },
  });

  const { handleSubmit, values, errors, handleChange, touched, isValid } =
    formik;

  console.log("Error =>", errors, values);

  return (
    <div
      className={`rounded-lg flex flex-col w-full bg-white cursor-default mt-12`}
    >
      <div className={"flex justify-between items-center px-6 py-4"}>
        <p className={"text-dark text-base font-bold"}>
          {action === "add" ? "New" : "Edit"} Location
        </p>
        <CgClose
          className={"text-gray text-2xl cursor-pointer"}
          onClick={() => onClose("")}
        />
      </div>
      <form
        className={"flex flex-col justify-between items-center p-6 gap-6"}
        onSubmit={handleSubmit}
        autoComplete={"off"}
      >
        <div className={"flex flex-col w-full"}>
          <label htmlFor="title" className={"text-base text-dark font-normal"}>
            Title *
          </label>
          <input
            className={`rounded border border-solid  h-10 text-dark p-4 ${
              touched.title && errors.title ? "border-red" : "border-dark"
            } outline-none focus:border-primary`}
            id="title"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
          <p className={"text-red text-sm font-medium"}>
            {touched.title && errors.title ? errors.title : ""}
          </p>
        </div>
        <div className={"flex flex-col w-full"}>
          <label
            htmlFor="address"
            className={"text-base text-dark font-normal"}
          >
            Enter the address *
          </label>
          <input
            className={
              "rounded border border-solid border-dark h-10 text-dark p-4 outline-none focus:border-primary"
            }
            id="address"
            name="address"
            onChange={handleChange}
            value={values.address}
          />
          <p className={"text-red text-sm font-medium"}>
            {touched.address && errors.address ? errors.address : ""}
          </p>
        </div>
        <div className={"flex flex-col w-full gap-4"}>
          <label
            htmlFor="label"
            className={"text-xs leading-3 text-primary font-normal"}
          >
            CONTACT INFORMATION
          </label>
          <div className={"h-px bg-grayLight w-full"} />
        </div>
        <div className={"flex flex-col w-full"}>
          <label htmlFor="name" className={"text-base text-dark font-normal"}>
            Full Name *
          </label>
          <input
            className={
              "rounded border border-solid border-dark h-10 text-dark p-4 outline-none focus:border-primary"
            }
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          <p className={"text-red text-sm font-medium"}>
            {touched.name && errors.name ? errors.name : ""}
          </p>
        </div>
        <div className={"flex flex-col w-full"}>
          <label htmlFor="job" className={"text-base text-dark font-normal"}>
            Job Position *
          </label>
          <input
            className={
              "rounded border border-solid border-dark h-10 text-dark p-4 outline-none focus:border-primary"
            }
            id="job"
            name="job"
            onChange={handleChange}
            value={values.job}
          />
          <p className={"text-red text-sm font-medium"}>
            {touched.job && errors.job ? errors.job : ""}
          </p>
        </div>
        <div className={"flex flex-col w-full"}>
          <label htmlFor="email" className={"text-base text-dark font-normal"}>
            Email Address *
          </label>
          <input
            className={
              "rounded border border-solid border-dark h-10 text-dark p-4 outline-none focus:border-primary"
            }
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <p className={"text-red text-sm font-medium"}>
            {touched.email && errors.email ? errors.email : ""}
          </p>
        </div>
        <div className={"flex flex-col w-full"}>
          <label htmlFor="phone" className={"text-base text-dark font-normal"}>
            Phone *
          </label>
          <input
            className={
              "rounded border border-solid border-dark h-10 text-dark p-4 outline-none focus:border-primary"
            }
            id="phone"
            name="phone"
            onChange={handleChange}
            value={values.phone}
          />
          <p className={"text-red text-sm font-medium"}>
            {touched.phone && errors.phone ? errors.phone : ""}
          </p>
        </div>
        <button
          type="submit"
          className={`h-10 rounded w-20 self-start text-white ${
            isValid ? "bg-primary" : "bg-gray"
          }`}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
