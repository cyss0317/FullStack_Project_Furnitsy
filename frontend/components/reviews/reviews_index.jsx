import React from "react";

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.currentUser.id,
            product_id: this.props.product.id,
            comment: "",
            rating: 4,
            helpful: 0
        }

        this.createReview = this.createReview.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)

    }
    componentDidMount() {
        this.props.fetchAllReviews();
    }

    createReview(){
        debugger
        this.props.createReview(this.state)
    }

    onChangeHandler( e){
        this.setState({comment: e.currentTarget.value })
    }

    onClickHandler( e){
        this.setState({ rating: e.currentTarget.value })
    }
    
    onChangeForCreateReview( field, e) {
        debugger
        this.setState[field] = e.currentTarget.value
    }

    convertRatingsToStars(rating){
        return(
            <div className="totalRating" >
                {/* <input type="radio" id="star1" readOnly checked="true" name="rating" value="5" /> */}
                <label htmlFor="star1" style={{ color: rating >= 5 ? "#ffc700" : "#ccc"}} title="text">5 stars</label>
                {/* <input type="radio" id="star2" readOnly name="rating" value="4" /> */}
                <label htmlFor="star2" style={{ color: rating >= 4 ? "#ffc700" : "#ccc"}} title="text">4 stars</label>
                {/* <input type="radio" id="star3" readOnly name="rating" value="3" /> */}
                <label htmlFor="star3" style={{ color: rating >= 3 ? "#ffc700"  : "#ccc"}} title="text">3 stars</label>
                {/* <input type="radio" id="star4" readOnly name="rating" value="2" /> */}
                <label htmlFor="star4" style={{ color: rating >= 2 ? "#ffc700"  : "#ccc"}} title="text">2 stars</label>
                {/* <input type="radio" id="star5" readOnly name="rating" value="1" /> */}
                <label htmlFor="star5" style={{ color: rating >= 1 ? "#ffc700"  : "#ccc"}} title="text">1 stars</label>
            </div>
        )
    }

    // this.stateRating(this.state, e) {
    //     debugger
    //     this.state.rating = e.currentTarget.value
    // }

    render(){
        const { product, reviews, currentUser } = this.props;
        if (product === undefined) {
            return null;
        }
        const productReviews = reviews.filter((review) => review.product_id === product.id)
        let totalRating = 0;
        productReviews.forEach((review) => totalRating += review.rating)
        let avgRating = Math.round(totalRating / (productReviews.length))

        return (

            <div id="reviews-main-container">
                <div id="create-review">
                    <div id="create-review-reviews">
                        <h1>  {productReviews.length} reviews</h1>
                        <h2>{this.convertRatingsToStars(avgRating)}</h2>
                    </div>
                    <p>Buyers are raving! Multiple people gave 5-star reviews to this product.</p>
                    <form onSubmit={this.createReview} id="create-review-form">

                        <div className="rating" >
                            {/* <input type="radio" id="star1" name="rating"  value="1" />
                            <label htmlFor="star1" title="text">1 stars</label>
                            <input type="radio" id="star2" name="rating"  value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star3" name="rating"  value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star4" name="rating"  value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star5" name="rating"  value="5" />
                            <label htmlFor="star5" title="text">5 stars</label> */}
                            <input type="radio" id="star5" name="rating" onClick={e => this.onClickHandler(e)} value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rating" onClick={e => this.onClickHandler(e)} value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rating" onClick={e => this.onClickHandler(e)} value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rating" onClick={e => this.onClickHandler(e)} value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rating" onClick={e => this.onClickHandler(e)} value="1" />
                            <label htmlFor="star1" title="text">1 stars</label>
                        </div>
                        <input id="create-review-form-input" type="text" onChange={(e) => this.onChangeHandler(e)} value={this.state.comment} />
                        <input id="review-submit" type="submit" />

                    </form>
                </div>
                <ul>
                    {
                        productReviews.map((review, index) => (
                            <li id="reviews" key={index}>
                                <section>
                                    <h3>{review.user.first_name}</h3>
                                    <h4>{review.created_at.split("T")[0]}</h4>
                                </section>
                                {this.convertRatingsToStars(review.rating)}
                                <p>{review.comment}</p>
                                {/* <p onClick={this.props.updateHandler} >{review.helpful.length === 0 ? Helpful? : Helpful review.helpful }</p> */}
                            </li>
                        ))
                    }
                </ul>


            </div>
        )
    }


}

export default ReviewIndex;