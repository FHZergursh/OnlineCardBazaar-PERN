import React from 'react'
import { useParams } from 'react-router-dom'

const Card = () => {
  const params = useParams()
  const cardId = params.cardId
  return (
    <div>

      Card ID is {cardId}
      


    </div>
  )
}

export default Card