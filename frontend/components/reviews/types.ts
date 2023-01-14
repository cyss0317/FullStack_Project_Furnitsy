import { Product } from "../products/types";
import { CreatedAt, User } from "../types";

export type ReviewId = string;

export interface Review extends CreatedAt {
  id: ReviewId;
  user_id: number;
  product_id: number;
  comment: Text;
  rating: number;
  helpful?: number;
  user: User;
  product: Product;
}
