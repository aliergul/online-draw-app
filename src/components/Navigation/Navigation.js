import React from "react";
import { useTranslation } from "react-i18next";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-200 flex items-center justify-center w-full h-20">
      <div>
        <a href={"/"} className="mx-4 hover:underline">
          {t("BasitKura")}
        </a>
      </div>
      <NavigationItems to={"draw-lottery"} title={t("Basit Kura")} />
      <NavigationItems to={"group-draw"} title={t("Grup Kurası")} />
      <NavigationItems to={"raffle"} title={t("Çekiliş Yap")} />
      <NavigationItems to={"coin-toss"} title={t("Yazı Tura")} />
      <NavigationItems to={"roll-dice"} title={t("Zar At")} />
      <NavigationItems to={"gift-draw"} title={t("Hediye Çekilişi")} />
    </div>
  );
};

export default Navigation;
