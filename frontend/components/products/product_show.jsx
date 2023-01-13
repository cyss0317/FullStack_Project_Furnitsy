import React from "react";
import ReviewIndex from "../reviews/reviews_index";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // errors: this.props.errors,
      mainPic: props.photoUrls[0],
      quantity: 1,
      index: 0,
      addedToCart: false,
    };
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    this.clickPictureHandler = this.clickPictureHandler.bind(this);
    this.rightSvgClickhandler = this.rightSvgClickhandler.bind(this);
    this.leftSvgClickhandler = this.leftSvgClickhandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.productImages = this.productImages.bind(this);
    this.productInfo = this.productInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(preProps) {
    if (preProps.photoUrls.length !== this.props.photoUrls.length) {
      this.setState({ mainPic: this.props.photoUrls[0] });
    }
  }
  rightSvgClickhandler(e) {
    e.preventDefault();
    let newIndex =
      this.props.photoUrls.indexOf(this.state.mainPic) + 1 >
      this.props.photoUrls.length + 1
        ? 0
        : this.props.photoUrls.indexOf(this.state.mainPic) + 1;
    this.setState({ index: newIndex });
    this.setState({ mainPic: this.props.photoUrls[newIndex] });
  }

  leftSvgClickhandler(e) {
    e.preventDefault();
    let newIndex =
      this.props.photoUrls.indexOf(this.state.mainPic) - 1 < 0
        ? this.props.photoUrls.length - 1
        : this.props.photoUrls.indexOf(this.state.mainPic) - 1;
    this.setState({ index: newIndex });
    this.setState({ mainPic: this.props.photoUrls[newIndex] });
  }

  onChangeHandler(e) {
    this.setState({ quantity: e.currentTarget.value });
  }

  clickPictureHandler(e) {
    this.setState({ mainPic: e.currentTarget.alt });
    this.setState({ index: this.props.photoUrls.indexOf(this.state.mainPic) });
  }

  addToCartHandler(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createCartItem(this.props.product.id, this.state.quantity);
    } else {
      this.setState({ errors: "you need to login first" });
      this.props.openModal("Login");
    }
  }

  productImages() {
    const imageList = () => (
      <ul className="picture-container-list">
        {this.props.product.photoUrls.map((photo, index) => (
          <li key={index} className="picture-container-list-item-container">
            <img
              className="picture-container-list-item"
              src={photo}
              alt={photo}
              onClick={this.clickPictureHandler}
            />
          </li>
        ))}
      </ul>
    );
    const mainImage = () => (
      <div className="main-picture-container">
        <button
          className="svg-button"
          id="left-svg-button"
          onClick={this.leftSvgClickhandler}
        >
          <ArrowBackIosNewIcon
            fontSize="large"
            style={{ color: "#22222280" }}
          />
        </button>
        <img
          className="picture-container-main"
          src={
            this.state.mainPic === undefined
              ? this.props.photoUrls[0]
              : this.state.mainPic
          }
          alt=""
        />
        <button
          className="svg-button"
          id="right-svg-button"
          onClick={this.rightSvgClickhandler}
        >
          <ArrowForwardIosIcon
            fontSize="large"
            style={{ color: "#22222280" }}
          />
        </button>
      </div>
    );
    return (
      <div>
        <div className="product-show-picture-container-inner">
          {imageList()}
          {mainImage()}
        </div>
      </div>
    );
  }

  productInfo() {
    const { product } = this.props;
    const arrHighlights = product.highlights.split("!");
    return (
      <div className="product-show-info">
        <p className="show-category">{product.category} </p>
        <br />
        <p className="show-name">Name: {product.name} </p>
        <p className="show-color">Color: {product.color} </p>
        <form
          align="center"
          id="show-quantity-container"
          onSubmit={this.addToCartHandler}
        >
          <div id="price-container">
            <div>
              <p className="show-price">
                ${product.price}.00 <span id="price-in-stock">In stock</span>{" "}
              </p>
            </div>
            <div className="quantity-container">
              <label>Quantity</label>
              <select
                name="quantity"
                id="show-quantity"
                defaultValue={this.state.quantity}
                onChange={this.onChangeHandler}
              >
                {this.values.map((ele) => (
                  <option key={`quantity-value-${ele}`}>{ele}</option>
                ))}
              </select>
            </div>
          </div>
          <div id="add-to-cart-container">
            <input
              id="add-to-cart"
              type="submit"
              value="Add to cart"
              onClick={() => {
                this.setState({ ...this.state, addedToCart: true });
                this.props.openModal("Added")
              }}
            />
          </div>
        </form>
        <div id="">
          <div></div>
          <div></div>
        </div>

        <section className="show-description button">
          <h2 className="description flex-center-center">Description :</h2>
          <p> {product.description} </p>
        </section>
        <ul>
          <h2 className="description flex-center-center">Highlights :</h2>
          {arrHighlights.map((highlight, index) => (
            <li key={index} className="highlight-item">
              &#9745; {highlight}
            </li>
          ))}
        </ul>
        <p className="show-measurement">Measurement: {product.measurement}</p>
      </div>
    );
  }

  render() {
    if (this.props.product === undefined) {
      return null;
    }

    if (this.state.quantity === undefined) {
      this.setState({ quantity: 1 });
    }

    return (
      <section key={this.props.key} className="show-main-container">
        <div className="product-show-container">
          {this.productImages()}
          <ReviewIndex {...this.props} />
          {this.productInfo()}
        </div>
      </section>
    );
  }
}

export default ProductShow;
