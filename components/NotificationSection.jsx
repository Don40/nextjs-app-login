import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getEventTypes } from "@/services/EventService";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { notifyMe } from "@/services/PublicService";

const NotificationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eventTypeArr, setEventTypeArr] = useState([]);
  const [selected, setSelected] = useState({ id: 0, type: "Select" });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    eventType: Yup.object().required("Event is required"),
  });

  const formik = useFormik({
    initialValues: {
      eventType: { id: 0, type: "Select" }, // Matches the structure of the event object
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("values:",values)
      try {
        const response = await notifyMe(values);
        console.log("notification: ",response.data);
        setIsSubmitted(true);
        resetForm();
      } catch (error) {
        console.error("Error sending data to backend:", error);
      }
      setSubmitting(false);
    },
  });

  useEffect(() => {
    getEventTypes().then((res) => setEventTypeArr(res.data));
  }, []);

  const handleSelect = (eventType) => {
    console.log("eventType:", eventType)
    setSelected(eventType);
    formik.setFieldValue('eventType', eventType); // Update formik's event value
  };

  return (
    <section className="py-12 bg-gray-200 text-black">
      <div className="container mx-auto text-center my-8">
        <h2 className="text-3xl font-bold mb-4 font-raleway">
          Get Notified of Events
        </h2>
      </div>

      <div className="container mx-auto text-center my-8">
        <p className="max-w-9xl text-lg px-8 font-montserrat text-center">
          Enter your email below so we can notify you of upcoming events.
        </p>
      </div>

      <div className="container mx-auto my-8 flex justify-center">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-10/12 md:w-4/5 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className={`appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                id="grid-email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="w-10/12 md:w-1/2 px-3">
              <Listbox value={selected} onChange={handleSelect}>
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  EVENT
                </Label>
                <div className="relative mt-2">
                  <ListboxButton name="event"  className={`relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6  ${formik.touched.eventType && formik.errors.eventType ? 'border-red-500' : ''}`}>
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.type}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      /> 
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                  
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    {eventTypeArr.map((eventType) => (
                      <ListboxOption
                    
                        key={eventType.id}
                        value={eventType}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                            {eventType.type}
                          </span>
                        </div>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                          <CheckIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
              {/* {formik.touched.event && formik.errors.event && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.event.type || formik.errors.event.id}
                </p>
              )} */}
            </div>
          </div>
          <div className="mt-6  flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-violet-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            >
              Notify me of Events
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NotificationSection;
