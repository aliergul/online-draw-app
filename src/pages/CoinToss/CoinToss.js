import React from "react";
import { useTranslation } from "react-i18next";

const CoinToss = () => {
  const { t } = useTranslation();
  return <div>{t("navigation.coin_toss")}</div>;
};

export default CoinToss;
