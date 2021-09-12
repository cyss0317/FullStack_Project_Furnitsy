# README
## Furnitsy

A full-stack single-page Etsy clone where users can find furniture, browse through photos, add items to cart, and leave reviews for items. Ruby on Rails was used to store furniture information, reviews, and user’s data into the backend and React and Redux were used for frontend Used AWS(S3) to store all the images and attached to each furniture.
Users can sign up and sign in by checking its credentials and used Modal to give better user experience. Nav bar shows the item by categories, by clicking it would render all the items fall into the category. Items that users want, they can add to their cart and shows the total number of items in your cart and price. User can also search item by the keywords. 

[Furnitsy live URL](furnitsy.herokuapp.com)

1. Login and review :

![](https://github.com/cyss0317/FullStack_Project_Furnitsy/blob/main/GIF/login-1.gif?raw=true)

2. Login and review :

![](https://github.com/cyss0317/FullStack_Project_Furnitsy/blob/main/GIF/login-2.gif?raw=true)

3. Browse :

![](https://github.com/cyss0317/FullStack_Project_Furnitsy/blob/main/GIF/browse-1.gif?raw=true)

4. Browse :

![](https://github.com/cyss0317/FullStack_Project_Furnitsy/blob/main/GIF/browse-2.gif?raw=true)



1. Feature: Buttons to navigate through pictures and user can click on the pictures they prefer to enlarge will display in main picture container. 
* Challenge I ran into, setting the mainPic to the actual main picture I desired to display and used index for side buttons. I did changed order of the list of images attached to the AWS, so I can key into it. And it required me to double click for it to actually change the image. This was solved by using separate variable to changed the state instead of change it directly. 


```javascript
    componentDidUpdate(preProps){
        console.log("preProps", preProps)
        if(preProps.photoUrls.length !== this.props.photoUrls.length){
            this.setState({mainPic:  this.props.photoUrls[0]})
        }
    }
        leftSvgClickhandler(e) {
            e.preventDefault();
        let newIndex = this.props.photoUrls.indexOf(this.state.mainPic) - 1 < 0 ? this.props.photoUrls.length - 1 : this.props.photoUrls.indexOf(this.state.mainPic) - 1
        this.setState({ index: newIndex })
        this.setState({ mainPic: this.props.photoUrls[newIndex] })
    }
    render(){
        return(
            <div className="main-picture-container">
                <button className="svg-button" id="left-svg-button"onClick={this.leftSvgClickhandler} >
                </button>
                <img className="picture-container-main"src={ this.state.mainPic === undefined ? this.props.photoUrls[0] : this.state.mainPic } alt="" />
                <button className="svg-button" id="right-svg-button" onClick={this.rightSvgClickhandler}>
                </button>
            </div>
        )
    }
```
2. Feature: Display different review layouts depends on the currentUser or if currentUser has left a review before. 
* Challege I ran into, It displayed reviews only when user was logged in. 
I expected the currentuser to be defined after a second componentDidMount. But it just return nothing instead returning the reviews. This was taken care of with else statement which assigns and renders the reviews for the product.
```javascript
    //before
    if (currentUser === undefined) return null;
    let userReviewForThisProduct ;
    let userReview ;

    userReviewForThisProduct = currentUser.reviews.filter((review) => review.product_id === productId)

    userReview =  userReviewForThisProduct.length === 0 ? null : reviews[userReviewForThisProduct[0].id];
    //after
    let userReviewForThisProduct ;
    let userReview ;
    if ( currentUser === undefined) {
        
    } else {
        userReviewForThisProduct = currentUser.reviews.filter((review) => review.product_id === productId)
        userReview =  userReviewForThisProduct.length === 0 ? null : reviews[userReviewForThisProduct[0].id];
    }

```
