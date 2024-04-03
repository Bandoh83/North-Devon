"use client";
import Card from "@/components/Card";
import React, { useEffect } from "react";
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
import { FaChevronLeft, FaLinkedinIn } from "react-icons/fa";
import KumasiMapSearch from "../../components/KumasiMapSearch";
import AccraMapSearch from "../../components/AccraMapSearch";
import { IoMdClock, IoMdPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Textarea from "@/components/forms/Textarea";
import Checkbox from "@/components/forms/Checkbox";
import { IconButton } from "@/components/Button/IconButton";
import { FacebookIcon } from "@/icons";
import { Image, Link } from "@nextui-org/react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";


const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <>
      <div className="w-screen ">
        <section className="h-[527px] overflow-hidden relative bg-[url('/images/new-contact-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90 ">
          <p className="md:text-9xl text-7xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
            Contact Us
          </p>
        </section>

        {/* Code goes below here */}
        <div className="flex w-screen my-8 md:hidden flex-col items-start justify-center  p-4">
          <div className="flex w-[60%] mx-auto flex-col justify-center gap-5">
            <div className="flex items-center justify-start gap-4">
              <IoMdPhonePortrait className="w-10 h-10 text-primary" />
              <p className="font-bold">+233 530 610 013</p>
            </div>
            <div className="flex mb-0 flex-row items-center justify-start gap-4">
              <IoLocationOutline className="w-10 h-10 text-primary" />
              <p className="font-bold">Kumasi Office</p>
            </div>
            <div className="flex pt-0 -mt-4 flex-col items-start justify-start gap-1 pl-14">
              <small>The Lancaster</small>
              <small>Kumasi City</small>
              <small>The Former Golden Tulip Hotel</small>
            </div>
            <div className="flex pt-0  flex-col items-start justify-start gap-1 pl-14">
            <p className="font-bold">Accra Office</p>
              <small> City Galleria, 4th Floor</small>
              <small>Opposite the Accra Mall</small>
              <small>Off Spintex Road</small>
            </div>
            

            <div className="flex mb-0 flex-row items-center justify-start gap-4">
              <IoMdClock className="w-10 h-10 text-primary" />
              <p className="font-bold">Business Hours</p>
            </div>
            <div className="flex pt-0 -mt-4 flex-col items-start justify-start gap-1 pl-14">
              <small>Mondays - Fridays</small>
              <small>9:30am - 5:30pm</small>
             
            </div>
          </div>
        </div>

        <div className="flex w-[90%] mx-auto bg-gray rounded-lg  my-8 md:hidden flex-col items-start gap-4 justify-center  p-6">
          <Heading>Send us a message</Heading>
          <form className="w-full">
            <div className="space-y-4">
              <Input label="Your Name" />
              <Input label="Your Email" type="email" />
              <div className="w-full">
                <Textarea minRows={10} placeholder="Type in your message" />
              </div>

              <Checkbox color="primary">I am not a robot</Checkbox>

              <Button
                size="lg"
                fullWidth
                className="p-4"
                color="primary"
                rounded
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <section className="hidden md:flex w-full h-[730px] pt-[100px]  flex-row items-start justify-center gap-5">
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
              <p className="">Mondays - Friday: 9:30am - 5:30pm</p>
              
            </div>
          </Card>
          <KumasiMapSearch />
        </section>

        <section className="w-full h-[550px] pt-[100px] hidden md:flex flex-row items-start justify-center gap-5 bg-[url('/images/sunset-orange-airplane-airplane-wing-wallpaper-preview.jpg')] bg-no-repeat bg-center bg-cover opacity-90 ">
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
              <p className="">Mondays - Friday: 9:30am - 5:30pm</p>
              
            </div>
          </Card>
        </section>

        <div className="bg-gray w-full h-[650px] p-10 hidden md:flex justify-center mt-[200px]">
          <Card
            shadow
            rounded
            padded={false}
            className="p-10 m-6 full h-[500px] flex flex-row items-center justify-start gap-12 cursor-pointer"
          >
            <Card className="bg-primary w-1/2 text-white h-[290px] pt-8 flex flex-col">
            <Heading variant="h6">
              Follow us on our social media platforms

            </Heading>

            <IconButton rounded variant="link" color="secondary">
              <Link
                isExternal
                href="https://www.facebook.com/profile.php?id=61554625350987&mibextid=LQQJ4d"
              >
                <FacebookIcon className="w-5 h-5" />
              </Link>
            </IconButton>

            <div>
              <a href="https://www.facebook.com/profile.php?id=61554625350987&mibextid=LQQJ4d" className="flex items-center gap-4">
                <BiLogoFacebookCircle size={35} />
                <span>Facebook</span>
              </a>

              <a href="https://www.instagram.com/p/C1B_jKvrmnK/?igshid=ZDE1MWVjZGVmZQ==" className="flex items-center gap-4">
                <AiFillInstagram size={35} />
                <span>Instagram</span>
              </a>

              <a href="https://www.linkedin.com/company/northdevon/" className="flex items-center gap-4">
                <FaLinkedinIn size={35} />
                <span>LinkedIn</span>
              </a>

              <a href="https://youtube.com/@North_Devon?si=hACpn82PBwxHVpbo" className="flex items-center gap-4">
                <AiFillYoutube size={35} />
                <span>YouTube</span>
              </a>
            </div>
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
                  name: Yup.string().trim().required("Name required"),
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

        <div className="hidden md:flex bg-gray w-full h-[800px] pt-10 pb-16 px-28 space-y-8">
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
                    You can take it as many times as you want. There is no limit. There is
                    no time limit to wait between tests either.
                  </p>
                ),
                label: (
                  <div className="w-full flex flex-row items-start justify-start gap-4">
                    <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                    <Heading variant="h4">
                      How many times can I take my IELTS test?
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
                    NCSBN has conducted multi-year studies to support the development of Next Generation NCLEX
                    (NGN). Research studies analyzed items and documented the validity of
                    these items to measure clinical judgment. Validity evidence included 1)
                    the extent to which clinical judgment can be measured, 2) numerous
                    item writing panels comprised of nurse faculty to write items aligned
                    with the NCSBN Clinical Judgment Measurement Model (NCJMM), 3) nursing
                    experts (nursing faculty, clinical educators, clinicians and numerous committees made up of experienced nursing experts) reviewed items to ensure the measurement and content was accurate and correctly classified document the validity of the items to measure clinical judgment, and 4) ensuring that items are statistically sound and reflect contemporary practice.
                  </p>
                ),
                label: (
                  <div className="w-full flex flex-row items-start justify-start gap-4">
                    <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                    <Heading variant="h4">
                      What standards does NCSBN use when developing a new test?
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
                    Each nursing regulatory body (NRB) has its own eligibility
                    requirements to take the NCLEX. NCSBN does not maintain a list
                    of requirements for each NRB. Contact the NRB where you are
                    seeking licensure/registration for their requirements
                    (applicable only to NRBs of the U.S., Canada and Australia).
                  </p>
                ),
                label: (
                  <div className="w-full flex flex-row items-start justify-start gap-4">
                    <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                    <Heading variant="h4">
                      What are the eligibility requirements for taking the NCLEX?
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
                    Your results will be posted to you 13-days after you have taken your test.
                    It is possible to get your results by sms or online at some test centers.
                    Contact them to find out. However, these are times when results are
                    delayed longer than 13 days.
                  </p>
                ),
                label: (
                  <div className="w-full flex flex-row items-start justify-start gap-4">
                    <HiOutlineQuestionMarkCircle className="w-8 h-8" />{" "}
                    <Heading variant="h4">
                      how long does it take for my test results to arrive?
                    </Heading>
                  </div>
                ),
              },
            ]}
            variant="pills"
          />
        </div>
        </div>

      </>
    );
  };
  
  export default ContactUs;