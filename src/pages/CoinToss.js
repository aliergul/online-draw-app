import React from 'react'
import { useTranslation } from 'react-i18next'

const CoinToss = () => {
  const {t} = useTranslation()
  return (
    <div>{t("Yazı Tura")}</div>
  )
}

export default CoinToss