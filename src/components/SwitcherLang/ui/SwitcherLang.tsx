'use client'
import Link from 'next/link'
import {Locale, languages} from '@/i18n/settings'
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import Image from 'next/image'

// };

export const SwitcherLang = ({lng}: {lng: Locale}) => {
  const [selected, setSelected] = useState(lng)

  return (
    <div className="">
      <Listbox
        value={selected}
        onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full  cursor-pointer rounded-lg bg-white px-3 py-2  shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <Image
              src={`/${selected}.svg`}
              alt={'test'}
              width={24}
              height={24}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {languages.map((languages, personIdx) => (
                <Link
                  key={personIdx}
                  className=" w-full cursor-pointer "
                  href={`/${languages}`}>
                  <Listbox.Option
                    className={({active}) =>
                      `relative flex w-full select-none  justify-center py-2 ${
                        active ? 'bg-blue-100 text-blue-500' : 'text-gray-900'
                      }`
                    }
                    value={languages}>
                    <Image
                      src={`/${languages}.svg`}
                      alt={'test'}
                      width={24}
                      height={24}
                    />
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
