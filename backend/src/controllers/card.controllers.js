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

    const len = cardFound.length

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
    const {name, price, description, game, game_set, in_stock, stock_amount, image_url} = req.body 

    if (!name || !price || !game)
    {
      return res.status(200).json({success: false, message: "Missing mandatory fields! Please provide the name of the card, its price and its game of origin"})
    }

    const newCard = await sql.query(`INSERT INTO cards (name, price, description, game, game_set, in_stock, stock_amount, image_url) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, 
      [name, price, description, game, game_set, in_stock, stock_amount, image_url])
    
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
  try {
    const {name, price, description, game, game_set, in_stock, stock_amount, image_url} = req.body 
    const {id} = req.params

    if (!id) 
    {
      return res.status(400).json({success: false, message: "ID not provided!"})
    }

    if (!name && !price && !description && !game && !game_set && !in_stock && !stock_amount)
    {
      return res.status(400).json({success: false, message: "No updated fields provided"})
    }

    const cardFound = await sql.query("SELECT * FROM cards WHERE id = $1", [id])

    const len = cardFound.length
    if (len === 0 )
    {
      return res.status(400).json({success: false, message: "Card with provided ID not found"})
    }

    const updated = await sql.query(
      `UPDATE cards SET name = $1, price = $2, description = $3, game = $4, 
      game_set = $5, in_stock = $6, stock_amount = $7, image_url = $8  WHERE id = $9 RETURNING *`,
    [name, price, description, game, game_set, in_stock, stock_amount, image_url, id])

    return res.status(200).json({success: true, card: updated})


  } catch (error) {
    console.log("error in updateCard: ",  error)
    return res.status(400).json({success: false, message: error})
  }

}

export const deleteCard = async (req, res) => {
  try {
    const {id} = req.params

    if (!id) 
    {
      return res.status(400).json({success: false, message: "ID not provided!"})
    }

    const cardFound = await sql.query("SELECT * FROM cards WHERE id = $1", [id])

    const len = cardFound.length
    if (len === 0 )
    {
      return res.status(400).json({success: false, message: "Card with provided ID not found"})
    }

    const deleted = await sql.query("DELETE FROM cards WHERE id = $1", [id])

    return res.status(200).json({success: true, card: deleted})

  } catch (error) {
    console.log("error in deleteCard: ",  error)
    return res.status(400).json({success: false, message: error})
  }

}