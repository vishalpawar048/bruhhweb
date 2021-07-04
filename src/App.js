import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import WishlistPage from "./pages/WishlistPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route
          exact
          path="/products/:category/:type?"
          component={ProductsPage}
        ></Route>
        <Route
          exact
          path="/admin/products/:category/:type/:admin"
          component={ProductsPage}
        ></Route>
        <Route
          exact
          path="/products/:category/:type/:_id"
          component={ProductDescriptionPage}
        ></Route>
        <Route exact path="/aboutUs">
          <AboutUsPage />
        </Route>
        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
     
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
