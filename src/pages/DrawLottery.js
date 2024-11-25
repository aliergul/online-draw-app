import React from 'react'
import { useTranslation } from 'react-i18next'

const DrawLottery = () => {
  const {t} = useTranslation()
  return (
    <div>{t("Basit Kura")}</div>
  )
}

export default DrawLottery