export const Footer = ({ t }: { t: (text: string) => string }) => {
  return (
    <div
      className="w-full bg-gradient-to-tl to-blue-500 from-blue-800 h-72 flex justify-center"
      id="contacts"
    >
      <div className="w-full container h-72 flex items-center justify-center gap-4 flex-wrap">
        <div>
          <p className="font-bold">{t("PHONE")}</p>
          <p className="">+993123456</p>
        </div>
      </div>
    </div>
  );
};
