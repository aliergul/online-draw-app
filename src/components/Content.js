import React from 'react'
import { Routes, Route } from "react-router-dom";
import DrawLottery from '../pages/DrawLottery'
import GroupDraw from '../pages/GroupDraw'
import Raffle from '../pages/Raffle'
import CoinToss from '../pages/CoinToss'
import RollDice from '../pages/RollDice'
import GiftDraw from '../pages/GiftDraw'

const Content = () => {
  return (
    <div className='bg-blue-300 flex items-center justify-center w-full'>
        <Routes>
        <Route path="/" element={<DrawLottery/>} />
        <Route path="/draw-lottery" element={<DrawLottery/>} />
        <Route path="/group-draw" element={<GroupDraw/>} />
        <Route path="/raffle" element={<Raffle />} />
        <Route path="/coin-toss" element={<CoinToss/>} />
        <Route path="/roll-dice" element={<RollDice/>} />
        <Route path="/gift-draw" element={<GiftDraw/>} />
        </Routes>
    </div>
  )
}

export default Content