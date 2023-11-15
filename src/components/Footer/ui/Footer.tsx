export const Footer = ({t}: {t: (text: string) => string}) => {
  return (
    <footer
      className="relative flex min-h-[288px] w-full flex-col items-center justify-center bg-gray-900"
      id="contacts">
      <div className=" absolute -top-1 w-full  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pt-1" />

      <div className="container flex max-h-full w-full flex-col justify-center gap-6 px-8 py-2 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">{t('PHONE')}</p>
          <p inputMode={'tel'}>+993123456</p>
        </div>{' '}
        <div>
          <p className="font-bold">{t('EMAIL')}</p>
          <p inputMode={'email'}>info@Gmail.com</p>
        </div>{' '}
        <div>
          <p className="font-bold">{t('ADDRESS')}</p>
          <p>Ashgabat, str. 1958 (Andaliba 70) 5 th-floor, office 508</p>
        </div>
      </div>
      <p className="absolute bottom-2 text-gray-300">
        &copy; 2023 Abadan Ojak. {t('Все права защищены.')}
      </p>
    </footer>
  )
}
