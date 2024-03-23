"use client";
import Card from "@/components/Card";
import React from "react";
import Heading from "@/components/Heading";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import PhoneInput from "@/components/forms/PhoneInput/index";
import { Formik } from "formik";
import DateInput from "@/components/forms/DateInput";
import * as Yup from "yup";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaChevronLeft} from "react-icons/fa";
import KumasiMapSearch from "../../components/KumasiMapSearch";
import AccraMapSearch from "../../components/AccraMapSearch";

const ContactUs = () => {
  return (
    <>
      <section className="h-[527px] overflow-hidden relative bg-[url('./images/new-contact-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90 ">
        <p className="text-9xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          Contact Us
        </p>
      </section>
      {/* Code goes below here */}
      <section className="w-full h-[730px] pt-[100px] flex flex-row items-start justify-center gap-5">
        <Card className=" h-[310px] w-[450px] bg-primary pt-10 px-14 flex flex-col items-start justify-start gap-10 text-white">
          <div>
            <Heading variant="h2" className="mb-3">
              Kumasi Office
            </Heading>
            <p className="">
              The Lancaster Kumasi City
              <br />
              The Former Golden Tulip Hotel
            </p>
          </div>

          <div className="mt-4">
            <Heading variant="h3" className="mb-3">
              Work Hours
            </Heading>
            <p className="">Mondays - Friday: 8:00am - 5:00pm</p>
            <p className="">Saturdays: 10:00am - 4:00pm</p>
          </div>
        </Card>
        <KumasiMapSearch />
      </section>

      <section className="w-full h-[550px] pt-[100px] flex flex-row items-start justify-center gap-5 bg-[url('/images/sunset-orange-airplane-airplane-wing-wallpaper-preview.jpg')] bg-no-repeat bg-center bg-cover opacity-90 ">
        <AccraMapSearch className="" />
        <Card className=" h-[310px] w-[450px] bg-primary pt-10 px-14 flex flex-col items-start justify-start gap-10 text-white">
          <div>
            <Heading variant="h2" className="mb-3">
              Accra Office
            </Heading>
            <p className="">
              City Galleria, 4th Floor
              <br />
              opposite the Accra Mail off the Sprintex Road
            </p>
          </div>

          <div className="mt-4">
            <Heading variant="h3" className="mb-3">
              Work Hours
            </Heading>
            <p className="">Mondays - Friday: 8:00am - 5:00pm</p>
            <p className="">Saturdays: 10:00am - 4:00pm</p>
          </div>
        </Card>
      </section>

      <div className="bg-gray w-full h-[650px] p-10 flex justify-center mt-[200px]">
        <Card
          shadow
          rounded
          padded={false}
          className="p-10 m-6 full h-[500px] flex flex-row items-center justify-start gap-12 cursor-pointer"
        >
          <Card className="bg-primary w-1/2 text-white h-full pt-8 flex flex-col items-center justify-center gap-5">
            <p className="w-3/4">
              Join our subscription and get instant updates about offers and
              discounts
            </p>
            <Input
              className="bg-white rounded-full w-3/4"
              rounded
              size="lg"
              append={
                <Button className="px-8" rounded size="lg" variant="solid">
                  Join
                </Button>
              }
              placeholder="Enter email here..."
            />
            <p className="text-secondary w-3/4 pl-5">
              Please read Terms and Conditions before subscribing to the news
            </p>
          </Card>
          <div className="w-1/2 h-[420px] flex flex-col items-start justify-start gap-4 p-0">
            <Heading variant="h3" className="text-secondary p-0 m-0">
              Fill forms to book appointment
            </Heading>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "", // can be phone or email
                date: null,
                time: null,
                office: "",
              }}
              enableReinitialize
              validateOnBlur
              validateOnChange={false}
              validationSchema={Yup.object({
                name: Yup.string()
                  .trim()
                  .required("Name required"),
                date: Yup.date().required("Pick date"),
                time: Yup.date().required("Pick time"),
                email: Yup.string()
                  .trim()
                  .email("Invalid email address")
                  .required("Email address required"),
                phone: Yup.string().required("Pnone number required"),
                office: Yup.string().required("Select office"),
              })}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                setFieldError,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <Input
                    required
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="underlined"
                    label="Enter name"
                    error={touched.name ? errors.name : undefined}
                  />
                  <div className="w-full flex flex-row items-start gap-4">
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email ? errors.email : undefined}
                      required
                      label="Enter email"
                      variant="underlined"
                    />
                    {/* <PhoneInput
                    required
                    label="Phone"
                    variant="underlined"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone ? errors.phone : ""}
                  /> */}
                    <PhoneInput
                      variant="underlined"
                      placeholder="Phone Number"
                      name="phone"
                      value={values.phone}
                      onChange={(v) => {
                        setFieldValue("phone", v);
                      }}
                      onBlur={handleBlur}
                      error={touched.phone ? errors.phone : undefined}
                    />
                  </div>
                  <div className="w-full flex flex-row items-start gap-4">
                    <DateInput
                      name="date"
                      value={values.date ?? null}
                      required
                      className="border-b-1"
                      label="Pick Date and Time"
                      variant="datetime"
                      onChange={(val) => {
                        setFieldValue("date", val);
                      }}
                      onBlur={handleBlur}
                      error={touched.date ? errors.date : undefined}
                      rangeVariant="start"
                    />
                    <DateInput
                      name="time"
                      value={values.time ?? null}
                      required
                      className="border-b-1"
                      label="Pick Time"
                      variant="timeOnly"
                      onChange={(val) => {
                        setFieldValue("time", val);
                      }}
                      onBlur={handleBlur}
                      error={touched.time ? errors.time : undefined}
                      rangeVariant="start"
                    />
                  </div>
                  <Select
                    // required
                    name="office"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="underlined"
                    label="Select our office"
                    options={[{ id: "1", label: "SpringFiels" }]}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    size="lg"
                    className="px-8 mt-4"
                    rounded
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </Card>
      </div>

      <div className="bg-gray w-full h-[800px] pt-10 pb-16 px-28 space-y-8">
        <Heading variant="h1">Frequently Asked Questions</Heading>
        <Accordion
          // accordionItemsStyle={}

          className="h-[100px] pb-10"
          items={[
            {
              id: "1",
              indicator: {
                close: <FaChevronLeft color="#000000" fill="#000000" />,
                open: <FaChevronLeft color="#000000" fill="#000000" />,
              },
              content: (
                <p>
                  enestado de desarrollo. Muchas versioneshan evolucion ado a
                  través de los añosalgunas veces por accidente, otras veces
                  apropósito (por ejemplo insertándole humor y cosas por el
                  estilo). leer. Muc hos paquetes de autoedicióny editores de
                  páginas web usan el Lorem Ipsum como su texto por defecto, y
                  al hacer una búsqueda de Lorem Ipsum va a dar por resultado
                  muchos sitios web que usan este texto si se encuentran ene
                  stado de apropósito (por ejemplo insertándole humor y cosas
                  por el estilo). leer. Muc hos paquetes de autoedicióny
                  editores de páginas web usan el Lorem Ipsum como su texto por
                  defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por
                  resultado muchos sitios web que usan este texto si se
                  encuentran ene stado de
                </p>
              ),
              label: (
                <div className="w-full flex flex-row items-start justify-start gap-4">
                  <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                  <Heading variant="h3">
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "2",
              indicator: {
                close: <FaChevronLeft color="#000000" fill="#000000" />,
                open: <FaChevronLeft color="#000000" fill="#000000" />,
              },
              content: (
                <p>
                  enestado de desarrollo. Muchas versioneshan evolucion ado a
                  través de los añosalgunas veces por accidente, otras veces
                  apropósito (por ejemplo insertándole humor y cosas por el
                  estilo). leer. Muc hos paquetes de autoedicióny editores de
                  páginas web usan el Lorem Ipsum como su texto por defecto, y
                  al hacer una búsqueda de Lorem Ipsum va a dar por resultado
                  muchos sitios web que usan este texto si se encuentran ene
                  stado de apropósito (por ejemplo insertándole humor y cosas
                  por el estilo). leer. Muc hos paquetes de autoedicióny
                  editores de páginas web usan el Lorem Ipsum como su texto por
                  defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por
                  resultado muchos sitios web que usan este texto si se
                  encuentran ene stado de
                </p>
              ),
              label: (
                <div className="w-full flex flex-row items-start justify-start gap-4">
                  <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                  <Heading variant="h3">
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "3",
              indicator: {
                close: <FaChevronLeft color="#000000" fill="#000000" />,
                open: <FaChevronLeft color="#000000" fill="#000000" />,
              },
              content: (
                <p>
                  enestado de desarrollo. Muchas versioneshan evolucion ado a
                  través de los añosalgunas veces por accidente, otras veces
                  apropósito (por ejemplo insertándole humor y cosas por el
                  estilo). leer. Muc hos paquetes de autoedicióny editores de
                  páginas web usan el Lorem Ipsum como su texto por defecto, y
                  al hacer una búsqueda de Lorem Ipsum va a dar por resultado
                  muchos sitios web que usan este texto si se encuentran ene
                  stado de apropósito (por ejemplo insertándole humor y cosas
                  por el estilo). leer. Muc hos paquetes de autoedicióny
                  editores de páginas web usan el Lorem Ipsum como su texto por
                  defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por
                  resultado muchos sitios web que usan este texto si se
                  encuentran ene stado de
                </p>
              ),
              label: (
                <div className="w-full flex flex-row items-start justify-start gap-4">
                  <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                  <Heading variant="h3">
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "4",
              indicator: {
                close: <FaChevronLeft color="#000000" fill="#000000" />,
                open: <FaChevronLeft color="#000000" fill="#000000" />,
              },
              content: (
                <p>
                    enestado de desarrollo. Muchas versioneshan evolucion ado a
                  través de los añosalgunas veces por accidente, otras veces
                  apropósito (por ejemplo insertándole humor y cosas por el
                  estilo). leer. Muc hos paquetes de autoedicióny editores de
                  páginas web usan el Lorem Ipsum como su texto por defecto, y
                  al hacer una búsqueda de Lorem Ipsum va a dar por resultado
                  muchos sitios web que usan este texto si se encuentran ene
                  stado de apropósito (por ejemplo insertándole humor y cosas
                  por el estilo). leer. Muc hos paquetes de autoedicióny
                  editores de páginas web usan el Lorem Ipsum como su texto por
                  defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por
                  resultado muchos sitios web que usan este texto si se
                  encuentran ene stado de
                </p>
              ),
              label: (
                <div className="w-full flex flex-row items-start justify-start gap-4">
                  <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                  <Heading variant="h3">
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
          ]}
          variant="pills"
        />
      </div>

      {/* <section className="p-32 bg-gray">
        <Heading className="ml-10 p-10" variant="h1">
          Frequently Asked Questions
        </Heading>

        <Accordion
          items={[
            {
              id: "1",

              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2">
                    {" "}
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2">
                    {" "}
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2">
                    {" "}
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2">
                    {" "}
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2">
                    {" "}
                    Sample of a frequently asked question
                  </Heading>
                </div>
              ),
            },
          ]}
          variant="pills"
          className=""
        />
      </section> */}
    </>
  );
};

export default ContactUs;
