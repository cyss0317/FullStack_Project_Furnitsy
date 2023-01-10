import React from "react";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      product_id: this.props.productId,
      comment: "",
      rating: 0,
      helpful: 0,
    };

    this.createReview = this.createReview.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllReviews();
  }
  componentDidUpdate(preProps) {
    if (preProps.reviews !== this.props.reviews) {
      this.forceUpdate();
    }
  }

  createReview(e) {
    e.preventDefault();
    var x = document.getElementById("review-submit");
    this.props
      .createReview(this.state)
      .then((res) => this.setState({ comment: "", rating: 1, helpful: 0 }));
  }

  onChangeHandler(e) {
    this.setState({ comment: e.currentTarget.value });
  }

  onClickHandler(e) {
    this.setState({ rating: e.currentTarget.value });
  }

  onChangeForCreateReview(field, e) {
    this.setState[field] = e.currentTarget.value;
  }

  deleteHandler(e) {
    this.props
      .deleteReview(e.currentTarget.value)
      .then(this.props.fetchAllReviews());
  }

  convertRatingsToStars(rating) {
    return (
      <div className="totalRating">
        <label
          htmlFor="star1"
          style={{ color: rating >= 5 ? "#ffc700" : "#ccc" }}
          title="text"
        >
          5 stars
        </label>
        <label
          htmlFor="star2"
          style={{ color: rating >= 4 ? "#ffc700" : "#ccc" }}
          title="text"
        >
          4 stars
        </label>
        <label
          htmlFor="star3"
          style={{ color: rating >= 3 ? "#ffc700" : "#ccc" }}
          title="text"
        >
          3 stars
        </label>
        <label
          htmlFor="star4"
          style={{ color: rating >= 2 ? "#ffc700" : "#ccc" }}
          title="text"
        >
          2 stars
        </label>
        <label
          htmlFor="star5"
          style={{ color: rating >= 1 ? "#ffc700" : "#ccc" }}
          title="text"
        >
          1 stars
        </label>
      </div>
    );
  }
  renderErrors(errors) {
    let errorsArr = Object.values(errors);
    return errors.length !== 0 ? (
      <div className="errors-container">
        <ul className="errors">
          {errors.map((error) => {
            return <li className="error">- {error}</li>;
          })}
        </ul>
      </div>
    ) : (
      ""
    );
  }

  render() {
    const {
      product,
      errors,
      reviews,
      currentUserId,
      currentUser,
      reviewsArray,
      productId,
      sessionId,
    } = this.props;

    if (product === undefined) {
      return null;
    }

    if (reviews === undefined) return null;
    let userReviews;
    let userReview;
    if (currentUser === undefined) {
    } else {
      userReviews = reviewsArray.filter(
        (review) => review.user_id === currentUserId
      );
      userReview =
        userReviews.length === 0
          ? null
          : userReviews.filter((review) => review.product_id === productId)[0];
    }

    let productReviews = reviewsArray.filter(
      (review) => review.product_id === productId
    );
    let totalRating = 0;
    productReviews.forEach((review) => (totalRating += review.rating));
    let avgRating = Math.round(totalRating / productReviews.length);

    return (
      <div id="reviews-main-container">
        <div id="create-review">
          <div id="create-review-reviews">
            <h1> {productReviews.length} reviews</h1>
            <h2>{this.convertRatingsToStars(avgRating)}</h2>
          </div>
          <p>
            Buyers are raving! Multiple people gave 5-star reviews to this
            product.
          </p>
          {userReview ? (
            <div id="reviews">
              <h2>Your review for this product</h2>
              <section>
                {userReview.user.first_name.length === 0 ? (
                  <h3>Anonymous</h3>
                ) : (
                  <h3>{userReview.user.first_name}</h3>
                )}
                <h4>{userReview.created_at.split("T")[0]}</h4>
                <button
                  id="delete-review"
                  value={userReview.id}
                  onClick={this.deleteHandler}
                >
                  Delete
                </button>
              </section>
              {this.convertRatingsToStars(userReview.rating)}
              <p>{userReview.comment}</p>
            </div>
          ) : currentUser ? (
            <div>
              <h1>Add a written review</h1>
              <form onSubmit={this.createReview} id="create-review-form">
                <div className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    onClick={(e) => this.onClickHandler(e)}
                    value="5"
                  />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    onClick={(e) => this.onClickHandler(e)}
                    value="4"
                  />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    onClick={(e) => this.onClickHandler(e)}
                    value="3"
                  />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    onClick={(e) => this.onClickHandler(e)}
                    value="2"
                  />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    onClick={(e) => this.onClickHandler(e)}
                    value="1"
                  />
                  <label htmlFor="star1" title="text">
                    1 stars
                  </label>
                </div>
                {errors.length !== 0 ? this.renderErrors(errors.review) : ""}
                <textarea
                  id="create-review-form-input"
                  type="text"
                  onChange={(e) => this.onChangeHandler(e)}
                  value={this.state.comment}
                />
                <input id="review-submit" type="submit" />
              </form>
            </div>
          ) : (
            <div>
              <p>
                Please{" "}
                <button
                  id="review-login"
                  style={{ border: "none" }}
                  onClick={() => this.props.openModal("Login")}
                >
                  Login
                </button>{" "}
                to write a review
              </p>
            </div>
          )}
        </div>
        <ul>
          {productReviews.map((review, index) => {
            if (review.user_id === currentUserId) {
              return "";
            } else if (currentUser || sessionId === null) {
              return (
                <li id="reviews" key={index}>
                  <section>
                    {review.user.first_name.length === 0 ? (
                      <h3>Anonymous</h3>
                    ) : (
                      <h3>{review.user.first_name}</h3>
                    )}
                    <h4>{review.created_at.split("T")[0]}</h4>
                  </section>
                  {this.convertRatingsToStars(review.rating)}
                  <p>{review.comment}</p>
                </li>
              );
            } else {
              return (
                <li id="reviews" key={index}>
                  <section>
                    {review.user.first_name.length === 0 ? (
                      <h3>Anonymous</h3>
                    ) : (
                      <h3>{review.user.first_name}</h3>
                    )}
                    <h4>{review.created_at.split("T")[0]}</h4>
                  </section>
                  {this.convertRatingsToStars(review.rating)}
                  <p>{review.comment}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default ReviewIndex;
