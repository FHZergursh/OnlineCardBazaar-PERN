import express from "express"
import { test } from "../controllers/card.controllers.js"

const cardRouter = express.Router()

cardRouter.get("/test", test)

export default cardRouter