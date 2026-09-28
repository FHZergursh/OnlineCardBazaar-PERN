import { sql } from "../db/card.db.js";

export const test = async (req, res) => {
  return res.status(200).json("Routes and controllers are wroking")
}

export const getAllCards = async (req, res) => {
  try {
    const allCards = await sql.query("SELECT * FROM cards")

    return res.status(200).json({success: true, card: allCards})

  } catch (error) {
    console.log("error in getAllCards: ",  error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getCard = async (req, res) => {
  try {
    const {id} = req.params
    if (!id) {
      return res.status(400).json({success: false, message: "ID not provided"})
    }

    const cardFound = await sql.query("SELECT * FROM cards WHERE id = $1", [id])

    const len = card.length

    if (len === 0)
    {
      return res.status(400).json({success: false, message: "Card not found"})
    }
    else 
    {
      return res.status(200).json({success: true, card: cardFound})
    }

  } catch (error) {
    console.log("error in getCard: ",  error)
    return res.status(400).json({success: false, message: error})
  }
}

export const createCard = async (req, res) => {
  try{
    const {name, price, description, game, game_set, in_stock, stock_amount} = req.body 

    if (!name || !price || !game)
    {
      return res.status(200).json({success: false, message: "Missing mandatory fields! Please provide the name of the card, its price and its game of origin"})
    }

    const newCard = await sql.query(`INSERT INTO cards (name, price, description, game, game_set, in_stock, stock_amount) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, price, description, game, game_set, in_stock, stock_amount])
    
    const len = newCard.length
    if (len === 0)
    {
      return res.status(400).json({success: false, message: "Failed to insert into DB"})
    }
    else
    {
      return res.status(200).json({success: true, card: newCard})
    }

  } catch (error) {
    console.log("error in createCard: ",  error)
    return res.status(400).json({success: false, message: error})
  }


}

export const updateCard = async (req, res) => {

}

export const deleteCard = async (req, res) => {

}