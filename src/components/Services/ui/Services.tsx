'use client'

import {WrapperSection} from '@/components/WrapperSection'
import {serviceData} from '../data/servieData'
import {Locale} from '@/i18n/settings'
import {useTranslation} from '@/i18n/client'

export const Services = ({lang}: {lang: Locale}) => {
  const {t} = useTranslation(lang)
  return (
    <WrapperSection
      link="services"
      title={t('services')}
      desc={t('servicesDesc')}>
      <div className=" grid w-full items-start gap-6 rounded-lg bg-gray-800 p-4 text-white shadow-inner md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <div
            className={`h-full w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 ${
              service.id === 1 ||
              service.id === 4 ||
              service.id === 5 ||
              service.id === 8
                ? '  md:col-span-2 '
                : ''
            }`}
            key={service.id}>
            <div
              className={`flex flex-col shadow-lg ${
                service.id === 1 ||
                service.id === 4 ||
                service.id === 5 ||
                service.id === 8
                  ? 'to-grey-900 from-gray-600 via-gray-700 md:bg-gradient-to-br'
                  : ''
              }   h-full items-start justify-start gap-2  rounded-md bg-gray-900 p-4`}>
              <h3 className="mb-1 text-xl font-bold underline underline-offset-8 md:text-2xl">
                {t(service.title)}
              </h3>
              <h4 className="text-lg font-bold md:text-xl">
                {t(service.subTitle)}
              </h4>
              <ul className="text-lg">
                {service.list.map((desc) => (
                  <li key={desc}>{t(desc)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </WrapperSection>
  )
}
