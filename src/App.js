import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CategoryItemDetail from './components/Home/categoryItemDetails/CategoryItemDetail';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import OrderConfirmed from './components/OrderConfirmed/OrderConfirmed';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/categoryItemDetails/:id">
              <CategoryItemDetail></CategoryItemDetail>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </Route>
            <PrivateRoute path="/orderConfirmed">
                <OrderConfirmed></OrderConfirmed>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
