import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CardIcon from "../card-icon/card-icon.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCardHidden } from "../../redux/card/card.selectors";
import { selecetCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardDropdown from "../card-dropdown/card-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CardIcon />
    </div>
    {hidden ? null : <CardDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selecetCurrentUser,
  hidden: selectCardHidden,
});
export default connect(mapStateToProps)(Header);
