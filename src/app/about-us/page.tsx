import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { TbScanEye } from "react-icons/tb";
import styles from "../card.module.css";

const AboutUs = () => {
  return (
    <>
    <div className="w-screen">
      <section className="h-[525px] overflow-hidden relative bg-[url('/images/new-about-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90">
        <p className="md:text-9xl text-7xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          About Us
        </p>
      </section>
      {/* Code goes here below here */}

      <section className="grid md:grid-cols-2  h-auto md:h-[900px] px-4  md:px-10 pb-7 pt-20 gap-12 bg-[#F1F5F5] mb-10">
        <div
          className={`images_left grid grid-cols-2 grid-rows-2 gap-4 bg-[#ffffff] rounded-3xl h-3/4 px-2 md:px-5 pt-5 ${styles.card}`}
        >
          <div
            className={`grid grid-cols-2 w-screen md:w-[540px] h-[230px] gap-[2px] md:gap-4 ${styles.card} ${styles.innercard}`}
          >
            <Image
              isZoomed
              isBlurred
              className="md:w-[270px] w-[240px] h-[230px] rounded-2xl"
              src="/images/image01_left.jpg"
              alt={"image01"}
            />
            <Image
              isZoomed
              isBlurred
              className="md:w-[290px] w-[200px] h-[230px]  rounded-2xl"
              src="/images/image02_right.jpg"
              alt={"image02"}
            />
          </div>

          <div className={`col-span-2 row-span-1 mb-2 md:-mb-10  ${styles.innercard}`}>
            <Image
              isZoomed
              // isBlurred
              className="w-full h-full object-cover rounded-2xl"
              src="/images/image03_span_bottom.jpg"
              alt={"image03"}
            />
          </div>
        </div>

        <div className="aboutus_info ">
          <div className="coreValues space-y-4">
            <Heading variant="h5">More About Us</Heading>
            <Heading variant="h2">Our Core Values</Heading>
            <p className="text-secondary-gray pb-9 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
          </div>

          <div className="missionStatement space-y-4">
            <Heading variant="h2">Mission Statement</Heading>
            <p className="text-secondary-gray pb-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
            <p className="text-secondary-gray text-sm md:text-base">
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
          </div>
        </div>
      </section>

      {/* <section className="visionStatement mt-10 bg-secondary w-screen px-4 md:px-10 pb-8 md:bg-[#F1F5F5]"> */}
        <div className="flex flex-row px-4 md:px-14 pt-3 pb-9 items-start  md:items-start justify-between md:justify-start bg-[#ffffff] rounded-2xl">
          <div className="eyeIcon pt-3 md:pt-0">
            <TbScanEye className="w-5 h-5 md:w-10 md:h-10" fill="#E9722B" color="#E9722B" />
          </div>
          <div className="textNinfo mx-5 md:mx-16">
            <Heading variant="h3" className="pb-2 pt-1">
              Vision Statement
            </Heading>
            <p className="pb-9 text-sm md:text-base">
              enestado de desarrollo. Muchas versioneshan evolucion ado a través
              de los añosalgunas veces por accidente, otras veces apropósito
              (por ejemplo insertándole humor y cosas por el estilo). leer.
              Muchos paquetes de autoedicióny editores de páginas web usan el
              Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de
              Lorem Ipsum va a dar por resultado muchos sitios web que usan
              este texto si se encuentran ene stado de
            </p>
            <p className="text-sm md:text-base">
              apropósito (por ejemplo insertándole humor y cosas por el estilo).
              leer. Muchos paquetes de autoedicióny editores de páginas web usan
              el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda
              de Lorem Ipsum va a dar por resultado muchos sitios web que usan
              este texto si se encuentran ene stado de
            </p>
          </div>
          <div className="Null_icon">
            <MdOutlineUnfoldMore className="w-8 h-auto color-[E9722B]" />
          </div>
        </div>
      {/* </section> */}
      </div>
    </>
  );
};

export default AboutUs;
