import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

import './App.css';

import Homepage from "./pages/Homepage/Homepage"
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }


      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUp />
              ) 
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
