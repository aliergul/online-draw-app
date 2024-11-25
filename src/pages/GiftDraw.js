import React from 'react'
import { useTranslation } from 'react-i18next'

const GiftDraw = () => {
  const {t} = useTranslation()
  return (
    <div>{t("Hediye Çekilişi")}</div>
  )
}

export default GiftDraw