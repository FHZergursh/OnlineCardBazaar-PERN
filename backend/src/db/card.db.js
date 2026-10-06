import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupCardsDB() {
  try {
    console.log('Connection established');

    // Create a new table
    await sql`
      CREATE TABLE IF NOT EXISTS cards (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        description VARCHAR(1000),
        game VARCHAR(255) NOT NULL,
        game_set VARCHAR(255),
        in_stock BOOLEAN DEFAULT TRUE,
        stock_amount INT,
        image_url VARCHAR(1000)
      );
    `;
    console.log('Finished initialising table.');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}

