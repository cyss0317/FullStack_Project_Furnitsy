export type UserId = string;

export interface Cart {
  id: number;
  user_id: UserId;
  created_at: string;
  updated_at: string;
}

