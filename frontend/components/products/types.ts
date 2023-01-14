import { Review } from "../reviews/types";
import { CreatedAt } from "../types";

export type ProductId = string;
export interface Product extends CreatedAt {
  id: ProductId;
  name: string;
  description: Text;
  category: string;
  measurement?: string;
  color: string;
  price: number;
  highlights: Text;
  photoUrls: Array<string>;
  reviews: Array<Review>;
}
