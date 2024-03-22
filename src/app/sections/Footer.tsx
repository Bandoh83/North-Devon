import { Chip, Link, Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary h-[400px] pl-[100px] pb-8 pr-8 pt-14 space-y-10 mb-0 z-10">
      <div className="w-full flex flex-row items-start justify-start gap-24">
        <Chip className="bg-gray h-[50px] p-0">
          <Image width={100} height={150} src="/images/north.png" />
        </Chip>
        <div className="w-1/4 text-white tex-xs font-light">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 text-white">
          <div className="font-semibold text-white">Quick Links</div>
          <Link className="text-white cursor-pointer">Home</Link>
          <Link className="text-white cursor-pointer">About Us</Link>
          <Link className="text-white cursor-pointer">Services</Link>
          <Link className="text-white cursor-pointer">Vacancies</Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 text-white">
          <div className="font-semibold text-white">FaQ and Terms</div>
          <Link className="text-white cursor-pointer">FaQs</Link>
          <Link className="text-white cursor-pointer">Privacy & Policy</Link>
          <Link href="#" className="text-white cursor-pointer">
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-start justify-between text-white pl-5">
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="font-semibold">Contact</p>
          <p className="text-gray font-light text-sm">
            Mail: operations@northdevonrecruitment
          </p>
          <p className="text-gray font-light text-sm">Call: +1 972 500 4545</p>
        </div>
        <div className="mb-0 flex flex-col items-end pt-7  justify-end text-white text-sm gap-2">
          <div>@2024 Copyright North Devon Recruitment</div>
          <div>22 Falcons Drive, SpringField, MK6 3HJ</div>
          <div className="font-light">Website designed by: KwapBoysTech</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
