# README

## Furnitsy

A full-stack single-page Etsy clone where users can find furniture, browse through photos, add items to cart, and leave reviews for items. Ruby on Rails was used to store furniture information, reviews, and user’s data into the backend and React and Redux were used for frontend Used AWS(S3) to store all the images and attached to each furniture.
Users can sign up and sign in by checking its credentials and used Modal to give better user experience. Nav bar shows the item by categories, by clicking it would render all the items fall into the category. Items that users want, they can add to their cart and shows the total number of items in your cart and price. User can also search item by the keywords.

### Enviorment Setup Instruction
1. Install Ruby
  # install rbenv
    brew install rbenv

    # add to the PATH (rbenv commands are now available from terminal)
    # .bashrc (or .zshrc for Catalina+ users) is the file that contains 
    # all of our terminal settings
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    # CATALINA+ USERS:
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc


    # initialize rbenv every time you open a new console window (otherwise 
    # our system ruby version will take over when we start a new terminal session)
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    # CATALINA+ USERS:
    echo 'eval "$(rbenv init -)"' >> ~/.zshrc

    # update current console window with new settings
    source ~/.bashrc
    # CATALINA+ USERS:
    source ~/.zshrc

    # source .bashrc from .bash_profile (unnecessary for CATALINA USERS)
    echo 'source ~/.bashrc' >> ~/.bash_profile

    # install Ruby version 3.1.2
    rbenv install 3.1.2

    # set version 3.1.2 to be our global default
    rbenv global 3.1.2

    # the 'rehash' command updates the environment to your configuration
    rbenv rehash

    # and let's verify everything is correct
    # check the version
    ruby -v # => 3.1.2

    # check that we are using rbenv (this tells you where the version of ruby you are using is installed)
    which ruby # => /Users/your-username/.rbenv/shims/ruby
  # In case terminal complains about it couldn't install it due to the logs
     RUBY_CFLAGS="-Wno-error=implicit-function-declaration" rbenv install 3.1.2 

2. Check out the instruction file inside Config and folllow the instruction
3. Inside the main folder, run "bundle install" => This will install the libraries that RoR requires to be ran
4. From the main folder, run "cd src" and run "npm install" => This will install all the libraries that React.js and JavaScript require to be ran.
5. Install PostgreSQL => This will store the data when we run command "rails db:setup"
IMPORTANT!!!
    1. If you own M1 macbook, please go to Applications folder and make a duplicate of "terminal"
    2. Install Rosetta
    3. Rename the duplicated one to "Rosetta terminal" and right click on the app. Enable "Open with Rosetta"
6. Run "rails db:setup" => This will seed the data(/db/seeds/seeds.rb)
    IF YOU OWN M1 Macbook
    Please open your "Rosetta Terminal" and cd into the main root and run "rails db:setup"
7. Inside the main root folder, run "rails s" => This will start the rails server
8. Inside the main root folder, run "npm run start" => This will run the React
9. You should be GOOD to go! Please enjoy!


when it throws an error about the log file
 RUBY_CFLAGS="-Wno-error=implicit-function-declaration" rbenv install 3.1.2 

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

- Challenge I ran into, setting the mainPic to the actual main picture I desired to display and used index for side buttons. I did changed order of the list of images attached to the AWS, so I can key into it. And it required me to double click for it to actually change the image. This was solved by using separate variable to changed the state instead of change it directly.

```javascript
    componentDidUpdate(preProps){
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

- Challege I ran into, It displayed reviews only when user was logged in.
  I expected the currentuser to be defined after a second componentDidMount. But it just return nothing instead returning the reviews. This was taken care of with else statement which assigns and renders the reviews for the product.

```javascript
//before
if (currentUser === undefined) return null;
let userReviewForThisProduct;
let userReview;

userReviewForThisProduct = currentUser.reviews.filter(
  (review) => review.product_id === productId
);

userReview =
  userReviewForThisProduct.length === 0
    ? null
    : reviews[userReviewForThisProduct[0].id];
//after
let userReviewForThisProduct;
let userReview;
if (currentUser === undefined) {
} else {
  userReviewForThisProduct = currentUser.reviews.filter(
    (review) => review.product_id === productId
  );
  userReview =
    userReviewForThisProduct.length === 0
      ? null
      : reviews[userReviewForThisProduct[0].id];
}
```
