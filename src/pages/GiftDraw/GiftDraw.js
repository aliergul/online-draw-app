import React from "react";
import { useTranslation } from "react-i18next";

const GiftDraw = () => {
  const { t } = useTranslation();
  return <div>{t("navigation.gift_draw")}</div>;
};

export default GiftDraw;
