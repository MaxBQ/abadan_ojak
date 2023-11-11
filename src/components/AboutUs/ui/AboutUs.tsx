/* eslint-disable @next/next/no-img-element */
"use client";
import { Delivery } from "./Delivery";
import { aboutData } from "../data/aboutData";
import { CustomerService } from "./CustomerService";
export const AboutUs = () => {
  return (
    <div className="py-12 flex items-center w-full flex-wrap justify-center flex-col gap-6">
      <h3 className="text-4xl font-bold">
        About Us <hr className="border-blue-500 border-2 mt-2 rounded-lg" />
      </h3>
      <div className="max-w-5xl px-4 md:px-0 text-gray-500 text-center">
        <p>
          The head office of IE “Hilli Ulag” is located in Ashgabat,
          Turkmenistan. To ensure the high quality of the services provided, the
          company has permanent representative offices in the regional centers
          of Turkmenistan, such as: Akhal, Mary, Balkan (Balkanabat, port of
          Turkmenbashi, Khazar), Lebap, Dashoguz. The company works closely with
          partners from Turkey, the United Arab Emirates, the USA, China,
          Germany, Russia and other CIS countries, which makes it possible to
          quickly and efficiently provide all types of transport and logistics
          services, both on the territory of Turkmenistan and abroad.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center w-full">
        {aboutData.map((about) => (
          <Delivery
            key={about.id}
            src={about.src}
            alt={about.alt}
            srcIcon={about.srcIcon}
            altIcon={about.altIcon}
            desc={about.desc}
          />
        ))}
      </div>
      <CustomerService />
    </div>
  );
};
