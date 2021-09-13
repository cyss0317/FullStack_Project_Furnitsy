import React from "react";

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.currentUserId,
            product_id: this.props.productId,
            comment: "",
            rating: 0,
            helpful: 0
        }

        this.createReview = this.createReview.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }
    componentDidMount() {
        this.props.fetchAllReviews()
        // this.props.fetchProduct(this.props.productId)
    }
    componentDidUpdate(preProps){
        if( preProps.reviews !== this.props.reviews){
            // this.props.fetchAllReviews()
            // userReview = reviews[userReviewForThisProduct[0].id]
            this.forceUpdate()
        }

    }

    createReview(e){
        e.preventDefault();
        var x = document.getElementById("review-submit")
        this.props.createReview(this.state)
            .then(res => this.setState({comment: "", rating: 1, helpful:0}))
            // .then(() => this.props.fetchAllReviews())
        // .then(alert("successfully created"))
        // .then(x.disabled = true )
    }

    onChangeHandler( e){
        this.setState({comment: e.currentTarget.value })
    }

    onClickHandler( e){
        this.setState({ rating: e.currentTarget.value })
    }
    
    onChangeForCreateReview( field, e) {

        this.setState[field] = e.currentTarget.value
    }

    deleteHandler(e){

        this.props.deleteReview(e.currentTarget.value)
            .then(this.props.fetchAllReviews())
        
    }


    convertRatingsToStars(rating){
        return(
            <div className="totalRating" >
                <label htmlFor="star1"  style={{ color: rating >= 5 ? "#ffc700" : "#ccc"}} title="text">5 stars</label>
                <label htmlFor="star2"  style={{ color: rating >= 4 ? "#ffc700" : "#ccc"}} title="text">4 stars</label>
                <label htmlFor="star3"  style={{ color: rating >= 3 ? "#ffc700"  : "#ccc"}} title="text">3 stars</label>
                <label htmlFor="star4"  style={{ color: rating >= 2 ? "#ffc700"  : "#ccc"}} title="text">2 stars</label>
                <label htmlFor="star5"  style={{ color: rating >= 1 ? "#ffc700"  : "#ccc"}} title="text">1 stars</label>
            </div>
        )
    }
    renderErrors(errors) {
        // const errors = this.props.errors;
        console.log("errors", errors)
        let errorsArr = Object.values(errors)
        console.log("errorsArr", errorsArr)
        console.log("errors type", typeof(errorsArr))
        return (
            errors.length !== 0 ?
                <div className="errors-container">
                    <ul className="errors">
                        {
                            errors.map((error) => {
                                return (
                                    <li className="error" >
                                        - {error}
                                    </li>
                                )
                            })
                            // <li>

                            //     {errors}
                            // </li>
                        }
                    </ul>
                </div>
            :
            ""
        )
    }

    // this.stateRating(this.state, e) {
    //     debugger
    //     this.state.rating = e.currentTarget.value
    // }

    render(){
        const { product, errors, reviews, currentUserId, currentUser, reviewsArray, productId, sessionId  } = this.props;

        if (product === undefined){
            return null;
        }

        if (reviews === undefined) return null;
        let userReviewForThisProduct ;
        let userReview ;
        if ( currentUser === undefined) {
            
        } else {
            // userReviewForThisProduct = currentUser.reviews.filter((review) => review.product_id === productId)
            userReviewForThisProduct = reviewsArray.filter((review) => review.user_id === currentUserId)
            console.log(userReviewForThisProduct)
            userReview =  userReviewForThisProduct.length === 0 ? null : reviews[userReviewForThisProduct[0].id];
        }

        // debugger
        let productReviews = reviewsArray.filter((review) => review.product_id === productId)
        let totalRating = 0;
        productReviews.forEach((review) => totalRating += review.rating)
        let avgRating = Math.round(totalRating / (productReviews.length))
        // debugger



        // if (currentUser === undefined) return null;
        // // if (reviews === undefined) return null;
        // const reviewsArray = Object.values(reviews);
        // let userReviewForThisProduct;
        // console.log("currentUser", currentUser.reviews)
        // userReviewForThisProduct = currentUser.reviews.filter((review) => review.product_id === this.props.productId) === [] ?
        //     [] : currentUser.reviews.filter((review) => review.product_id === this.props.productId)
        // let userReview;
        // debugger
        // console.log("1", userReviewForThisProduct)
        // if (userReviewForThisProduct[0] === undefined) {
        //     userReview = []
        // } else {
        //     console.log("2", userReviewForThisProduct[0])
        //     userReview = reviews[userReviewForThisProduct[0].id];
        // }
        // let productReviews;
        // productReviews = reviewsArray === undefined ? [] : reviewsArray.filter((review) => review.product_id === this.props.productId)
        // let totalRating = 0;
        // productReviews.forEach((review) => totalRating += review.rating)
        // let avgRating = Math.round(totalRating / (productReviews.length))
        // if(!currentUser){
        //     return (

        //     )
        // }

        // if(sessionId === null){
        //     return(
        //         <p>hello</p>
        //     )
        // } else{
        //     <p>mmememem</p>
        // }
        return (
                
            <div id="reviews-main-container">

                <div id="create-review">
                    <div id="create-review-reviews">
                        <h1>  {productReviews.length} reviews</h1>
                        <h2>{this.convertRatingsToStars(avgRating)}</h2>
                    </div>
                    <p>Buyers are raving! Multiple people gave 5-star reviews to this product.</p>
                    {
                        userReview  ?
                            <div id="reviews" >
                                <h2>Your review for this product</h2>
                                <section>
                                    {
                                        userReview.user.first_name.length === 0 ?
                                            <h3>Anonymous</h3>
                                            :
                                            <h3>{userReview.user.first_name}</h3>
                                    }
                                    <h4>{userReview.created_at.split("T")[0]}</h4>
                                    <button id="delete-review" value={userReview.id} onClick={this.deleteHandler} >Delete</button>
                                    {/* <button>Edit</button> */}
                                </section>
                                {this.convertRatingsToStars(userReview.rating)}
                                <p >{userReview.comment}</p>
                                {/* <input type="text" value={userReview.comment}></input> */}
                                {/* <p onClick={this.props.updateHandler} >{review.helpful.length === 0 ? Helpful? : Helpful review.helpful }</p> */}
                            </div>
                            : currentUser ?
                            <div>
                                <h1>Add a written review</h1>
                                <form onSubmit={this.createReview} id="create-review-form">

                                    <div className="rating" >
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
                                    {
                                        errors.length !== 0 ?
                                        this.renderErrors(errors.review)
                                        :
                                        ''
                                    }
                                    <textarea id="create-review-form-input" type="text"  onChange={(e) => this.onChangeHandler(e)} value={this.state.comment} />
                                    {/* {this.renderErrors(errors)} */}
                                    <input id="review-submit" type="submit" />
                                </form>
                            </div>
                            : 
                            <div>
                                    <p>Please <button id="review-login"style={{ border: "none"  }} onClick={() => this.props.openModal("Login")}>Login</button> to write a review</p>
                            </div>
                    }

                </div>
                <ul>
                    {
                        productReviews.map((review, index) => {
                            if (review.user_id === currentUserId){
                                return(
                                    ""
                            )} 
                            else if (currentUser || sessionId === null) {
                                return(
                                <li id="reviews" key={index}>
                                    <section>
                                        {
                                            review.user.first_name.length === 0 ?
                                                <h3>Anonymous</h3>
                                                :
                                                <h3>{review.user.first_name}</h3>
                                        }
                                        <h4>{review.created_at.split("T")[0]}</h4>
                                    </section>
                                    {this.convertRatingsToStars(review.rating)}
                                    <p>{review.comment}</p>
                                    {/* <p onClick={this.props.updateHandler} >{review.helpful.length === 0 ? Helpful? : Helpful review.helpful }</p> */}
                                </li>
                                )
                            }  
                            // else if (review.id === userReviewForThisProduct.id) {
                            //     <li id="reviews" key={index}>
                            //         <section>
                            //             {
                            //                 review.user.first_name.length === 0 ?
                            //                     <h3>Anonymous</h3>
                            //                     :
                            //                     <h3>{review.user.first_name}</h3>
                            //             }
                            //             <h4>{review.created_at.split("T")[0]}</h4>
                            //             <button value={review.id} onClick={this.deleteHandler}>Delete</button>
                            //         </section>
                            //         {this.convertRatingsToStars(review.rating)}
                            //         <p>{review.comment}</p>
                            //         {/* <p onClick={this.props.updateHandler} >{review.helpful.length === 0 ? Helpful? : Helpful review.helpful }</p> */}
                            //     </li>

                            // } 
                            else {
                                return (
                                    <li id="reviews" key={index}>
                                        <section>
                                            {
                                                review.user.first_name.length === 0 ?
                                                <h3>Anonymous</h3>
                                                :
                                                <h3>{review.user.first_name}</h3>
                                            }
                                            <h4>{review.created_at.split("T")[0]}</h4>
                                        </section>
                                        {this.convertRatingsToStars(review.rating)}
                                        <p>{review.comment}</p>
                                        {/* <p onClick={this.props.updateHandler} >{review.helpful.length === 0 ? Helpful? : Helpful review.helpful }</p> */}
                                    </li>
                                )
                            } 

                        }
                        )
                    }
                </ul>


            </div>
        )
    }


}

export default ReviewIndex;