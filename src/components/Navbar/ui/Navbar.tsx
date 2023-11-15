import {SwitcherLang} from '@/components/SwitcherLang'
import {useTranslation} from '@/i18n'
import {Locale} from '@/i18n/settings'
import Link from 'next/link'
import {Suspense} from 'react'

export const Navbar = async ({lang}: {lang: Locale}) => {
  const {t} = await useTranslation(lang)

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center bg-gray-50 px-4 shadow-sm">
      <div className="container flex items-center justify-between   ">
        <div className="relative">
          <p className="text-7xl font-medium text-blue-500">O</p>
          <p className="absolute  left-2 top-0 m-auto text-6xl font-light text-blue-500">
            A
          </p>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-3 uppercase text-gray-900 sm:flex">
            <Link
              className="transition duration-300 hover:text-blue-500"
              href={'#home'}>
              {t('home')}
            </Link>
            <Link
              className="transition duration-300 hover:text-blue-500"
              href={'#about'}>
              {t('about')}
            </Link>
            <Link
              className="transition duration-300 hover:text-blue-500"
              href={'#services'}>
              {t('services')}
            </Link>
            <Link
              className="transition duration-300 hover:text-blue-500"
              href={'#contacts'}>
              {t('contacts')}
            </Link>
          </nav>
          <Suspense fallback={''}>
            <SwitcherLang lng={lang} />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
