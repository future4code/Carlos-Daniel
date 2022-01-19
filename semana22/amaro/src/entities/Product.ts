export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  user_id: string;
}

export interface CreateProductDTO {
  name: string;
  price: number;
  image_url: string;
  token: string;
}

export interface GetProductByIdInputDTO {
  id: string;
}

export function toProductModel(obj: any): Product {
  return (
    obj && {
      id: obj.id,
      name: obj.name,
      price: obj.price,
      image_url: obj.image_url,
      authorId: obj.authorId,
    }
  );
}
