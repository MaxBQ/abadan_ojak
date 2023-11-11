/* eslint-disable @next/next/no-img-element */
"use client";

interface DeliveryProps {
  src: string;
  alt: string;
  srcIcon: string;
  altIcon: string;
  desc: string;
}
export const Delivery = (props: DeliveryProps) => {
  const { alt, altIcon, desc, src, srcIcon } = props;
  return (
    <div className=" w-full h-[370px] mb-2 md:mb-0 md:h-[440px] group relative border shadow-lg rounded-lg">
      <img
        src={src}
        alt={alt}
        className="transition duration-300 group-hover:scale-105 object-cover rounded-lg object-center h-full w-full "
      />
      <div className="transition duration-300 group-hover:opacity-0 absolute top-0 w-full h-full rounded-lg bg-black opacity-60" />

      <div
        className="transition duration-300 absolute bg-white w-full bottom-0
       group-hover:bg-blue-500 translate-y-6 pt-6 px-4 pb-4 rounded-lg group-hover:translate-y-0"
      >
        <img
          src={srcIcon}
          alt={altIcon}
          className="transition duration-300 bg-blue-500 rounded-lg w-8 h-8 group-hover:bg-white p-1"
        />
        <p className="transition duration-300 text-gray-500 group-hover:text-white mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};
