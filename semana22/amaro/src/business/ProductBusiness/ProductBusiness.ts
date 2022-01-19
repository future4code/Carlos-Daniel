import {
  CreateProductDTO,
  GetProductByNameDTO,
  Product,
} from "../../entities/Product";
import {
  AuthenticationData,
  Authenticator,
} from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { ProductDatabase } from "../../data/ProductDataBase/ProductDatabase";

export class ProductBusiness {
  async registerProduct(input: CreateProductDTO): Promise<void> {
    try {
      const tokenManager = new Authenticator();

      if (!input.name || !input.price || !input.image_url) {
        throw new Error('"Name", "Price" and "image_url" must be provided');
      }

      if (!input.token) {
        throw new Error("A jwt must be provided");
      }

      const tokenData: AuthenticationData = tokenManager.getTokenData(
        input.token
      );

      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const product: Product = {
        id,
        user_id: tokenData.id,
        name: input.name,
        price: input.price,
        image_url: input.image_url,
      };

      await new ProductDatabase().registerProduct(product);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getProductByName(
    input: GetProductByNameDTO
  ): Promise<Product | undefined> {
    try {
      const product: Product = await new ProductDatabase().getProductByName(
        input.name
      );

      if (!product) {
        throw new Error("Product not found");
      }

      return product;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
