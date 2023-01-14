import { Review } from "./reviews/types";

export interface CreatedAt {
  created_at?: string;
  updated_at?: string;
}

export type UserId = string;

export interface User extends CreatedAt {
  id: UserId;
  email: string;
  session_token: string;
  password_digest: string;
  first_name: string;
  reviews: Array<Review>;
}
