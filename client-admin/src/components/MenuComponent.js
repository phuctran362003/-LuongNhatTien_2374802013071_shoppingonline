import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class MenuComponent extends Component {
  static contextType = MyContext;

  lnkLogoutClick = () => {
    this.context.setToken('');
    this.context.setUsername('');
  };

  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
            <li className="menu">
              <Link to="/home">Home</Link>
            </li>
            <li className="menu">
              <Link to="/category">Category</Link>
            </li>
            <li className="menu">
              <Link to="/product">Product</Link>
            </li>
            <li className="menu">
              <Link to="/order">Order</Link>
            </li>
            <li className="menu">
              <Link to="/customer">Customer</Link>
            </li>
          </ul>
        </div>

        <div className="float-right">
          Hello <b>{this.context.username}</b> |{' '}
          <Link to="/login" onClick={this.lnkLogoutClick}>
            Logout
          </Link>
        </div>

        <div className="float-clear"></div>
      </div>
    );
  }
}

export default MenuComponent;
