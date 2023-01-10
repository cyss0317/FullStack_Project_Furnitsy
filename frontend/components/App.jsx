import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Footer from "./Footer";
import Header from "./Header";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal";
import ProductIndexContainer from "./products/products_index_container";
import ProductShowContainer from "./products/product_show_container";
import CartShowContainer from "./carts/carts_show_container";
import ProductNavContainer from "./products/product_nav_container";
import SearchBarContainer from "./search_bar/search_bar_conatiner";
import { withRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Modal />
      <Header />
      <section className="main-section">
        <Switch>
          <Route path="/search/:keyword" component={SearchBarContainer} />
          <Route path="/products/:productId" component={ProductShowContainer} />
          <Route path="/category/:category" component={ProductNavContainer} />
          <Route path="/products" component={ProductIndexContainer} />
          <ProtectedRoute path="/cart_items" component={CartShowContainer} />
          <Route path="/" component={ProductIndexContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
      </section>
      <Footer />
    </>
  );
};
// };

export default withRouter(App);
