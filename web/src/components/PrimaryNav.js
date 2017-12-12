import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function PrimaryNav({ 
    wishlist, 
    signedIn 
}) {
  return (
    <nav className="primary">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>

        {signedIn ? (
          <Fragment>
            <li>
                {console.log(wishlist)}
              <Link to="/wishlist">{ wishlist ? (`Wishlist (${wishlist.products.length})`) : null } </Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
}

export default PrimaryNav;
