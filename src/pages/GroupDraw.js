import React from 'react'
import { useTranslation } from 'react-i18next'

const GroupDraw = () => {
  const {t} = useTranslation()
  return (
    <div>{t("Grup Kurası")}</div>
  )
}

export default GroupDraw