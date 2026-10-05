import React, { useEffect } from 'react'
import type {Card} from '../types/Card.ts'



const Marketplace = () => {
  const [cardList, setCardList] = React.useState<Card[]>([])
  
  useEffect(() => {
  const getCards = async () => {
    console.log("Get cards ran")
    try {
      const res = await fetch("http://localhost:3001/api/cards")
      const card = await res.json()
      console.log(card)
      setCardList(card.data)
    } catch (error) {
      console.log(error)
    }
  }
  getCards()

}, [])


  return (
    <div>
      test,
      needs the grid here,
      check console for data import confirm

      



    </div>
  )
}

export default Marketplace