import { BaseDatabase } from "../BaseDatabase";
import { Product, toProductModel } from "../../entities/Product";
import dotenv from "dotenv";

dotenv.config();

export class ProductDatabase extends BaseDatabase {
  async registerProduct(product: Product) {
    try {
      await this.connection("amaro_products").insert({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        user_id: product.user_id,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
