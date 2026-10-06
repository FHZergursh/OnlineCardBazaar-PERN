import React from 'react'
import type { Card } from '../types/Card'

interface CardProps {
  marketCard: Card
}


const MarketCard = ({marketCard} : CardProps) => {

  const gotoCard = () => {
    console.log("Click!")
  }





  return (
    <div>

      <div className='flex flex-col  bg-gray-400 h-[20vh] w-[15vw] text-black ' onClick={gotoCard}>
        <h1 className='text-1xl text-center'>{marketCard.name}</h1>
        <div>image, needs a backend rework</div>
        <div>
          <div>Price: £{marketCard.price}</div>
          <div>{marketCard.game_set}</div>
        </div>
        

      </div>
      


    </div>
  )
}

export default MarketCard