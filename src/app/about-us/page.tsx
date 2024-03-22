import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { TbScanEye } from "react-icons/tb";
import styles from "../card.module.css";

const AboutUs = () => {
  return (
    <>
      <section className="h-[525px] overflow-hidden relative bg-[url('/images/new-about-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90">
        <p className="text-9xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          About Us
        </p>
      </section>
      {/* Code goes here below here */}

      <section className="grid grid-cols-2 h-[900px]  px-10 pt-20 gap-12 bg-[#F1F5F5]">
        <div
          className={`images_left grid grid-cols-2 grid-rows-2 gap-4 bg-[#ffffff] rounded-3xl h-3/4 px-5 pt-5 ${styles.card}`}
        >
          <div
            className={`grid grid-cols-2 w-[540px] h-[230px] gap-4 ${styles.card} ${styles.innercard}`}
          >
            <Image
              isZoomed
              isBlurred
              className="w-[270px] h-[230px] rounded-2xl"
              src="/images/image01_left.jpg"
              alt={"image01"}
            />
            <Image
              isZoomed
              isBlurred
              className="w-[290px] h-[230px]  rounded-2xl"
              src="/images/image02_right.jpg"
              alt={"image02"}
            />
          </div>

          <div className={`col-span-2 row-span-1 -mb-10  ${styles.innercard}`}>
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
            <p className="text-secondary-gray pb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
          </div>

          <div className="missionStatement space-y-4">
            <Heading variant="h2">Mission Statement</Heading>
            <p className="text-secondary-gray pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
            <p className="text-secondary-gray">
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
          </div>
        </div>
      </section>

      <section className="visionStatement px-10 pb-8 bg-[#F1F5F5]">
        <div className="visionContainer flex flex-row px-14 py-14 items-start justify-start bg-[#ffffff] rounded-2xl">
          <div className="eyeIcon">
            <TbScanEye className="w-10 h-10" fill="#E9722B" color="#E9722B" />
          </div>
          <div className="textNinfo mx-16">
            <Heading variant="h3" className="pb-2 pt-1">
              Vision Statement
            </Heading>
            <p className="pb-9">
              enestado de desarrollo. Muchas versioneshan evolucion ado a través
              de los añosalgunas veces por accidente, otras veces apropósito
              (por ejemplo insertándole humor y cosas por el estilo). leer.
              Muchos paquetes de autoedicióny editores de páginas web usan el
              Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de
              Lorem Ipsum va a dar por resultado muchos sitios web que usan
              este texto si se encuentran ene stado de
            </p>
            <p>
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
      </section>
    </>
  );
};

export default AboutUs;
