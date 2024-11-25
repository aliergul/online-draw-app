import React from "react";
import { useTranslation } from "react-i18next";
import NavigationItems from "./NavigationItems";
import ChangeLanguage from "../ChangeLanguage";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <div className="flex bg-gray-200">
      <div className="flex items-center justify-center w-11/12 h-20">
        <a href={"/"} className="mx-4">
          {t("navigation.basic_draw")}
        </a>
        <NavigationItems to={"/"} title={t("navigation.draw_lottery")} />
        <NavigationItems
          to={"/group-draw"}
          title={t("navigation.group_draw")}
        />
        <NavigationItems to={"/raffle"} title={t("navigation.raffle")} />
        <NavigationItems to={"/coin-toss"} title={t("navigation.coin_toss")} />
        <NavigationItems to={"/roll-dice"} title={t("navigation.roll_dice")} />
        <NavigationItems to={"/gift-draw"} title={t("navigation.gift_draw")} />
      </div>
      <div className="flex items-center justify-center w-1/12">
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default Navigation;
