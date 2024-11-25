import React from "react";
import { useTranslation } from "react-i18next";

const GroupDraw = () => {
  const { t } = useTranslation();
  return <div>{t("navigation.group_draw")}</div>;
};

export default GroupDraw;
