"use client";
import Link from "next/link";
import { Locale, languages } from "@/i18n/settings";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// };

export const SwitcherLang = ({ lng }: { lng: Locale }) => {
  const [selected, setSelected] = useState(lng);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="">{selected}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {languages.map((languages, personIdx) => (
                <Link
                  key={personIdx}
                  className="cursor-pointer w-full"
                  href={`/${languages}`}
                >
                  <Listbox.Option
                    className={({ active }) =>
                      `relative select-none p-2  ${
                        active ? "bg-blue-100 text-blue-500" : "text-gray-900"
                      }`
                    }
                    value={languages}
                  >
                    {({ selected }) => (
                      <span
                        className={` ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {languages}
                      </span>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
