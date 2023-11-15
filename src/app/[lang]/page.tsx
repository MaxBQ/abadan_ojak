import {AboutUs} from '@/components/AboutUs'
import {Hero} from '@/components/Hero'
import {Navbar} from '@/components/Navbar'
import {Services} from '@/components/Services'
import {Locale} from '@/i18n/settings'
import {Suspense} from 'react'
import {Footer} from '@/components/Footer'
import {useTranslation} from '@/i18n'

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const {t} = await useTranslation(lang)
  return (
    <>
      <Navbar lang={lang} />
      <Suspense fallback={''}>
        <Hero lang={lang} />
      </Suspense>
      <div className="container bg-gray-50 px-4">
        <Suspense fallback={''}>
          <AboutUs lang={lang} />
          <Services lang={lang} />
        </Suspense>
      </div>
      <Footer t={t} />
    </>
  )
}
