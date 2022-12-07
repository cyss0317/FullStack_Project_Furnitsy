
export interface User {
  id?: number;
}

export interface DispatchType {
  type: string;
  any
}

export interface Review {
  user_id: number;
  product_id: number;
  comment: Text;
  rating: number;
  helpful: number
}