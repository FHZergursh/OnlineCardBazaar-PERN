import React, { useEffect } from 'react'
import type {Card} from '../types/Card.ts'
import MarketCard from '../components/MarketCard.tsx'



const Marketplace = () => {
  const [cardList, setCardList] = React.useState<Card[]>([])
  
  useEffect(() => {
  const getCards = async () => {
    console.log("Get cards ran")
    try {
      const res = await fetch("http://localhost:3001/api/cards")
      const response = await res.json()
      console.log(response)
      setCardList(response.card)
    } catch (error) {
      console.log(error)
    }
  }
  getCards()

}, [])


  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-5 gap-10 mt-[10vh]'>
            {cardList.map ((card) => (
              <div key={card.id}>
                <MarketCard marketCard={card} />
              </div>
            ))}
      </div>

      



    </div>





  )
}

export default Marketplace