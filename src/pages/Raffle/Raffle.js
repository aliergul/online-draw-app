import React from "react";
import { useTranslation } from "react-i18next";

const Raffle = () => {
  const { t } = useTranslation();
  return <div>{t("navigation.raffle")}</div>;
};

export default Raffle;