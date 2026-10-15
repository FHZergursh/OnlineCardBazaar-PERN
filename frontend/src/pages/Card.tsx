import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Card } from '../types/Card'

const Card = () => {
  const params = useParams()
  const cardId = params.cardId
  const [card, setCard] = useState<Card>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCards = async () => {
    console.log("Get cards ran")
    try {
      const res = await fetch(`http://localhost:3001/api/cards/${cardId}`)
      const response = await res.json()
      console.log(response)
      setCard(response.card)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  getCards()

  }, [])


  if (loading) {
    return (
      <div>loading...</div>
    )
  }
  else return (
    <div className='flex flex-col items-center'>
      <div className='bg-red-200  flex-col justify-start'>
        <div className='flex w-[90vw] h-[70vh]'> 
          <div className='border border-2 border-solid border-black w-[50%] h-[80%] text-black'>
            image
          </div>

          <div className='border-2 border-solid border-black h-[80%] w-[50%]'>
            <div>test</div>
            
          </div>
        </div>
      </div>

      <div>purchase</div>
    </div>
  )
}

export default Card