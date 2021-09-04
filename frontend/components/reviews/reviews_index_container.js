import ReviewIndex from "./reviews_index";
import {connect} from "react-redux";
import { ThunkFetchReview, ThunkFetchAllReviews, ThunkDeleteReview, ThunkCreateReview, ThunkUpdateReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
    reviews: state.entities.reviews

})

const mDTP = dispatch => ({
    fetchReview: ThunkFetchReview,
    fetchAllReviewsThunkFetchAllReviews
    ThunkDeleteReview
    ThunkCreateReview
    ThunkUpdateReview
})

export default connect(mSTP, mDTP)(ReviewIndex)