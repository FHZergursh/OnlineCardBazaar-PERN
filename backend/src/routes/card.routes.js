import express from "express"
import { createCard, deleteCard, getAllCards, getCard, test, updateCard } from "../controllers/card.controllers.js"

const cardRouter = express.Router()

cardRouter.get("/test", test)
cardRouter.post("/", createCard)
cardRouter.get("/", getAllCards)
cardRouter.get("/:id", getCard)
cardRouter.put("/:id", updateCard)
cardRouter.delete("/:id", deleteCard)

export default cardRouter