import { Request, Response } from "express";
import { CreateProductDTO } from "../../entities/Product";
import { ProductBusiness } from "../../business/ProductBusiness/ProductBusiness";

export class ProductController {
  async registerProduct(req: Request, res: Response): Promise<void> {
    try {
      const message = "Success!";

      const token: string = req.headers.authorization as string;

      const input: CreateProductDTO = {
        name: req.body.name,
        price: req.body.price,
        image_url: req.body.image_url,
        token,
      };

      await new ProductBusiness().registerProduct(input);

      res.status(201).send({ message });
    } catch (error: any) {
      const message = error.SqlMessage || error.message;

      res.send({ message });
    }
  }
}
