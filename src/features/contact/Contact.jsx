import { useForm } from "react-hook-form";
import ContactSocials from "./ContactSocials";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      textmessage: "",
    },
  });

  const formData = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const sendEmail = () => {
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formData.current,
        `${import.meta.env.VITE_EMAILJS_KEY}`,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    reset();
    alert("Mail Sent😁.Thankyou for Contacting.");
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Manav Shete | Contact</title>
      </Helmet>
      <div className="flex w-full flex-col gap-x-8 gap-y-8 bg-mainBg px-8 pt-5 xl:flex-row xl:divide-x-2 xl:divide-accentColor">
        <div className="xl:w-1/2 ">
          <ContactSocials />
        </div>
        <div className="flex flex-col xl:w-1/2  xl:pl-10">
          <p className="text-3xl text-textColor">Or Fill Out This Form</p>
          <form
            ref={formData}
            className="space-y-4 pt-5 text-textColor"
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="flex flex-col  ">
              <label
                className="text-base font-semibold  md:text-lg"
                htmlFor="name"
              >
                NAME
              </label>
              <input
                className="input "
                name="name"
                type="text"
                id="name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <p className="error text-sm text-red-600">
                {errors.name?.message}{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <p className="error text-sm text-red-600">
                {errors.email?.message}{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="subject"
              >
                SUBJECT
              </label>
              <input
                className="input"
                type="text"
                name="subject"
                id="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Subject is required",
                  },
                })}
              />
              <p className="error text-sm text-red-600">
                {errors.subject?.message}{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="textmessage"
              >
                MESSAGE
              </label>
              <textarea
                className="w-full  bg-articleBg p-2  text-xl focus:border-accentColor focus:outline-none focus:ring-1 focus:ring-accentColor"
                id="textmessage"
                name="textmessage"
                cols="30"
                rows="6"
                {...register("textmessage", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                  validate: {
                    isLessThanfiveChar: (fieldValue) => {
                      return (
                        fieldValue.length > 4 ||
                        "Should be of minimum 5 characters"
                      );
                    },
                  },
                })}
              ></textarea>
              <p className="error text-sm text-red-600">
                {errors.textmessage?.message}{" "}
              </p>
            </div>
            <button
              type="submit"
              className=" bg-accentColor px-6 py-1 text-lg font-medium text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Contact;
