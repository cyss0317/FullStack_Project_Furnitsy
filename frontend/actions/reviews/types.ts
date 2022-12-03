export interface Review {
  user_id: number;
  product_id: number;
  comment: Text;
  rating: number;
}

export type ReviewActionType = "RECEIVE_REVIEW"| "RECEIVE_ALL_REVIEWS"| "CREATE_REVIEW"| "DELETE_REVIEW"| "EDIT_REVIEW"| "RECEIVE_REVIEW_ERRORS"| "UPDATE_REVIEW";
export type ReviewId = number;