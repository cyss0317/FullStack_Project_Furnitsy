export interface Review {
  user_id: number;
  product_id: number;
  comment: Text;
  rating: number;
}

export type ReviewActionTypes =
  | "RECEIVE_REVIEW"
  | "RECEIVE_ALL_REVIEWS"
  | "CREATE_REVIEW"
  | "DELETE_REVIEW"
  | "EDIT_REVIEW"
  | "RECEIVE_REVIEW_ERRORS"
  | "UPDATE_REVIEW";
  
export enum ReviewActionType {
  RECEIVE_REVIEW = "RECEIVE_REVIEW",
  RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS",
  CREATE_REVIEW = "CREATE_REVIEW",
  DELETE_REVIEW = "DELETE_REVIEW",
  EDIT_REVIEW = "EDIT_REVIEW",
  RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS",
  UPDATE_REVIEW = "UPDATE_REVIEW",
}
export type ReviewId = number;
