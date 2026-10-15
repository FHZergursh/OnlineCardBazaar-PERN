import React from 'react'
import type { Card } from '../types/Card'
import { useNavigate } from 'react-router';

interface CardProps {
  marketCard: Card
}


const MarketCard = ({marketCard} : CardProps) => {
    const navigate = useNavigate()

  const gotoCard = async () => {
    await navigate(`/cards/${marketCard.id}`)
  }





  return (
    <div>

      <div className='flex flex-col w-[15vw] bg-[#272424]' onClick={gotoCard}>
        <h1 className='text-2xl text-center underline mb-2 truncate'>{marketCard.name}</h1>
        <div className='flex items-center justify-center mb-2'>
          <img src={marketCard.image_url} className='h-[20vh] w-[10vw]'/>
        </div>
        <div className='pb-1'>
          <div>Price: £{marketCard.price}</div>
          <div>{marketCard.game_set}</div>
          
        </div>
        

      </div>
      


    </div>
  )
}

export default MarketCard