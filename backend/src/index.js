import express from "express"
import dotenv from "dotenv"
import { setupCardsDB } from "./db/card.db.js";
import cardRouter from "./routes/card.routes.js";
import cors from 'cors'

const app = express();

dotenv.config()
app.use(express.json())
app.use(cors())

const port = process.env.PORT

app.use("/api/cards", cardRouter)


setupCardsDB().then(
  app.listen(port, () => {
  console.log(`App listening on port ${port}`);
}));