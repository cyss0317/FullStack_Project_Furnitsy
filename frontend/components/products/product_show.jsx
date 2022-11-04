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
    };

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
            {/* important! */}
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
      <div className="product-show-picture-container-inner">
        {imageList()}
        {mainImage()}
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
        <div id="price-container">
          <p className="show-price">
            <span></span> ${product.price}.00{" "}
          </p>
          <div>
            <svg
              id="price-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
            </svg>
            <b id="price-in-stock">In stock</b>
          </div>
        </div>
        <form
          align="center"
          id="show-quantity-container"
          onSubmit={this.addToCartHandler}
        >
          <label>Quantity</label>
          <select
            name="quantity"
            id="show-quantity"
            defaultValue={this.state.quantity}
            onChange={this.onChangeHandler}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <div id="add-to-cart-container">
            <input id="add-to-cart" type="submit" value="Add to cart" />
          </div>
        </form>
        <div id="">
          <div></div>
          <div></div>
        </div>

        <p className="show-description">
          <button className="buttons">Description :</button>{" "}
          {product.description}{" "}
        </p>
        <ul>
          <button className="highlights-button">Highlights </button>
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
          <div className="product-show-picture-container-outter">
            {this.productImages()}
            <ReviewIndex {...this.props} />
          </div>
          {this.productInfo()}
        </div>
      </section>
    );
  }
}

export default ProductShow;
