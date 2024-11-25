import React from "react";
import { useTranslation } from "react-i18next";

const RollDice = () => {
  const { t } = useTranslation();
  return <div>{t("navigation.roll_dice")}</div>;
};

export default RollDice;
