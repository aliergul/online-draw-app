import React from "react";
import { useTranslation } from "react-i18next";

const DrawLottery = () => {
  const { t } = useTranslation();
  return <div>{t("navigation.draw_lottery")}</div>;
};

export default DrawLottery;
