import { BaseDatabase } from "./data/BaseDatabase";

export class BaseDatabaseMigrations extends BaseDatabase {
  baseDatabase = this.connection
    .raw(
      `CREATE TABLE IF NOT EXISTS amaro_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS amaro_products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES amaro_users(id)
    );`
    )
    .then(console.log)
    .catch(console.log);
}
