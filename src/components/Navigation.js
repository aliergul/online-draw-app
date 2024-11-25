import React from 'react'
import { useTranslation } from 'react-i18next'

const Navigation = () => {
    const {t} = useTranslation()
  return (
    <div className='bg-yellow-300 flex items-center justify-center w-full'>{t("welcome")}</div>
  )
}

export default Navigation