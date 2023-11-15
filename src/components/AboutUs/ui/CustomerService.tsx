import Image from "next/image";
import { aboutServices } from "../data/aboutData";

interface ServicesProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

const Services = (props: ServicesProps) => {
  const { desc, src, title, alt } = props;
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2">
      <Image src={src} alt={alt} width={50} height={50} />
      <h4 className="font-bold text-lg md:text-xl">
        {title}
        <hr className="border-blue-500 rounded-lg border-2" />
      </h4>
      <p className="text-gray-500 max-w-md">{desc}</p>
    </div>
  );
};

export const CustomerService = ({ t }: { t: (text: string) => string }) => {
  return (
    <div className="mt-12 w-full bg-[url(/world-map.png)] object-center object-cover text-center">
      <div className="w-full mt-28 grid md:grid-cols-2 gap-8 items-center justify-center">
        {aboutServices.map((service) => (
          <Services
            key={service.id}
            src={service.src}
            alt={service.alt}
            desc={t(service.desc)}
            title={t(service.title)}
          />
        ))}
      </div>
    </div>
  );
};
