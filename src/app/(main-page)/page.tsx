"use client";

import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { CircularProgress, Image } from "@nextui-org/react";
import Button from "@/components/Button/index";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Input from "@/components/forms/Input";
import PhoneInput from "@/components/forms/PhoneInput/index";
import DateInput from "@/components/forms/DateInput";
import Select from "@/components/forms/Select";
import { Formik } from "formik";
import * as Yup from "yup";
import HoverVideoPlayer from "react-hover-video-player";
import { useState } from "react";
import Chatbot from "@/components/Chatbot";
import styles from "./card.module.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const Home = () => {
  const [mapInfo, setMapInfo] = useState<{
    lat: number;
    lng: number;
    locationAddress: string;
  }>({} as { lat: number; lng: number; locationAddress: string });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false }),
  ]);

  return (
    <div>
    <>
      <section className="h-[527px] overflow-hidden relative bg-[url('/images/doctors.jpg')] bg-no-repeat bg-center bg-cover opacity-90 "></section>

      <div className="w-[94%] mx-auto my-8 px-10">
        <div className="flex items-center justify-center px-6 mx-auto">
          <div className="flex-grow border-b border-secondary"></div>
          <div className="px-4  mx-auto">
            Companies we have guided and supported our clients in
          </div>
          <div className="flex-grow border-b border-secondary"></div>
        </div>
        <div
          className="embla w-full overflow-x-hidden p-4 pl-0 "
          ref={emblaRef}
        >
          <div className="embla__container">
            <div className="embla__slide ">
              <Image src="/images/nhs.jpg" alt="nhs" className="w-[120px] h-[80px]" />
            </div>
            <div className="embla__slide">
              <Image src="/images/bc.jpg" alt="british council" className="w-[120px] h-[80px]" />
            </div>
            <div className="embla__slide">
              <Image src="/images/amazon.jpg" alt="amazon" className="w-[120px] h-[80px]" />
            </div>
            <div className="embla__slide">
              <Image
                src="/images/barclays.jpg"
                alt="barclays"
                className="w-[120px] h-[80px]"
              />
            </div>
            <div className="embla__slide">
              <Image alt="meta" src="/images/meta.jpg" className="w-[120px] h-[80px]" />
            </div>
            <div className="embla__slide">
              <Image alt="netflix" src="/images/netflix.jpg" className="w-[120px] h-[80px]" />
            </div>
            <div className="embla__slide">
              <Image alt="jpm" src="/images/jpm.jpg" className="w-[120px] h-[80px]" />
            </div>
            <div className="embla__slide">
              <Image alt="d/o.e" src="/images/doe.jpg" className="w-[200px] h-[100px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray w-full h-[650px] p-8 flex flex-row items-center justify-start gap-8">
        <Card
          shadow
          rounded
          padded={false}
          className="p-4 shadow-lg w-7/12 h-[550px] flex flex-row items-center justify-start gap-4 cursor-pointer"
        >
          <div className="w-1/2 h-full p-0 pb-2 flex flex-col items-start justify-start gap-2">
            <Image isBurred isZoomed src="/images/family.jpg" alt="family" />
            <Image isBurred isZoomed src="/images/teachers.jpg" alt="teachers" />
          </div>
          <div className="w-1/2 flex flex-col h-full p-0">
            <Image
              isBurred
              isZoomed
              src="/images/old.jpg"
              className="w-full h-[400px]"
              alt="old"
            />

            <Image
              src="/images/plane-path.png"
              alt="plane"
              className="mt-[-80px] p-0 w-[400px] h-[300px]"
            />
            {/* <TbPlaneTilt fill="#E9722B" color="#E9722B" className="mt-7 h-10 w-10 flex justify-center"/> */}
          </div>
        </Card>
        <div className="w-4/12 h-[550px] flex flex-col items-start justify-start gap-4">
          <p className="font-semibold">About Us</p>
          <Heading variant="h3">What is Our Mission?</Heading>
          <p className="text-secondary-gray text-sm">
            Our mission is to empower individuals worldwide by facilitating
            access to exceptional educational opportunities, career pathways,
            and healthcare services. Our commitment extends to guiding aspiring
            students towards their academic goals,...
          </p>
          <p className="text-secondary-gray text-sm mt-4">
            Our vision is to be the premier global recruitment agency, renowned
            for our commitment to excellence in study abroad programs,
            international and local recruitment, healthcare staffing, and
            standardized test preparation. We aspire to be the catalysts of
            transformational journeys,...
          </p>

          <Button size="lg" className="px-8 mt-5" rounded>
            Read more
          </Button>
        </div>
      </div>
      <div className="w-full overflow-hidden p-8 flex flex-row items-center justify-start gap-8">
        <div className="w-5/12 pl-8 h-[450px] flex flex-col items-start justify-start gap-4">
          <p className="font-semibold">Our Services</p>
          <Heading variant="h3">How we work</Heading>
          <p className="text-secondary-gray text-sm">
            We match the right candidates with the right job opportunities,
            providing value to both clients and candidates throughout the
            recruitment process.
          </p>

          <div className="flex flex-row items-center justify-start gap-3">
            <IoMdCheckmarkCircleOutline
              fill="#E9722B"
              color="#E9722B"
              className="w-8 h-8"
            />
            <p className="font-semibold">600 Offers</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <IoMdCheckmarkCircleOutline
              fill="#E9722B"
              color="#E9722B"
              className="w-8 h-8"
            />
            <p className="font-semibold">5+ Years Experience</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <IoMdCheckmarkCircleOutline
              fill="#E9722B"
              color="#E9722B"
              className="w-8 h-8"
            />
            <p className="font-semibold">20+ Team Members</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <IoMdCheckmarkCircleOutline
              fill="#E9722B"
              color="#E9722B"
              className="w-8 h-8"
            />
            <p className="font-semibold">400+ Satisfied Customers</p>
          </div>

          <Button size="lg" className="px-8" rounded>
            Get in touch
          </Button>
        </div>
        <Card
          shadow={false}
          rounded
          padded={false}
          className={`p-4 mt-8 mb-8 w-7/12 h-[500px] ${styles.card} flex flex-col items-center justify-start gap-4 cursor-pointer`}
        >
          <div
            className={`w-[550px] h-full p-0 ${styles.card} ${styles.innercard}`}
          >
            <Image
              isZoomed
              alt="teachers"
              src="/images/teaching.jpg"
              className={`w-[550px]`}
            />
            {/* <TbPlaneTilt fill="#E9722B" color="#E9722B" className="mt-7 h-10 w-10 flex justify-center"/> */}
          </div>
          <div
            className={`w-[470px] ${styles.innercard}  mt-[-80px] h-full p-0 pb-2 flex flex-row items-start justify-start gap-2 z-10`}
          >
            <Image
              isZoomed
              src="/images/industry.jpeg"
              className={`w-[500px] h-[150px]`}
              alt="industry"
            />
            <Image
              isZoomed
              src="/images/class.jpg"
              alt="class"
              className={`w-[500px] h-[150px]`}
            />
          </div>
        </Card>
      </div>
      <div className="w-full flex flex-row gap-0">
        <div className="w-3/4 h-[600px] overflow-hidden pl-10 py-6 flex flex-col items-center my-auto justify-center gap-8 bg-[url('/images/sunset.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="w-full flex flex-row items-center justify-between mt-20">
            <p className="relative w-5/12 text-white text-left text-2xl pl-10">
              The Services we provide include the following:
            </p>
            <div className="flex flex-row items-center justify-start gap-4 absolute left-[480px] z-10">
              <Card
                shadow
                padded={false}
                className="bg-white p-4 h-[200px] w-[220px] flex items-center justify-center"
              >
                <p className="w-1/2">International Recruitment </p>
              </Card>
              <Card
                shadow
                padded={false}
                className="bg-white p-4 h-[200px] w-[220px] flex items-center justify-center"
              >
                <p className="w-1/2"> ND Healthcare</p>
              </Card>
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-start gap-5 pt-16 pl-10">
            <Card
              shadow
              padded={false}
              className="bg-white p-4 h-[200px] w-[220px] flex items-center justify-center"
            >
              <p className="w-1/2">Local Recruitment</p>
            </Card>
            <Card
              shadow
              padded={false}
              className="bg-white p-4 h-[200px] w- [220px] flex items-center justify-center"
            >
              <p className="w-1/2">Study Abroad</p>
            </Card>
            <Card
              shadow
              padded={false}
              className="bg-primary p-4 h-[200px] flex items-center justify-center"
            >
              <p className="w-1/2 text-white">
                Standardized test (OET, GMAT, GRE, TOFEL, IELT)
              </p>
            </Card>
          </div>
        </div>
        <div className="w-2/5 h-[500px] my-auto z-0">
          <Image src="/images/plane.jpeg" className="h-[500px] rounded-none"  alt="plane"/>
        </div>
      </div>
      <div className="mt-0 w-full h-[800px] p-8 flex flex-row items-center justify-start gap-8">
        <Card
          shadow
          rounded
          padded={false}
          className="pl-12 pt-0 mt-0 w-7/12  flex flex-col items-start justify-start gap-4 cursor-pointer"
        >
          <Heading variant="h3" className="text-left">
            Vacancies and Events
          </Heading>

          <Image
            isBurred
            isZoomed
            src="/images/book.jpg"
            className="h-[420px] w-[550px]"
            alt="books"
          />
          <div className="flex flex-col items-start justify-start gap-4 mx-8 mt-4">
            <Heading variant="h6">Lorem ipsum dolor sit amet</Heading>
            <p className="text-secondary-gray text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <Button size="lg" className="px-8" rounded>
              Read more
            </Button>
          </div>
        </Card>
        <div className="w-4/12 h-[600px]  flex flex-col items-start justify-between pt-8 ">
          <Card
            shadow
            padded
            className="flex flex-col items-start justify-start gap-5"
          >
            <Heading variant="h6">Lorem ipsum dolor sit amet</Heading>
            <p className="text-secondary-gray text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <Button size="lg" className="px-8" rounded>
              Read more
            </Button>
          </Card>
          <Card
            shadow
            padded
            className="flex flex-col items-start justify-start gap-5"
          >
            <Heading variant="h6">Lorem ipsum dolor sit amet</Heading>
            <p className="text-secondary-gray text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <Button size="lg" className="px-8" rounded>
              Read more
            </Button>
          </Card>
        </div>
      </div>

      <div className="mx-auto w-2/3">
        {/* <Video  autoPlay={false} accentColor="#E9722B" src={northVideo}/> */}
        <HoverVideoPlayer
          videoSrc="/north-video.mp4"
          preload="metadata"
          controls
          // Disable both the download and fullscreen buttons
          controlsList="nodownload nofullscreen"
          className="w-full mx-auto h-full hover: scale-110"
          pausedOverlay={
            <div className="w-full h-full bg-secondary opacity-50 flex flex-col items-center justify-center gap-4"></div>
          }
          loadingOverlay={
            <div className="w-full h-full bg-secondary opacity-50 flex flex-col items-center justify-center gap-4">
              <CircularProgress className="w-14 h-14" />
            </div>
          }
        />
      </div>

      <div className="bg-gray w-full h-[650px] p-10 flex justify-center mt-4">
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

                    {/* <Input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone ? errors.phone : undefined}
                      required
                      label="Phone"
                      variant="underlined"
                    /> */}
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
      {/* <MapSearch /> */}
      <Chatbot />
    </>
    </div>
  );
};

export default Home;
