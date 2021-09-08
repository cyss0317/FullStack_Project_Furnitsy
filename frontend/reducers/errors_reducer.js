import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ReviewErrorReducer from "./review_error_reducer";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    review: ReviewErrorReducer
})

export default ErrorsReducer;